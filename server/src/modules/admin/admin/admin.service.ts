import { Injectable, Logger } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import Sha256 = require('crypto-js/hmac-sha256');
import rand = require('csprng');
import { InjectModel } from 'src/common/transformers/model.transformer';
import { ConfigService } from 'nestjs-config';
import { Admin } from './entities/admin.model';
@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminModel: Model<any>,
    private readonly config: ConfigService,
  ) {
    this.initAdminUser();
  }
  async show(id: Types.ObjectId | string): Promise<Admin> {
    return this.adminModel.findById(id);
  }
  async create(payload: { username: string; password: string; salt?: string }) {
    const salt = rand(256, 36);
    payload.password = Sha256(
      payload.password + salt,
      this.config.get('secret'),
    ).toString();
    payload.salt = salt;
    return this.adminModel.create(payload);
  }
  async findByAdminname(username: string) {
    return await this.adminModel.findOne({ username });
  }
  async initAdminUser() {
    const adminCount = await this.adminModel.countDocuments();
    if (!adminCount) {
      Logger.log('初始化管理员用户');
      await this.create({
        username: this.config.get('common.adminusername'),
        password: this.config.get('common.adminpassword'),
      });
    }
  }
}
