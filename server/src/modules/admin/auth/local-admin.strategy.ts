import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';

@Injectable()
export class LocalAdminStrategy extends PassportStrategy(Strategy,'local-admin') {
  constructor(private readonly adminAuthService: AdminAuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    Logger.log('验证管理员');
    const user = await this.adminAuthService.validateUser(username, password);
    if (!user) {
      throw new ApiException(
        '登陆失败，用户名或密码错误',
        ApiErrorCode.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
