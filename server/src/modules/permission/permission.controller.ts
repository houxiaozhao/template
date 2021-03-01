import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { trim } from 'lodash';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { PermissionExtendApisDto } from '../admin/permission/dto/permission.dto';
import { PermissionService } from '../admin/permission/permission.service';
import { AuthorizationGuard } from '../auth/authorization.guard';
import { JWTAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user_permission')
@ApiTags('用户权限接口')
@ApiBearerAuth()
@UseGuards(JWTAuthGuard, AuthorizationGuard)
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get('')
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
}
