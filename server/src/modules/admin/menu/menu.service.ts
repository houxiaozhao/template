import { Injectable } from '@nestjs/common';
import { Types, PaginateResult } from 'mongoose';
import { MongooseModel } from 'src/common/interfaces/mongoose.interface';
import { Menu } from './entities/menu.model';
import { InjectModel } from 'src/common/transformers/model.transformer';
import { toTree } from 'src/common/util/util';
import { CreateMenuDto } from './dto/menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu) private menuModel: MongooseModel<any>) {}
  async index(querys, options): Promise<PaginateResult<Menu>> {
    return this.menuModel.paginate(querys, options);
  }
  async show(id: Types.ObjectId | string): Promise<Menu> {
    return this.menuModel.findById(id);
  }
  async create(payload: CreateMenuDto): Promise<Menu> {
    return this.menuModel.create(payload);
  }
  async update(id: Types.ObjectId | string, payload: Menu): Promise<Menu> {
    Reflect.deleteProperty(payload, 'createdAt');
    Reflect.deleteProperty(payload, 'updatedAt');
    return this.menuModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        payload,
        { new: true },
      )
      .exec();
  }
  async delete(id: Types.ObjectId | string): Promise<Menu> {
    return this.menuModel
      .findOneAndDelete({
        _id: id,
      })
      .exec();
  }

  async menuTree() {
    const menus = await this.menuModel.find();
    return toTree(JSON.parse(JSON.stringify(menus)));
  }
}
