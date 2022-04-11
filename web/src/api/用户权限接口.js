/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_12 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_12 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_12 = '';
const dataKey_0_0_0_12 = 'data';
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/140) 的 **请求配置**
 *
 * @分类 [用户权限接口↗](http://127.0.0.1:4000/project/11/interface/api/cat_88)
 * @标签 `用户权限接口`
 * @请求头 `GET /user_permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
const getUserPermissionRequestConfig = {
    mockUrl: mockUrl_0_0_0_12,
    devUrl: devUrl_0_0_0_12,
    prodUrl: prodUrl_0_0_0_12,
    path: '/user_permission',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_12,
    paramNames: [],
    queryNames: ['search', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__user_permission',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/140) 的 **请求函数**
 *
 * @分类 [用户权限接口↗](http://127.0.0.1:4000/project/11/interface/api/cat_88)
 * @标签 `用户权限接口`
 * @请求头 `GET /user_permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const get__user_permission = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getUserPermissionRequestConfig, requestData), ...args);
};
get__user_permission.requestConfig = getUserPermissionRequestConfig;
/* prettier-ignore-end */
