import {
  prop,
  plugin,
  defaultClasses,
  Ref,
  modelOptions,
} from '@typegoose/typegoose';
import { IsString, ArrayUnique, IsArray } from 'class-validator';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';
import { Company } from '../../admin/company/entities/company.model';
import { Permission } from '../../admin/permission/entities/permission.model';

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Role {
  @IsString()
  @prop({ required: false })
  alias: string;

  @IsArray()
  @ArrayUnique()
  @prop({ ref: () => Permission })
  permissions: Ref<Permission>[];

  @prop({ ref: () => Company, required: true })
  company: Ref<Company>;
}
export const RoleProvider = getProviderByTypegooseClass(Role);
