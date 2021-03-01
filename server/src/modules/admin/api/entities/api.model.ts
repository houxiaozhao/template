import { prop, plugin, modelOptions } from '@typegoose/typegoose';
import { IsString, IsNotEmpty } from 'class-validator';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Api {
  @IsString()
  @IsNotEmpty({ message: '方法' })
  @prop({ required: true, enum: ['GET', 'POST', 'PUT', 'DELETE'] })
  method: string;

  @IsString()
  @IsNotEmpty({ message: '路由路径' })
  @prop({ required: true })
  url: string;

  @IsString()
  @prop({ required: false })
  alias: string;

  @prop({ default: false })
  verification: boolean;
}
export const ApiProvider = getProviderByTypegooseClass(Api);
