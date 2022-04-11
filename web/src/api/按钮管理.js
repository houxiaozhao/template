/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_10 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_10 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_10 = '';
const dataKey_0_0_0_10 = 'data';
/**
 * 接口 [获取按钮列表↗](http://127.0.0.1:4000/project/11/interface/api/110) 的 **请求配置**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getButtonRequestConfig = {
    mockUrl: mockUrl_0_0_0_10,
    devUrl: devUrl_0_0_0_10,
    prodUrl: prodUrl_0_0_0_10,
    path: '/button',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_10,
    paramNames: [],
    queryNames: ['search', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__button',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取按钮列表↗](http://127.0.0.1:4000/project/11/interface/api/110) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__button = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getButtonRequestConfig, requestData), ...args);
};
get__button.requestConfig = getButtonRequestConfig;
/**
 * 接口 [创建按钮↗](http://127.0.0.1:4000/project/11/interface/api/113) 的 **请求配置**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `POST /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
const postButtonRequestConfig = {
    mockUrl: mockUrl_0_0_0_10,
    devUrl: devUrl_0_0_0_10,
    prodUrl: prodUrl_0_0_0_10,
    path: '/button',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_10,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__button',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [创建按钮↗](http://127.0.0.1:4000/project/11/interface/api/113) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `POST /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const post__button = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postButtonRequestConfig, requestData), ...args);
};
post__button.requestConfig = postButtonRequestConfig;
/**
 * 接口 [获取按钮↗](http://127.0.0.1:4000/project/11/interface/api/116) 的 **请求配置**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const getButtonIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_10,
    devUrl: devUrl_0_0_0_10,
    prodUrl: prodUrl_0_0_0_10,
    path: '/button/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_10,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__button_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取按钮↗](http://127.0.0.1:4000/project/11/interface/api/116) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const get__button_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getButtonIdRequestConfig, requestData), ...args);
};
get__button_id.requestConfig = getButtonIdRequestConfig;
/**
 * 接口 [更新按钮↗](http://127.0.0.1:4000/project/11/interface/api/119) 的 **请求配置**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `PUT /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const putButtonIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_10,
    devUrl: devUrl_0_0_0_10,
    prodUrl: prodUrl_0_0_0_10,
    path: '/button/{id}',
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_10,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'put__button_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [更新按钮↗](http://127.0.0.1:4000/project/11/interface/api/119) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `PUT /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const put__button_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(putButtonIdRequestConfig, requestData), ...args);
};
put__button_id.requestConfig = putButtonIdRequestConfig;
/**
 * 接口 [删除按钮↗](http://127.0.0.1:4000/project/11/interface/api/122) 的 **请求配置**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `DELETE /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const deleteButtonIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_10,
    devUrl: devUrl_0_0_0_10,
    prodUrl: prodUrl_0_0_0_10,
    path: '/button/{id}',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.raw,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_10,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'delete__button_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [删除按钮↗](http://127.0.0.1:4000/project/11/interface/api/122) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `DELETE /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const delete__button_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(deleteButtonIdRequestConfig, requestData), ...args);
};
delete__button_id.requestConfig = deleteButtonIdRequestConfig;
/* prettier-ignore-end */
