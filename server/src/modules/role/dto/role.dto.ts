import { OmitType, PartialType } from '@nestjs/swagger';
import { ApiDto } from '../../admin/api/dto/api.dto';

export class RoleDto {
  _id: string;
  alias?: string;
  permissions: string[];
  company: string;
}
export class RoleExtendApisDto {
  _id: string;
  alias?: string;
  permissions: ApiDto[];
  company: string;
}
export class IdDto {
  _id: string;
}
export class CreateRoleNotCompanyDto extends OmitType(RoleDto, [
  '_id',
  'company',
] as const) {}

export class CreateRoleDto extends OmitType(RoleDto, ['_id'] as const) {} //从RoleDto删除_id
export class UpdateRoleDte extends PartialType(CreateRoleDto) {} // 全部改为可选
