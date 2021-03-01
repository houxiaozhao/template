import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from 'nestjs-config';
import { AdminService } from '../admin/admin.service';
import Sha256 = require('crypto-js/hmac-sha256');

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}
  async validateUser(username: string, pass: string) {
    const user = await this.adminService.findByAdminname(username);
    if (
      user &&
      user.password ===
        Sha256(pass + user.salt, this.config.get('secret')).toString()
    ) {
      // 自动把user 附加到request对象上
      return {
        userid: user._id,
        username: user.username,
      };
    }
    return null;
  }
  async signJWT(username, userid) {
    return this.jwtService.sign({
      username: username,
      sub: userid,
    });
  }
}
