/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_11 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_11 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_11 = '';
const dataKey_0_0_0_11 = 'data';
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/125) 的 **请求配置**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
const getPermissionRequestConfig = {
    mockUrl: mockUrl_0_0_0_11,
    devUrl: devUrl_0_0_0_11,
    prodUrl: prodUrl_0_0_0_11,
    path: '/permission',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_11,
    paramNames: [],
    queryNames: ['search', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__permission',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/125) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const get__permission = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getPermissionRequestConfig, requestData), ...args);
};
get__permission.requestConfig = getPermissionRequestConfig;
/**
 * 接口 [创建权限↗](http://127.0.0.1:4000/project/11/interface/api/128) 的 **请求配置**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `POST /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
const postPermissionRequestConfig = {
    mockUrl: mockUrl_0_0_0_11,
    devUrl: devUrl_0_0_0_11,
    prodUrl: prodUrl_0_0_0_11,
    path: '/permission',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_11,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__permission',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [创建权限↗](http://127.0.0.1:4000/project/11/interface/api/128) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `POST /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const post__permission = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postPermissionRequestConfig, requestData), ...args);
};
post__permission.requestConfig = postPermissionRequestConfig;
/**
 * 接口 [获取权限↗](http://127.0.0.1:4000/project/11/interface/api/131) 的 **请求配置**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const getPermissionIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_11,
    devUrl: devUrl_0_0_0_11,
    prodUrl: prodUrl_0_0_0_11,
    path: '/permission/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_11,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__permission_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取权限↗](http://127.0.0.1:4000/project/11/interface/api/131) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const get__permission_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getPermissionIdRequestConfig, requestData), ...args);
};
get__permission_id.requestConfig = getPermissionIdRequestConfig;
/**
 * 接口 [更新权限↗](http://127.0.0.1:4000/project/11/interface/api/134) 的 **请求配置**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `PUT /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const putPermissionIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_11,
    devUrl: devUrl_0_0_0_11,
    prodUrl: prodUrl_0_0_0_11,
    path: '/permission/{id}',
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_11,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'put__permission_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [更新权限↗](http://127.0.0.1:4000/project/11/interface/api/134) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `PUT /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const put__permission_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(putPermissionIdRequestConfig, requestData), ...args);
};
put__permission_id.requestConfig = putPermissionIdRequestConfig;
/**
 * 接口 [删除权限↗](http://127.0.0.1:4000/project/11/interface/api/137) 的 **请求配置**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `DELETE /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
const deletePermissionIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_11,
    devUrl: devUrl_0_0_0_11,
    prodUrl: prodUrl_0_0_0_11,
    path: '/permission/{id}',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.raw,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_11,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'delete__permission_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [删除权限↗](http://127.0.0.1:4000/project/11/interface/api/137) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `DELETE /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const delete__permission_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(deletePermissionIdRequestConfig, requestData), ...args);
};
delete__permission_id.requestConfig = deletePermissionIdRequestConfig;
/* prettier-ignore-end */
