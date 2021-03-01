# yapi-gen-js-code

> 该工具目前还不完善，请勿正式使用

## 环境
* node > 8.0
* yapi >= 1.5.2

根据 YApi 的接口定义生成 javascript 的请求函数，目前内置了 axios 请求模板

## 功能
1. 支持 restful api
2. 支持 get, post 等多种请求体
3. 支持验证请求参数，需要依赖 ava 

## 安装

```
npm i -g yapi-gen-js-code

```

## 使用

1.首先需要创建 `yapi-gen.config.js` 配置文件，如下所示：

```js
module.exports = {
  server: 'http://127.0.0.1:3000',
  token: '1f048e410bc22208297dec1113136cda58306d28fb0fa819652e659b16764be6',
  categoryId: 323
}

```

2.在当前目录下执行 yapi-gen-js-code

```
yapi-gen-js-code
```

执行完成后，即可生成 yapi-gen-js-code.js 请求文件

可参考该 [demo](https://github.com/hellosean1025/yapi-gen-js-code/blob/master/demo/yapi-gen-js-code.js)

### 生成代码示例

![](2019-02-14-11-50-00.png)

## yapi-gen.config.js配置项说明

| name | 类型 | 默认值 | 描述信息 |  
| ---- | --- | --- | ---- | 
| server | String | - | 服务器地址，比如: http://yapi.demo.qunar.com | 
| token | String | - | 项目token |  
| dist | String | - | 生成文件路径 |  
| template | String Or Function | axios | 模板名，目前仅内置了 axios 模板，自定义请查看下面文档 | 
| globalCode | String |const axios = require('axios'); | 全局代码，会注入到最前面 |  
| methodName | Function | 请参考源码 | 方法名生成函数，一般无需改动 |
| categoryId | String | - | 项目分类id, 填写后只生成某个分类下的接口，默认生成该项目所有接口请求代码 | 
| enableValidte | Boolean | true| 是否开启参数验证，默认是开启的，需要引入 ava 依赖|


## 自定义模板

自定义模板就是写一个函数，返回一个 request 函数片段，接收两个参数，第一个 baseinfo,包含了请求 url, method, 请求参数等

```js
{
  template: function(){
    return `function request(baseinfo, options = {}){
        let params = baseinfo.params;

        options = Object.assign({}, {
          url: baseinfo.url,
          method: baseinfo.method,
          data: params
        }, options)

        if(checkRequestParams && typeof checkRequestParams === 'function'){
          checkRequestParams(interfaceData ,params)
        }

        return axios(options)
      }`
  }
}


```
