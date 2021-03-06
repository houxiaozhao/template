import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import { UserService } from '../user/user.service';
import { ApiService } from '../admin/api/api.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('secret'),
      passReqToCallback: true,
    });
  }
  async validate(request, payload) {
    Logger.log('用户验证');
    const user = await this.userService.show(payload.sub);
    if (!user) {
      return false;
    }
    return {
      userid: payload.sub,
      username: user.username,
      phone: user.phone,
      company: user.company,
    };
  }
}
