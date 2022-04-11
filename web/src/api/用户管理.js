/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_3 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_3 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_3 = '';
const dataKey_0_0_0_3 = 'data';
/**
 * 接口 [获取用户列表↗](http://127.0.0.1:4000/project/11/interface/api/14) 的 **请求配置**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `GET /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
const getUserRequestConfig = {
    mockUrl: mockUrl_0_0_0_3,
    devUrl: devUrl_0_0_0_3,
    prodUrl: prodUrl_0_0_0_3,
    path: '/user',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_3,
    paramNames: [],
    queryNames: ['search', 'role', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__user',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取用户列表↗](http://127.0.0.1:4000/project/11/interface/api/14) 的 **请求函数**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `GET /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const get__user = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getUserRequestConfig, requestData), ...args);
};
get__user.requestConfig = getUserRequestConfig;
/**
 * 接口 [创建用户↗](http://127.0.0.1:4000/project/11/interface/api/17) 的 **请求配置**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `POST /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
const postUserRequestConfig = {
    mockUrl: mockUrl_0_0_0_3,
    devUrl: devUrl_0_0_0_3,
    prodUrl: prodUrl_0_0_0_3,
    path: '/user',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_3,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__user',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [创建用户↗](http://127.0.0.1:4000/project/11/interface/api/17) 的 **请求函数**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `POST /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const post__user = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postUserRequestConfig, requestData), ...args);
};
post__user.requestConfig = postUserRequestConfig;
/**
 * 接口 [更新用户↗](http://127.0.0.1:4000/project/11/interface/api/20) 的 **请求配置**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `PUT /user/{id}`
 * @更新时间 `2022-04-11 11:52:52`
 */
const putUserIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_3,
    devUrl: devUrl_0_0_0_3,
    prodUrl: prodUrl_0_0_0_3,
    path: '/user/{id}',
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_3,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'put__user_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [更新用户↗](http://127.0.0.1:4000/project/11/interface/api/20) 的 **请求函数**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `PUT /user/{id}`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const put__user_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(putUserIdRequestConfig, requestData), ...args);
};
put__user_id.requestConfig = putUserIdRequestConfig;
/* prettier-ignore-end */
