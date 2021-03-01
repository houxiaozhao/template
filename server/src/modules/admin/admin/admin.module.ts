import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminProvider } from './entities/admin.model';
import { AdminService } from './admin.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, AdminProvider],
  exports: [AdminService],
})
export class AdminModule {}
