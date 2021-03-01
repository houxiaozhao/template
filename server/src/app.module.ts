import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { DatabaseModule } from 'src/common/processors/database/database.module';
import { CacheModule } from 'src/common/processors/cache/cache.module';
import { ConfigModule } from 'nestjs-config';
import { HttpCacheInterceptor } from './common/interceptor/cache.interceptor';
import { ScheduleModule } from '@nestjs/schedule';
import * as path from 'path';

import { AuthModule } from './modules/auth/auth.module';
import { AdminAuthModule } from './modules/admin/auth/admin-auth.module';

import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin/admin.module';
import { ApiModule } from './modules/admin/api/api.module';
import { PermissionModule } from './modules/admin/permission/permission.module';
import { MenuModule } from './modules/admin/menu/menu.module';
import { ButtonModule } from './modules/admin/button/button.module';
import { CompanyModule } from './modules/admin/company/company.module';
import { RoleModule } from './modules/role/role.module';
import { UserPermissionModule } from './modules/permission/permission.module';

import { HomeModule } from './modules/home/home.module';
import { FileModule } from './modules/file/file.module';
import { AuthzMiddleware } from './common/middlewares/authorization.middleware';
import { DeviceModule } from './modules/device/device.module';
const ENV = process.env.NODE_ENV || 'dev';
@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
      path: path.resolve(process.cwd(), 'env', `${ENV}.env`),
    }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    CacheModule,
    HomeModule,
    UserModule,
    AuthModule,
    AdminAuthModule,
    AdminModule,
    MenuModule,
    ButtonModule,
    ApiModule,
    PermissionModule,
    RoleModule,
    CompanyModule,
    PermissionModule,
    UserPermissionModule,
    FileModule,
    DeviceModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpCacheInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthzMiddleware).forRoutes('*');
  }
}
