import { Injectable } from '@nestjs/common';
import { Types, PaginateResult } from 'mongoose';
import { MongooseModel } from 'src/common/interfaces/mongoose.interface';
import { Api } from './entities/api.model';
import { InjectModel } from 'src/common/transformers/model.transformer';

@Injectable()
export class ApiService {
  constructor(@InjectModel(Api) private apiModel: MongooseModel<any>) {}
  async index(querys, options): Promise<PaginateResult<Api>> {
    return this.apiModel.paginate(querys, options);
  }
  async show(id: Types.ObjectId | string): Promise<Api> {
    return this.apiModel.findById(id);
  }
  async create(payload: Api): Promise<Api> {
    return this.apiModel.create(payload);
  }
  async update(id: Types.ObjectId | string, payload: Api): Promise<Api> {
    Reflect.deleteProperty(payload, 'createdAt');
    Reflect.deleteProperty(payload, 'updatedAt');
    return this.apiModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        payload,
        { new: true },
      )
      .exec();
  }
  async delete(id: Types.ObjectId | string): Promise<Api> {
    return this.apiModel
      .findOneAndDelete({
        _id: id,
      })
      .exec();
  }
  async getByUrl(url: string): Promise<Api> {
    return this.apiModel.findOne({ url });
  }
}
