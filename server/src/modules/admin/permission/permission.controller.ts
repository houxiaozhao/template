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
  PermissionDto,
  CreatePermissionDto,
  UpdatePermissionDte,
  PermissionExtendApisDto,
} from './dto/permission.dto';
import { PermissionService } from './permission.service';
import { trim } from 'lodash';
import { JWTAdminAuthGuard } from '../auth/jwt-admin-auth.guard';
import { Permission } from './entities/permission.model';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
@ApiTags('权限管理')
@ApiBearerAuth()
@Controller('permission')
@UseGuards(JWTAdminAuthGuard)
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get()
  @ApiOperation({ summary: '获取权限列表' })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: PermissionExtendApisDto,
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
    return await this.permissionService.index(querys, { page, sort, limit });
  }

  @Get(':id')
  @ApiOperation({ summary: '获取权限' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({
    status: 200,
    type: PermissionExtendApisDto,
  })
  async show(@Param('id', new MongoIdPipe()) id) {
    return this.permissionService.show(id);
  }

  @Post()
  @ApiOperation({ summary: '创建权限' })
  @ApiBody({
    type: CreatePermissionDto,
  })
  @ApiResponse({
    status: 200,
    type: PermissionDto,
  })
  async create(@Body() body: Permission) {
    return this.permissionService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: '更新权限' })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdatePermissionDte })
  @ApiResponse({
    status: 200,
    type: PermissionDto,
  })
  async update(@Param('id', new MongoIdPipe()) id, @Body() body) {
    return this.permissionService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除权限' })
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    type: PermissionDto,
  })
  async delete(@Param('id', new MongoIdPipe()) id) {
    return this.permissionService.delete(id);
  }
}
