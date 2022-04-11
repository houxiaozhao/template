/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_5 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_5 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_5 = '';
const dataKey_0_0_0_5 = 'data';
/**
 * 接口 [获取接口列表↗](http://127.0.0.1:4000/project/11/interface/api/41) 的 **请求配置**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
const getApiRequestConfig = {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/api',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: [],
    queryNames: ['search', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__api',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取接口列表↗](http://127.0.0.1:4000/project/11/interface/api/41) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const get__api = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getApiRequestConfig, requestData), ...args);
};
get__api.requestConfig = getApiRequestConfig;
/**
 * 接口 [创建接口↗](http://127.0.0.1:4000/project/11/interface/api/44) 的 **请求配置**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `POST /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
const postApiRequestConfig = {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/api',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__api',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [创建接口↗](http://127.0.0.1:4000/project/11/interface/api/44) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `POST /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const post__api = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postApiRequestConfig, requestData), ...args);
};
post__api.requestConfig = postApiRequestConfig;
/**
 * 接口 [获取接口↗](http://127.0.0.1:4000/project/11/interface/api/47) 的 **请求配置**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getApiIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/api/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__api_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取接口↗](http://127.0.0.1:4000/project/11/interface/api/47) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__api_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getApiIdRequestConfig, requestData), ...args);
};
get__api_id.requestConfig = getApiIdRequestConfig;
/**
 * 接口 [更新接口↗](http://127.0.0.1:4000/project/11/interface/api/50) 的 **请求配置**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `PUT /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const putApiIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/api/{id}',
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'put__api_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [更新接口↗](http://127.0.0.1:4000/project/11/interface/api/50) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `PUT /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const put__api_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(putApiIdRequestConfig, requestData), ...args);
};
put__api_id.requestConfig = putApiIdRequestConfig;
/**
 * 接口 [删除接口↗](http://127.0.0.1:4000/project/11/interface/api/53) 的 **请求配置**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `DELETE /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const deleteApiIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/api/{id}',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.raw,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'delete__api_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [删除接口↗](http://127.0.0.1:4000/project/11/interface/api/53) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `DELETE /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const delete__api_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(deleteApiIdRequestConfig, requestData), ...args);
};
delete__api_id.requestConfig = deleteApiIdRequestConfig;
/* prettier-ignore-end */
