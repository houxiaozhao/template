import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { DeviceProvider } from './entities/device.entity';

@Module({
  controllers: [DeviceController],
  providers: [DeviceService, DeviceProvider],
})
export class DeviceModule {}
