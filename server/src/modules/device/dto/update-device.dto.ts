import { PartialType } from '@nestjs/mapped-types'; //https://trilon.io/blog/introducing-mapped-types-for-nestjs
import { CreateDeviceDto } from './create-device.dto';

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {}
