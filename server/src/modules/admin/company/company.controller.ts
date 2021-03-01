import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';
import {
  CompanyDto,
  CreateCompanyAndUserDto,
  UpdateCompanyDto,
} from './dto/company.dto';
import { CompanyService } from './company.service';
import { trim } from 'lodash';
import { JWTAdminAuthGuard } from '../auth/jwt-admin-auth.guard';
import { UserService } from 'src/modules/user/user.service';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
import { RoleService } from 'src/modules/role/role.service';
@ApiTags('公司管理')
@ApiBearerAuth()
@Controller('company')
@UseGuards(JWTAdminAuthGuard)
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly userService: UserService,
    private readonly roleService: RoleService,
  ) {}

  @Get()
  @ApiOperation({ summary: '获取公司列表' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: CompanyDto,
  })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'sort', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'search', required: false })
  async index(
    @Query('page', new ParseIntPipe()) page = 1,
    @Query('sort') sort = '-_id',
    @Query('limit', new ParseIntPipe()) limit = 10,
    @Query('search') search?: string,
  ) {
    const querys: any = {};
    if (trim(search)) {
      const searchRegExp = new RegExp(trim(search), 'i');
      querys.$or = [{ title: searchRegExp }, { content: searchRegExp }];
    }
    return await this.companyService.index(querys, { page, sort, limit });
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    type: CompanyDto,
  })
  @ApiOperation({ summary: '获取公司' })
  async show(@Param('id', new MongoIdPipe()) id) {
    return this.companyService.show(id);
  }

  @Post()
  @ApiBody({
    type: CreateCompanyAndUserDto,
  })
  @ApiResponse({
    status: 200,
    type: CompanyDto,
  })
  @ApiOperation({ summary: '创建公司' })
  async create(@Body() body: CreateCompanyAndUserDto) {
    if (await this.userService.findByPhone(body.phone)) {
      throw new ApiException(
        '用户手机号重复',
        ApiErrorCode.USER_DUPLICATE,
        HttpStatus.BAD_REQUEST,
      );
    }
    const company = await this.companyService.create({ name: body.name });
    const user = await this.userService.create({
      phone: body.phone,
      username: body.username,
      password: body.password,
      company: company._id,
    });
    const role = await this.roleService.create({
      alias: '管理员',
      company: company._id,
      permissions: body.permissions,
    });
    await this.userService.update(user._id, { roles: [role._id] });
    return company;
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateCompanyDto })
  @ApiResponse({
    status: 200,
    type: CompanyDto,
  })
  @ApiOperation({ summary: '更新公司' })
  async update(@Param('id', new MongoIdPipe()) id, @Body() body) {
    return this.companyService.update(id, body);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    type: CompanyDto,
  })
  @ApiOperation({ summary: '删除公司' })
  async delete(@Param('id', new MongoIdPipe()) id) {
    return this.companyService.delete(id);
  }
}
