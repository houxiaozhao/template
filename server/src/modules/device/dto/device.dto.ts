export class CreateDeviceDto {
  name: string;
}

export class DeviceDto {
  _id: string;
  name: string;
}

export class UpdateDeviceDto {
  name?: string;
}
