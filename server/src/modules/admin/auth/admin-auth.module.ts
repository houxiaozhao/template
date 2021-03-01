import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from 'nestjs-config';
import { AdminModule } from '../admin/admin.module';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';
import { JwtAdminStrategy } from './jwt-admin.strategy';
import { LocalAdminStrategy } from './local-admin.strategy';

@Module({
  imports: [
    AdminModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => config.get('jwt'),
      inject: [ConfigService],
    }),
  ],
  controllers: [AdminAuthController],
  providers: [AdminAuthService, LocalAdminStrategy, JwtAdminStrategy],
})
export class AdminAuthModule {}
