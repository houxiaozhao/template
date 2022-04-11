/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_7 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_7 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_7 = '';
const dataKey_0_0_0_7 = 'data';
/**
 * 接口 [获取角色列表↗](http://127.0.0.1:4000/project/11/interface/api/71) 的 **请求配置**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getRoleRequestConfig = {
    mockUrl: mockUrl_0_0_0_7,
    devUrl: devUrl_0_0_0_7,
    prodUrl: prodUrl_0_0_0_7,
    path: '/role',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_7,
    paramNames: [],
    queryNames: ['search', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__role',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取角色列表↗](http://127.0.0.1:4000/project/11/interface/api/71) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__role = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getRoleRequestConfig, requestData), ...args);
};
get__role.requestConfig = getRoleRequestConfig;
/**
 * 接口 [创建角色↗](http://127.0.0.1:4000/project/11/interface/api/74) 的 **请求配置**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `POST /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
const postRoleRequestConfig = {
    mockUrl: mockUrl_0_0_0_7,
    devUrl: devUrl_0_0_0_7,
    prodUrl: prodUrl_0_0_0_7,
    path: '/role',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_7,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__role',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [创建角色↗](http://127.0.0.1:4000/project/11/interface/api/74) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `POST /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const post__role = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postRoleRequestConfig, requestData), ...args);
};
post__role.requestConfig = postRoleRequestConfig;
/**
 * 接口 [获取角色↗](http://127.0.0.1:4000/project/11/interface/api/77) 的 **请求配置**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getRoleIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_7,
    devUrl: devUrl_0_0_0_7,
    prodUrl: prodUrl_0_0_0_7,
    path: '/role/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_7,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__role_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取角色↗](http://127.0.0.1:4000/project/11/interface/api/77) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__role_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getRoleIdRequestConfig, requestData), ...args);
};
get__role_id.requestConfig = getRoleIdRequestConfig;
/**
 * 接口 [更新角色↗](http://127.0.0.1:4000/project/11/interface/api/80) 的 **请求配置**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `PUT /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const putRoleIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_7,
    devUrl: devUrl_0_0_0_7,
    prodUrl: prodUrl_0_0_0_7,
    path: '/role/{id}',
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_7,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'put__role_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [更新角色↗](http://127.0.0.1:4000/project/11/interface/api/80) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `PUT /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const put__role_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(putRoleIdRequestConfig, requestData), ...args);
};
put__role_id.requestConfig = putRoleIdRequestConfig;
/**
 * 接口 [删除角色↗](http://127.0.0.1:4000/project/11/interface/api/83) 的 **请求配置**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `DELETE /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const deleteRoleIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_7,
    devUrl: devUrl_0_0_0_7,
    prodUrl: prodUrl_0_0_0_7,
    path: '/role/{id}',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.raw,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_7,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'delete__role_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [删除角色↗](http://127.0.0.1:4000/project/11/interface/api/83) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `DELETE /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const delete__role_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(deleteRoleIdRequestConfig, requestData), ...args);
};
delete__role_id.requestConfig = deleteRoleIdRequestConfig;
/* prettier-ignore-end */
