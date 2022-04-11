import {
  Body,
  Controller,
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
import { trim } from 'lodash';
import { User } from 'src/common/decorator/user.decorator';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';
import { ApiException } from 'src/common/exceptions/api.exception';
import { UserType } from 'src/common/interfaces/user.interface';
import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { AuthorizationGuard } from '../auth/authorization.guard';
import { JWTAuthGuard } from '../auth/jwt-auth.guard';
import {
  CreateUserDto,
  UpdateUserDto,
  UserNotPasswordExtendRoleDto,
} from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('用户管理')
@ApiBearerAuth()
@Controller('user')
@UseGuards(JWTAuthGuard, AuthorizationGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '获取用户列表' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: UserNotPasswordExtendRoleDto,
  })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'sort', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'role', required: false })
  async index(
    @User() user: UserType,
    @Query('page', new ParseIntPipe()) page = 1,
    @Query('sort') sort = '-_id',
    @Query('limit', new ParseIntPipe()) limit = 10,
    @Query('search') search?: string,
    @Query('role') role?: string,
  ) {
    const querys: any = {};
    if (trim(search)) {
      const searchRegExp = new RegExp(trim(search), 'i');
      querys.$or = [{ username: searchRegExp }, { phone: searchRegExp }];
    }
    if (role) {
      querys.roles = role;
    }
    querys.company = user.company;
    return await this.userService.index(querys, { page, sort, limit });
  }

  @Post()
  @ApiOperation({ summary: '创建用户' })
  @ApiBody({
    type: () => CreateUserDto,
  })
  @ApiResponse({
    status: 200,
    type: UserNotPasswordExtendRoleDto,
  })
  async create(@Body() body: CreateUserDto, @User() user: UserType) {
    if (await this.userService.findByPhone(body.phone)) {
      throw new ApiException(
        '用户手机号重复',
        ApiErrorCode.USER_DUPLICATE,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.userService.create(
      Object.assign(body, { company: user.company.toString() }),
    );
  }

  @Put(':id')
  @ApiOperation({ summary: '更新用户' })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, type: UserNotPasswordExtendRoleDto })
  async update(
    @Param('id', new MongoIdPipe()) id,
    @Body() body: UpdateUserDto,
    @User() user: UserType,
  ) {
    return this.userService.update(id, body);
  }
}
