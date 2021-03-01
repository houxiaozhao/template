import { modelOptions, plugin, prop, Ref } from '@typegoose/typegoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { IsString } from 'class-validator';
import { Company } from 'src/modules/admin/company/entities/company.model';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Device {
  @IsString()
  @prop({ required: false })
  name: string;

  @IsString()
  @prop({ ref: () => Company, required: true })
  company: Ref<Company>;
}
export const DeviceProvider = getProviderByTypegooseClass(Device);
