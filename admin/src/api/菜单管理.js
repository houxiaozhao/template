/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_9 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_9 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_9 = '';
const dataKey_0_0_0_9 = 'data';
/**
 * 接口 [获取菜单树↗](http://127.0.0.1:4000/project/11/interface/api/92) 的 **请求配置**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/menutree`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getMenuMenutreeRequestConfig = {
    mockUrl: mockUrl_0_0_0_9,
    devUrl: devUrl_0_0_0_9,
    prodUrl: prodUrl_0_0_0_9,
    path: '/menu/menutree',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.raw,
    dataKey: dataKey_0_0_0_9,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__menu_menutree',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取菜单树↗](http://127.0.0.1:4000/project/11/interface/api/92) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/menutree`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__menu_menutree = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getMenuMenutreeRequestConfig, requestData), ...args);
};
get__menu_menutree.requestConfig = getMenuMenutreeRequestConfig;
/**
 * 接口 [获取菜单列表↗](http://127.0.0.1:4000/project/11/interface/api/95) 的 **请求配置**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getMenuRequestConfig = {
    mockUrl: mockUrl_0_0_0_9,
    devUrl: devUrl_0_0_0_9,
    prodUrl: prodUrl_0_0_0_9,
    path: '/menu',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_9,
    paramNames: [],
    queryNames: ['search', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__menu',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取菜单列表↗](http://127.0.0.1:4000/project/11/interface/api/95) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__menu = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getMenuRequestConfig, requestData), ...args);
};
get__menu.requestConfig = getMenuRequestConfig;
/**
 * 接口 [创建菜单↗](http://127.0.0.1:4000/project/11/interface/api/98) 的 **请求配置**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `POST /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
const postMenuRequestConfig = {
    mockUrl: mockUrl_0_0_0_9,
    devUrl: devUrl_0_0_0_9,
    prodUrl: prodUrl_0_0_0_9,
    path: '/menu',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_9,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__menu',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [创建菜单↗](http://127.0.0.1:4000/project/11/interface/api/98) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `POST /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const post__menu = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postMenuRequestConfig, requestData), ...args);
};
post__menu.requestConfig = postMenuRequestConfig;
/**
 * 接口 [获取菜单↗](http://127.0.0.1:4000/project/11/interface/api/101) 的 **请求配置**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getMenuIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_9,
    devUrl: devUrl_0_0_0_9,
    prodUrl: prodUrl_0_0_0_9,
    path: '/menu/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_9,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__menu_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取菜单↗](http://127.0.0.1:4000/project/11/interface/api/101) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__menu_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getMenuIdRequestConfig, requestData), ...args);
};
get__menu_id.requestConfig = getMenuIdRequestConfig;
/**
 * 接口 [更新菜单↗](http://127.0.0.1:4000/project/11/interface/api/104) 的 **请求配置**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `PUT /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const putMenuIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_9,
    devUrl: devUrl_0_0_0_9,
    prodUrl: prodUrl_0_0_0_9,
    path: '/menu/{id}',
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_9,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'put__menu_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [更新菜单↗](http://127.0.0.1:4000/project/11/interface/api/104) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `PUT /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const put__menu_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(putMenuIdRequestConfig, requestData), ...args);
};
put__menu_id.requestConfig = putMenuIdRequestConfig;
/**
 * 接口 [删除菜单↗](http://127.0.0.1:4000/project/11/interface/api/107) 的 **请求配置**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `DELETE /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const deleteMenuIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_9,
    devUrl: devUrl_0_0_0_9,
    prodUrl: prodUrl_0_0_0_9,
    path: '/menu/{id}',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.raw,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_9,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'delete__menu_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [删除菜单↗](http://127.0.0.1:4000/project/11/interface/api/107) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `DELETE /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const delete__menu_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(deleteMenuIdRequestConfig, requestData), ...args);
};
delete__menu_id.requestConfig = deleteMenuIdRequestConfig;
/* prettier-ignore-end */
