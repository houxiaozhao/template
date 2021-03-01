import { Injectable } from '@nestjs/common';
import { Types, PaginateResult, PaginateOptions } from 'mongoose';
import { MongooseModel } from 'src/common/interfaces/mongoose.interface';
import { Permission } from './entities/permission.model';
import { InjectModel } from 'src/common/transformers/model.transformer';

@Injectable()
export class PermissionService {
  constructor(
    @InjectModel(Permission) private permissionModel: MongooseModel<any>,
  ) {}
  async index(
    querys,
    options: PaginateOptions,
  ): Promise<PaginateResult<Permission>> {
    options.populate = [
      { path: 'apis', select: 'method url alias verification' },
      { path: 'menus', select: '-createdAt -updatedAt' },
      { path: 'buttons', select: '-createdAt -updatedAt' },
    ];
    return this.permissionModel.paginate(querys, options);
  }
  async show(id: Types.ObjectId | string): Promise<Permission> {
    return this.permissionModel
      .findById(id)
      .populate({ path: 'apis', select: 'method url alias' })
      .populate({ path: 'menus', select: '-createdAt -updatedAt' });
  }
  async create(payload: Permission): Promise<Permission> {
    return this.permissionModel.create(payload);
  }
  async update(
    id: Types.ObjectId | string,
    payload: Permission,
  ): Promise<Permission> {
    Reflect.deleteProperty(payload, 'createdAt');
    Reflect.deleteProperty(payload, 'updatedAt');
    return this.permissionModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        payload,
        { new: true },
      )
      .exec();
  }
  async delete(id: Types.ObjectId | string): Promise<Permission> {
    return this.permissionModel
      .findOneAndDelete({
        _id: id,
      })
      .exec();
  }
}
