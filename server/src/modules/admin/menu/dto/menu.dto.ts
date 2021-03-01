import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class MenuDto {
  _id: string;
  title: string;
  remarks?: string;
  icon?: string;
  @ApiProperty({ enum: ['菜单', '菜单组'] })
  type: string;
  path: string;
  parent?: string;
  @ApiProperty({ default: 0 })
  order?: number;
}
export class IdDto {
  _id: string;
}
export class CreateMenuDto extends OmitType(MenuDto, ['_id'] as const) {}
export class UpdateMenuDto extends PartialType(CreateMenuDto) {}
