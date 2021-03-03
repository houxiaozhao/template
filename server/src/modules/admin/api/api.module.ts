import { Global, Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiProvider } from './entities/api.model';
import { ApiService } from './api.service';

@Global()
@Module({
  controllers: [ApiController],
  providers: [ApiProvider, ApiService],
  exports: [ApiService],
})
export class ApiModule {}
