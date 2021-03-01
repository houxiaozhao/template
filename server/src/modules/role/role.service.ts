import { Injectable } from '@nestjs/common';
import { Types, PaginateResult, PaginateOptions } from 'mongoose';
import { MongooseModel } from 'src/common/interfaces/mongoose.interface';
import { Role } from './entities/role.model';
import { InjectModel } from 'src/common/transformers/model.transformer';
import { CreateRoleDto, RoleDto } from './dto/role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleModel: MongooseModel<any>) {}
  async index(querys, options: PaginateOptions): Promise<PaginateResult<Role>> {
    options.populate = [
      { path: 'permissions', select: 'method url alias verification' },
      { path: 'menus', select: '-createdAt -updatedAt' },
    ];
    return this.roleModel.paginate(querys, options);
  }
  async show(
    id: Types.ObjectId | string,
    company: Types.ObjectId | string,
  ): Promise<Role> {
    return this.roleModel
      .findOne({
        _id: id,
        company,
      })
      .populate({ path: 'permissions', select: 'method url alias' })
      .populate({ path: 'menus', select: '-createdAt -updatedAt' });
  }
  async create(payload: CreateRoleDto): Promise<RoleDto> {
    return this.roleModel.create(payload);
  }
  async update(
    id: Types.ObjectId | string,
    company: Types.ObjectId | string,
    payload: Role,
  ): Promise<Role> {
    Reflect.deleteProperty(payload, 'createdAt');
    Reflect.deleteProperty(payload, 'updatedAt');
    Reflect.deleteProperty(payload, 'company');
    return this.roleModel
      .findOneAndUpdate(
        {
          _id: id,
          company,
        },
        payload,
        { new: true },
      )
      .exec();
  }
  async delete(id: Types.ObjectId | string): Promise<Role> {
    return this.roleModel
      .findOneAndDelete({
        _id: id,
      })
      .exec();
  }
}
