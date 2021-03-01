import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from 'nestjs-config';

import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UtilModule } from '../util/util.module';
import { CompanyModule } from '../admin/company/company.module';
@Module({
  imports: [
    UserModule,
    UtilModule,
    CompanyModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => config.get('jwt'),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
