import {
  Body,
  Controller,
  Delete,
  Get,
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
import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';
import {
  RoleDto,
  CreateRoleDto,
  UpdateRoleDte,
  RoleExtendApisDto,
} from './dto/role.dto';
import { RoleService } from './role.service';
import { trim } from 'lodash';
import { JWTAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { User } from 'src/common/decorator/user.decorator';
import { UserType } from 'src/common/interfaces/user.interface';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
@ApiTags('角色管理')
@ApiBearerAuth()
@Controller('role')
@UseGuards(JWTAuthGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  @ApiOperation({ summary: '获取角色列表' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: RoleExtendApisDto,
  })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'sort', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'search', required: false })
  async index(
    @User() user: UserType,
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
    querys.company = user.company;
    return await this.roleService.index(querys, { page, sort, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: '获取角色' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    type: RoleExtendApisDto,
  })
  async show(@Param('id', new MongoIdPipe()) id, @User() user: UserType) {
    return this.roleService.show(id, user.company);
  }

  @Post()
  @ApiOperation({ summary: '创建角色' })
  @ApiBody({
    type: CreateRoleDto,
  })
  @ApiResponse({
    status: 200,
    type: RoleDto,
  })
  async create(@Body() body: CreateRoleDto, @User() user: UserType) {
    return this.roleService.create(
      Object.assign(body, { company: user.company }),
    );
  }

  @Put(':id')
  @ApiOperation({ summary: '更新角色' })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateRoleDte })
  @ApiResponse({
    status: 200,
    type: RoleDto,
  })
  async update(
    @Param('id', new MongoIdPipe()) id,
    @Body() body,
    @User() user: UserType,
  ) {
    return this.roleService.update(id, user.company, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除角色' })
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    type: RoleDto,
  })
  async delete(@Param('id', new MongoIdPipe()) id) {
    return this.roleService.delete(id);
  }
}
