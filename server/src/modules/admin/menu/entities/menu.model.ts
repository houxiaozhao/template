import { prop, plugin, Ref, modelOptions } from '@typegoose/typegoose';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Menu {
  @IsString()
  @IsNotEmpty({})
  @prop({ required: true })
  title: string;

  @IsString()
  @prop({ required: false })
  remarks: string;

  @IsString()
  @prop({ required: false })
  icon: string;

  @IsString()
  @prop({ required: true, enum: ['菜单', '菜单组'] })
  type: string;

  @IsString()
  @prop({ required: false })
  path: string;

  @prop({ ref: () => Menu, required: false })
  parent: Ref<Menu>;

  @IsNumber()
  @prop({ required: true, default: 0 })
  order: number;
}
export const MenuProvider = getProviderByTypegooseClass(Menu);
