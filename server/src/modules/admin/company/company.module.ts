import { Module } from '@nestjs/common';
import { RoleModule } from 'src/modules/role/role.module';
import { UserModule } from 'src/modules/user/user.module';
import { CompanyController } from './company.controller';
import { CompanyProvider } from './entities/company.model';
import { CompanyService } from './company.service';

@Module({
  imports: [UserModule, RoleModule],
  controllers: [CompanyController],
  providers: [CompanyProvider, CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
