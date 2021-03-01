import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiProvider } from './entities/api.model';
import { ApiService } from './api.service';

@Module({
  controllers: [ApiController],
  providers: [ApiProvider, ApiService],
})
export class ApiModule {}
