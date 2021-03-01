import { Module } from '@nestjs/common';
import { PermissionModule } from '../admin/permission/permission.module';
import { PermissionController } from './permission.controller';
@Module({
  imports: [PermissionModule],
  controllers: [PermissionController],
  providers: [],
})
export class UserPermissionModule {}
