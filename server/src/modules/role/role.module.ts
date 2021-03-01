import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleProvider } from './entities/role.model';
import { RoleService } from './role.service';

@Module({
  controllers: [RoleController],
  providers: [RoleProvider, RoleService],
  exports: [RoleService],
})
export class RoleModule {}
