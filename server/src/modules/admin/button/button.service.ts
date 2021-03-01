import { Injectable } from '@nestjs/common';
import { Types, PaginateResult } from 'mongoose';
import { MongooseModel } from 'src/common/interfaces/mongoose.interface';
import { Button } from './entities/button.model';
import { InjectModel } from 'src/common/transformers/model.transformer';
import { CreateButtonDto } from './dto/button.dto';

@Injectable()
export class ButtonService {
  constructor(@InjectModel(Button) private buttonModel: MongooseModel<any>) {}
  async index(querys, options): Promise<PaginateResult<Button>> {
    return this.buttonModel.paginate(querys, options);
  }
  async show(id: Types.ObjectId | string): Promise<Button> {
    return this.buttonModel.findById(id);
  }
  async create(payload: CreateButtonDto): Promise<Button> {
    return this.buttonModel.create(payload);
  }
  async update(id: Types.ObjectId | string, payload: Button): Promise<Button> {
    Reflect.deleteProperty(payload, 'createdAt');
    Reflect.deleteProperty(payload, 'updatedAt');
    return this.buttonModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        payload,
        { new: true },
      )
      .exec();
  }
  async delete(id: Types.ObjectId | string): Promise<Button> {
    return this.buttonModel
      .findOneAndDelete({
        _id: id,
      })
      .exec();
  }
}
