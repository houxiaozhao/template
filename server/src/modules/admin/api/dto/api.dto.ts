import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class ApiDto {
  _id: string;
  @ApiProperty({ enum: ['GET', 'POST', 'PUT', 'DELETE'] })
  method: string;
  url: string;
  alias?: string;
  @ApiProperty({ default: false })
  verification: boolean;
}
export class IdDto {
  _id: string;
}
export class CreateApiDto extends OmitType(ApiDto, ['_id'] as const) {} //从ApiDto删除_id
export class UpdateApiDte extends PartialType(CreateApiDto) {} // 全部改为可选
