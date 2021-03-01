/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('./yapi-import.json');
const mongodbURL = 'mongodb://127.0.0.1:27017/nest';
const yapi_url = config.server;
const token = config.token;
const axios = require('axios');
const mongoose = require('mongoose');
mongoose.connect(mongodbURL);
const Api = mongoose.model(
  'Api',
  new mongoose.Schema(
    {
      method: {
        type: String,
        enum: ['GET', 'POST', 'PUT', 'DELETE'],
        required: true,
      }, // 方法
      url: { type: String, required: true }, // 路由路径
      alias: { type: String }, // 别名
      verification: { type: Boolean, default: false }, // 是否验证
    },
    {
      versionKey: false,
      timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
    },
  ),
);

axios
  .get(yapi_url + '/api/interface/list', { params: { token, limit: 100000 } })
  .then(res => {
    console.log(res.data.data.list);
    res.data.data.list.forEach(async item => {
      const api = await Api.findOne({ method: item.method, url: item.path });
      if (!api) {
        await new Api({
          method: item.method,
          url: item.path,
          alias: item.title,
          verification: false,
        }).save();
      }
    });
  });
