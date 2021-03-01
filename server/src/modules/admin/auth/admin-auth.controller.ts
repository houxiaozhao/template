import {
  Controller,
  Post,
  UseGuards,
  Request,
  Logger,
  Get,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  AdminLoginDto,
  AdminProfileDto,
  AdminUserinfoDto,
} from './dto/admin-auth.dto';
import { AdminAuthService } from './admin-auth.service';
import { JWTAdminAuthGuard } from './jwt-admin-auth.guard';
import { LocalAuthGuard } from './local-admin-auth.guard';

@ApiTags('管理员认证')
@Controller('admin-auth')
export class AdminAuthController {
  constructor(private readonly adminAithService: AdminAuthService) {}

  @Post('login')
  @ApiBody({
    type: AdminLoginDto,
  })
  @ApiResponse({
    status: 200,
    type: AdminUserinfoDto,
  })
  @ApiOperation({ summary: '管理员登陆' })
  @UseGuards(LocalAuthGuard)
  async login(@Request() { user }) {
    Logger.log(user, '登陆用户');
    return {
      _id: user.userid,
      username: user.username,
      access_token: await this.adminAithService.signJWT(
        user.username,
        user.userid,
      ),
    };
  }

  @Get('profile')
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    type: AdminProfileDto,
  })
  @ApiOperation({ summary: '管理员获取信息' })
  @UseGuards(JWTAdminAuthGuard)
  async getProfile(@Request() { user }) {
    return {
      _id: user.userid,
      username: user.username,
    };
  }
}
