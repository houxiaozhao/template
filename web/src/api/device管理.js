/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_0 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_0 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_0 = '';
const dataKey_0_0_0_0 = 'data';
/**
 * 接口 [创建device↗](http://127.0.0.1:4000/project/11/interface/api/152) 的 **请求配置**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `POST /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
const postDeviceRequestConfig = {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/device',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__device',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [创建device↗](http://127.0.0.1:4000/project/11/interface/api/152) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `POST /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const post__device = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postDeviceRequestConfig, requestData), ...args);
};
post__device.requestConfig = postDeviceRequestConfig;
/**
 * 接口 [获取device列表↗](http://127.0.0.1:4000/project/11/interface/api/155) 的 **请求配置**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
const getDeviceRequestConfig = {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/device',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: ['search', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__device',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取device列表↗](http://127.0.0.1:4000/project/11/interface/api/155) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const get__device = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getDeviceRequestConfig, requestData), ...args);
};
get__device.requestConfig = getDeviceRequestConfig;
/**
 * 接口 [获取device↗](http://127.0.0.1:4000/project/11/interface/api/158) 的 **请求配置**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const getDeviceIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/device/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__device_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取device↗](http://127.0.0.1:4000/project/11/interface/api/158) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const get__device_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getDeviceIdRequestConfig, requestData), ...args);
};
get__device_id.requestConfig = getDeviceIdRequestConfig;
/**
 * 接口 [更新device↗](http://127.0.0.1:4000/project/11/interface/api/161) 的 **请求配置**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `PUT /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const putDeviceIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/device/{id}',
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'put__device_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [更新device↗](http://127.0.0.1:4000/project/11/interface/api/161) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `PUT /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const put__device_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(putDeviceIdRequestConfig, requestData), ...args);
};
put__device_id.requestConfig = putDeviceIdRequestConfig;
/**
 * 接口 [删除device↗](http://127.0.0.1:4000/project/11/interface/api/164) 的 **请求配置**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `DELETE /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const deleteDeviceIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/device/{id}',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.raw,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'delete__device_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [删除device↗](http://127.0.0.1:4000/project/11/interface/api/164) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `DELETE /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const delete__device_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(deleteDeviceIdRequestConfig, requestData), ...args);
};
delete__device_id.requestConfig = deleteDeviceIdRequestConfig;
/* prettier-ignore-end */
