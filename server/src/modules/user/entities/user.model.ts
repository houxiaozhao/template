import {
  defaultClasses,
  modelOptions,
  plugin,
  prop,
  Ref,
} from '@typegoose/typegoose';
import { ArrayUnique, IsArray, IsDate, IsString } from 'class-validator';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';
import { Company } from '../../admin/company/entities/company.model';
import { Role } from '../../role/entities/role.model';
import * as mongoosePaginate from 'mongoose-paginate-v2';

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: { timestamps: true },
})
export class User {
  @IsString()
  @prop({ required: true, unique: true })
  phone: string;

  @IsString()
  @prop({ required: true })
  username: string;

  @IsString()
  @prop({ required: true })
  password: string;

  @IsString()
  @prop({ required: true })
  salt: string;

  @IsString()
  @prop({ default: true })
  status: boolean;

  @prop({ required: false, ref: () => Company })
  company: Ref<Company>;

  @IsArray()
  @ArrayUnique()
  @prop({ ref: () => Role })
  roles: Ref<Role>[];

  @IsString()
  @prop({ required: false, enum: ['男', '女'], addNullToEnum: true })
  gender: string;

  @IsString()
  @prop({ required: false })
  email: string;

  @IsString()
  @prop({ required: false })
  code: string;

  @IsDate()
  @prop({ required: false })
  birth: Date;
}
export const UserProvider = getProviderByTypegooseClass(User);
