import { HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import Sha256 = require('crypto-js/hmac-sha256');
import { ConfigService } from 'nestjs-config';
import { JwtService } from '@nestjs/jwt';
import { CacheService } from 'src/common/processors/cache/cache.service';
import { ApiException } from 'src/common/exceptions/api.exception';
import { ApiErrorCode } from 'src/common/enums/api.error.code.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
    private readonly cacheService: CacheService,
  ) {}

  async signJWT(username, userid) {
    return this.jwtService.sign({
      username: username,
      sub: userid,
    });
  }
  async validateUser(phone: string, pass: string) {
    const user = await this.userService.findByPhone(phone);
    if (
      user &&
      user.password ===
        Sha256(pass + user.salt, this.config.get('secret')).toString()
    ) {
      // 自动把user 附加到request对象上
      return {
        userid: user._id,
        phone: user.phone,
        username: user.username,
        company: user.company,
      };
    }
    return null;
  }
  async validateCaptcha(uuid, code: string) {
    const cacheCode: string = await this.cacheService.get('captcha:' + uuid);
    if (cacheCode.toLowerCase() === code.toLowerCase()) {
      return true;
    } else {
      await this.cacheService.del('captcha:' + uuid);
      throw new ApiException(
        '验证码错误',
        ApiErrorCode.CAPTCHA_ERROR,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
