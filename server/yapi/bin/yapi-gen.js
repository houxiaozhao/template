#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const config = require('../../yapi-import.json');
const core = require('../src/index');
const option = {
  server: config.server,
  token: config.token,
};
core(option)
  .then(() => {
    console.log('生成代码成功');
  })
  .catch(err => {
    console.error(err);
  });
