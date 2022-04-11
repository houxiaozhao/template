import { Injectable } from '@nestjs/common';
import { PaginateOptions, PaginateResult, Types } from 'mongoose';
import { MongooseModel } from 'src/common/interfaces/mongoose.interface';
import { InjectModel } from 'src/common/transformers/model.transformer';
import { DeviceDto, CreateDeviceDto, UpdateDeviceDto } from './dto/device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DeviceService {
  constructor(@InjectModel(Device) private deviceModel: MongooseModel<any>) {}
  async create(createDeviceDto: CreateDeviceDto): Promise<DeviceDto> {
    return this.deviceModel.create(createDeviceDto);
  }

  async findAll(
    querys,
    options: PaginateOptions,
  ): Promise<PaginateResult<Device>> {
    options.populate = [];
    return this.deviceModel.paginate(querys, options);
  }

  async findOne(
    id: Types.ObjectId | string,
    company: Types.ObjectId | string,
  ): Promise<Device> {
    return this.deviceModel.findOne({ _id: id, company });
  }

  async update(
    id: Types.ObjectId | string,
    company: Types.ObjectId | string,
    updateDeviceDto: UpdateDeviceDto,
  ): Promise<Device> {
    Reflect.deleteProperty(updateDeviceDto, 'createdAt');
    Reflect.deleteProperty(updateDeviceDto, 'updatedAt');
    Reflect.deleteProperty(updateDeviceDto, 'company');
    return this.deviceModel.findOneAndUpdate(
      {
        _id: id,
        company,
      },
      updateDeviceDto,
      { new: true },
    );
  }

  async remove(id: Types.ObjectId | string): Promise<Device> {
    return this.deviceModel.findOneAndDelete({
      _id: id,
    });
  }
}
