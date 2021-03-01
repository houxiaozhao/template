import { OmitType, PartialType } from '@nestjs/swagger';
import { ArrayUnique, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CompanyDto {
  _id: string;
  name: string;
}
export class CreateCompanyAndUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsArray()
  @ArrayUnique()
  permissions: string[];
}
export class IdDto {
  _id: string;
}
export class CreateCompanyDto extends OmitType(CompanyDto, ['_id'] as const) {}
export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
