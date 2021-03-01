import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { DeviceProvider } from './entities/device.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [DeviceController],
  providers: [DeviceService, DeviceProvider],
})
export class DeviceModule {}
