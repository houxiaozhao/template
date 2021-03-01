import { Module } from '@nestjs/common';
import { PermissionController } from './permission.controller';
import { PermissionProvider } from './entities/permission.model';
import { PermissionService } from './permission.service';

@Module({
  controllers: [PermissionController],
  providers: [PermissionProvider, PermissionService],
  exports: [PermissionService],
})
export class PermissionModule {}
