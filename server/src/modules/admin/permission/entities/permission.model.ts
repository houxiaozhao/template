import { prop, plugin, Ref, modelOptions } from '@typegoose/typegoose';
import { IsString, ArrayUnique, IsArray } from 'class-validator';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { getProviderByTypegooseClass } from 'src/common/transformers/model.transformer';
import { Api } from '../../api/entities/api.model';
import { Button } from '../../button/entities/button.model';
import { Menu } from '../../menu/entities/menu.model';

@plugin(mongoosePaginate)
@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Permission {
  @IsString()
  @prop({ required: false })
  alias: string;

  @IsArray()
  @ArrayUnique()
  @prop({ ref: () => Api })
  apis: Ref<Api>[];

  @IsArray()
  @ArrayUnique()
  @prop({ ref: () => Menu })
  menus: Ref<Menu>[];

  @IsArray()
  @ArrayUnique()
  @prop({ ref: () => Button })
  buttons: Ref<Button>[];
}
export const PermissionProvider = getProviderByTypegooseClass(Permission);
