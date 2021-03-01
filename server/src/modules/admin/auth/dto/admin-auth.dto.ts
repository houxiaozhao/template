import { OmitType } from '@nestjs/swagger';

export class AdminLoginDto {
  username: string;
  password: string;
}
export class AdminUserinfoDto {
  _id: string;
  username: string;
  access_token: string;
}
export class AdminProfileDto extends OmitType(AdminUserinfoDto, ['access_token'] as const) {}
