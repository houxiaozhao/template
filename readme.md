# template

基于 nestjs mongoose jwt 的 restful 模板程序
用于快速搭建服务端程序

## 涉及技术框架

- nestjs 服务框架
- mongoose 操作数据库的库
  - typegoose 使用类定义数据模型
  - nestjs-typegoose
  - mongoose-paginate 分页插件
- jwt 生成验证 token
- swagger 文档生成

## 配置文件

nestjs-config 管理配置文件

```
/env/
/src/config/
```

## Redis 缓存基本用法

```
// controller
@HttpCache(ARTICLE, 60)
@UseInterceptors(HttpCacheInterceptor)

// module
import { CacheModule } from 'src/common/processors/cache/cache.module';
@Module({
  imports: [CacheModule]
})
```

## 功能

- [x] 用户登陆注册
- [x] jwt 验证
- [x] 增删改查，分页查询
- [x] 统一异常处理（使用业务状态码）
- [x] 统一返回结构
- [x] 自定义 user 装饰器 src/common/decorator/user.decorator
- [x] mongo objectid 示例管道
- [x] 跨域处理
- [x] 文件上传示例(转存到云服务)
- [x] redis 缓存
- [ ] 异常发送邮件提醒
- [x] 权限角色管理
- [x] 自动生成代码

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 文档地址

http://127.0.0.1:3001/doc

## 异常处理

异常过滤器

- src\common\filters\http-exception.filter.ts

自定义 api 异常

- src\common\exceptions\api.exception.ts

拦截器

- src\common\interceptor\exception.interceptor.ts
- src\common\interceptor\transform.interceptor.ts

### 异常使用方式

```javascript
throw new ApiException(
  'ID无效',
  ApiErrorCode.ID_INVALID,
  HttpStatus.BAD_REQUEST
);
// {
//   "status": 400,
//   "timestamp": "2020-10-26T01:20:18.452Z",
//   "path": "/article/5f93df3b03ac4483c069b0092",
//   "errorCode": 10001,
//   "message": "ID无效"
// }
throw new HttpException(
  {
    message: '请求参数id 必传',
    errorCode: '10000',
  },
  HttpStatus.BAD_REQUEST
);
```

### 接口文档 （yapi）

使用 yapi import 工具 导入 swagger 文档到 yapi 中
配置`yapi-import.json`

```
npm run yapi
```

### ~~api 代码生成(yapi-gen-js-code)~~

使用 yapi-gen-js-code 进行 yapi 的代码生成
进行了一些调整修改，以适配当前前端代码
使用配置`yapi-import.json`

```
npm run gapi
```

生成的代码只需要把需要的部分复制到前端相应的文件中

### api 代码生成
推荐使用 yapi-to-typescript https://github.com/fjc0k/yapi-to-typescript

### 权限角色思路

使用`putApi2DB.js`把 ypi 上的接口全都插入到数据库中。单独修改里面的配置

```
node .\putApi2DB.js
```

### Getting started

需要先创建公司，分配公司管理员权限（务必把角色和用户管理权限分配给管理员，否则公司管理员无法自行管理用户角色）。使用 db.js 已配置

1. 先把 db.js 导入到数据库
   后台管理用户名密码 houxiaozhao/houxiaozhao

2. 测试公司用户名密码 18300000000/18300000000

### rest 接口使用方式

1.  CRUD 生成器
    ```
    nest g resource modules/device --no-spec
    ```
2.  Model Service Controller DTO 修改

3.  yapi(可选)

    - 接口文档同步到 yapi

    ```
    npm run yapi

    ```

    - 生成前端代码

    ```
    npm run gapi

    ```

4.  把 api 接口加到数据库中（可选）

    - 添加 api（设置为需要验证）
    - 设置权限
    - 设置角色
    - 添加菜单
    - 添加按钮（可选，权限设置）

5.  登录管理后台，创建 api，创建菜单，创建设备管理权限
6.  登录用户前端，角色管理，创建设备管理角色，为用户分配设备管理角色，然后刷新即可显示出设备管理菜单（现在点击菜单显示 404）
7.  切换到前端代码 web

    - 创建页面设备管理页面(device/index.vue)
    - 创建路由（和第 5 步创建菜单的路径一致）
    - 复制 views/demo/page1/index.vue 的代码到 device/index.vue,修改 name 和路由一致
    - 在/src/api/modules 文件夹创建 device.api.js

      ```javascript
      export default ({
        service,
        request,
        serviceForMock,
        requestForMock,
        mock,
        faker,
        tools,
      }) => ({
        // 自动生成代码
      });
      ```

    - 复制自动生成的关于设备管理代码到/src/api/modules/device.api.js
    - 修改/device/index.vue 里的增删改查函数名称
    - 根据需要修改字段
      - addDataForm
      - editDataForm
      - addRules
      - editRules
      - addData 函数定义添加字段
      - editData 函数定义编辑字段
      - 表格显示字段
      - 添加表单
      - 编辑表单
    - 如果配置了按钮权限（能不能添加、编辑、删除等），需要使用`buttonid`指令
      xxx 为数据库按钮的 id

      ```
      v-buttonid="'xxx'"
      ```
