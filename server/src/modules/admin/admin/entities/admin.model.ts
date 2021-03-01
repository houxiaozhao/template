import { prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';

export class Admin {
  @IsString()
  @prop({ required: true, unique: true })
  username: string;

  @IsString()
  @prop({ required: true })
  password: string;

  @IsString()
  @prop({ required: true })
  salt: string;
}
export const AdminProvider=getProviderByTypegooseClass(Admin);
