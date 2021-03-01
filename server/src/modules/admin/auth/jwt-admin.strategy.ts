import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor(
    private readonly config: ConfigService,
    private readonly adminService: AdminService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('secret'),
      passReqToCallback: true,
    });
  }
  async validate(request, payload) {
    Logger.log('管理员验证');
    let admin = await this.adminService.show(payload.sub);
    if (admin) {
      return { userid: payload.sub, username: payload.username };
    } else {
      return false;
    }
  }

  // async validate(payload: any) {
  //   console.log('payload', payload);
  //   return { userid: payload.sub, username: payload.username };
  // }
}
