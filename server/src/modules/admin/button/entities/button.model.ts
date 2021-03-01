import { prop, plugin, modelOptions } from '@typegoose/typegoose';
import { IsString, IsNotEmpty } from 'class-validator';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Button {
  @IsString()
  @IsNotEmpty({})
  @prop({ required: true })
  name: string;

  @IsString()
  @prop({ required: false })
  remarks: string;
}
export const ButtonProvider = getProviderByTypegooseClass(Button);
