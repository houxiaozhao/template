import { OmitType, PartialType } from '@nestjs/swagger';
import { ApiDto } from '../../api/dto/api.dto';
import { MenuDto } from '../../menu/dto/menu.dto';

export class PermissionDto {
  _id: string;
  alias?: string;
  apis: string[];
  menus: string[];
  buttons: string[];
}
export class PermissionExtendApisDto {
  _id: string;
  alias?: string;
  apis: ApiDto[];
  menus: MenuDto[];
  buttons: string[];
}
export class IdDto {
  _id: string;
}
export class CreatePermissionDto extends OmitType(PermissionDto, [
  '_id',
] as const) {} //从PermissionDto删除_id
export class UpdatePermissionDte extends PartialType(CreatePermissionDto) {} // 全部改为可选
