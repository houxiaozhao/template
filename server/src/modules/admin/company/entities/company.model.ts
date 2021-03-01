import { prop, plugin, defaultClasses, modelOptions } from '@typegoose/typegoose';
import { IsString, IsNotEmpty } from 'class-validator';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Company {
  @IsString()
  @IsNotEmpty({})
  @prop({ required: true, unique: true })
  name: string;
}
export const CompanyProvider = getProviderByTypegooseClass(Company);
