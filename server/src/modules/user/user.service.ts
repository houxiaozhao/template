import { Injectable } from '@nestjs/common';
import { PaginateOptions, PaginateResult, Types } from 'mongoose';
import Sha256 = require('crypto-js/hmac-sha256');
import rand = require('csprng');
import { InjectModel } from 'src/common/transformers/model.transformer';
import { ConfigService } from 'nestjs-config';
import { User } from './entities/user.model';
import { MongooseModel } from 'src/common/interfaces/mongoose.interface';
import { UpdateUser } from './dto/user.dto';
import { toTree } from 'src/common/util/util';
import { find } from 'lodash';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userModel: MongooseModel<any>,
    private readonly config: ConfigService,
  ) {}
  async index(querys, options: PaginateOptions): Promise<PaginateResult<User>> {
    options.populate = { path: 'roles', select: 'alias' };
    return this.userModel.paginate(querys, options);
  }
  async show(id: Types.ObjectId | string) {
    return this.userModel.findById(id);
  }
  async create(payload: {
    phone: string;
    username: string;
    password: string;
    company: string;
    roles?: string[];
    salt?: string;
  }) {
    const salt = rand(256, 36);
    payload.password = Sha256(
      payload.password + salt,
      this.config.get('secret'),
    ).toString();
    payload.salt = salt;
    const user = await this.userModel.create(payload);
    return user;
  }
  async findByPhone(phone: string) {
    return await this.userModel.findOne({ phone });
  }

  async update(
    id: Types.ObjectId | string,
    payload: UpdateUser,
  ): Promise<User> {
    Reflect.deleteProperty(payload, 'createdAt');
    Reflect.deleteProperty(payload, 'updatedAt');
    if (payload.password) {
      const salt = rand(256, 36);
      payload.password = Sha256(
        payload.password + salt,
        this.config.get('secret'),
      ).toString();
      payload.salt = salt;
    }
    return this.userModel
      .findOneAndUpdate(
        {
          _id: id,
        },
        payload,
        { new: true },
      )
      .exec();
  }

  async getUserMenu(userid: string) {
    const user = await this.userModel.aggregate([
      {
        $match: { _id: Types.ObjectId(userid) },
      },
      {
        $lookup: {
          from: 'roles',
          localField: 'roles',
          foreignField: '_id',
          as: 'roles',
        },
      },
      {
        $lookup: {
          from: 'permissions',
          localField: 'roles.permissions',
          foreignField: '_id',
          as: 'permissions',
        },
      },
      {
        $lookup: {
          from: 'menus',
          localField: 'permissions.menus',
          foreignField: '_id',
          as: 'menus',
        },
      },
      {
        $project: {
          menus: {
            _id: 1,
            title: 1,
            type: 1,
            parent: 1,
            icon: 1,
            path: 1,
            order: 1,
          },
        },
      },
    ]);
    return toTree(user[0].menus);
  }
  async getUserButton(userid: string) {
    console.log(userid);

    const user = await this.userModel.aggregate([
      {
        $match: { _id: Types.ObjectId(userid) },
      },
      {
        $lookup: {
          from: 'roles',
          localField: 'roles',
          foreignField: '_id',
          as: 'roles',
        },
      },
      {
        $lookup: {
          from: 'permissions',
          localField: 'roles.permissions',
          foreignField: '_id',
          as: 'permissions',
        },
      },
      {
        $lookup: {
          from: 'buttons',
          localField: 'permissions.buttons',
          foreignField: '_id',
          as: 'buttons',
        },
      },
      {
        $project: {
          buttons: {
            _id: 1,
          },
        },
      },
    ]);
    return user[0].buttons;
  }
  async getUserApis(userid: string) {
    const userapi = (
      await this.userModel.aggregate([
        {
          $match: { _id: Types.ObjectId(userid) },
        },
        {
          $lookup: {
            from: 'roles',
            localField: 'roles',
            foreignField: '_id',
            as: 'roles',
          },
        },
        {
          $lookup: {
            from: 'permissions',
            localField: 'roles.permissions',
            foreignField: '_id',
            as: 'permissions',
          },
        },
        {
          $lookup: {
            from: 'apis',
            localField: 'permissions.apis',
            foreignField: '_id',
            as: 'apis',
          },
        },
        {
          $project: {
            apis: {
              method: 1,
              url: 1,
            },
          },
        },
      ])
    )[0];
    return userapi.apis;
  }
  async verificationCan(userid: string, url: string, method: string) {
    const userapi = (
      await this.userModel.aggregate([
        {
          $match: { _id: Types.ObjectId(userid) },
        },
        {
          $lookup: {
            from: 'roles',
            localField: 'roles',
            foreignField: '_id',
            as: 'roles',
          },
        },
        {
          $lookup: {
            from: 'permissions',
            localField: 'roles.permissions',
            foreignField: '_id',
            as: 'permissions',
          },
        },
        {
          $lookup: {
            from: 'apis',
            localField: 'permissions.apis',
            foreignField: '_id',
            as: 'apis',
          },
        },
        {
          $project: {
            apis: {
              method: 1,
              url: 1,
            },
          },
        },
      ])
    )[0];
    if (
      find(userapi.apis, {
        method,
        url,
      })
    ) {
      return true;
    }
    return false;
  }
}
