import { OmitType } from '@nestjs/swagger';
import { RoleDto } from '../../role/dto/role.dto';

export class UserNotPasswordExtendRoleDto {
  _id: string;
  phone: string;
  username: string;
  status: boolean;
  company: string;
  roles: RoleDto[];
  gender: string;
  email: string;
  code: string;
  birth: string;
}
export class UserNotPasswordDto {
  _id: string;
  phone: string;
  username: string;
  status: boolean;
  company: string;
  roles: string[];
  gender: string;
  email: string;
  code: string;
  birth: string;
}

export class UserDto {
  _id: string;
  phone: string;
  username: string;
  password: string;
  salt: string;
  status?: boolean;
  company: string;
  roles: string[];
  gender: string;
  email: string;
  code: string;
  birth: number;
}

export class CreateUserDto extends OmitType(UserDto, [
  '_id',
  'company',
  'salt',
  'status',
] as const) {} //从UserDto删除_id

export class UpdateUserDto {
  username?: string;
  password?: string;
  status?: boolean;
  roles?: string[];
  gender?: string;
  email?: string;
  code?: string;
  birth?: number;
}
export class UpdateUser {
  username?: string;
  password?: string;
  status?: boolean;
  roles?: string[];
  salt?: string;
  gender?: string;
  email?: string;
  code?: string;
  birth?: number;
}
