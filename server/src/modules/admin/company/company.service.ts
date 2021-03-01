import { Injectable } from '@nestjs/common';
import { Types, PaginateResult } from 'mongoose';
import { MongooseModel } from 'src/common/interfaces/mongoose.interface';
import { Company } from './entities/company.model';
import { InjectModel } from 'src/common/transformers/model.transformer';
import { CompanyDto } from './dto/company.dto';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyModel: MongooseModel<any>) {}
  async index(querys, options): Promise<PaginateResult<CompanyDto>> {
    return this.companyModel.paginate(querys, options);
  }
  async show(id: Types.ObjectId | string): Promise<CompanyDto> {
    return this.companyModel.findById(id);
  }
  async create(payload: Company): Promise<CompanyDto> {
    return this.companyModel.create(payload);
  }
  async update(
    id: Types.ObjectId | string,
    payload: Company,
  ): Promise<Company> {
    Reflect.deleteProperty(payload, 'createdAt');
    Reflect.deleteProperty(payload, 'updatedAt');
    return this.companyModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        payload,
        { new: true },
      )
      .exec();
  }
  async delete(id: Types.ObjectId | string): Promise<CompanyDto> {
    return this.companyModel
      .findOneAndDelete({
        _id: id,
      })
      .exec();
  }
}
