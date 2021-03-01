import { OmitType } from '@nestjs/swagger';

export class SignupDto {
  phone: string;
  password: string;
}
export class LoginDto {
  phone: string;
  password: string;
  uuid: string;
  code: string;
}
export class verificationCodeLoginDto {
  phone: string;
  code: string;
}
class userMenus {
  icon: string;
  order: number;
  path: string;
  title: string;
  type: string;
  _id: string;
}
export class UserinfoDto {
  _id: string;
  phone: string;
  access_token: string;
  menus: userMenus[];
}
export class ProfileDto extends OmitType(UserinfoDto, [
  'access_token',
] as const) {}
