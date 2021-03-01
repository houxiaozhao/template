import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class ButtonDto {
  _id: string;
  name: string;
  remarks?: string;
}
export class IdDto {
  _id: string;
}
export class CreateButtonDto extends OmitType(ButtonDto, ['_id'] as const) {}
export class UpdateButtonDto extends PartialType(CreateButtonDto) {}
