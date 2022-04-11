/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_8 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_8 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_8 = '';
const dataKey_0_0_0_8 = 'data';
/**
 * 接口 [管理员登陆↗](http://127.0.0.1:4000/project/11/interface/api/86) 的 **请求配置**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `POST /admin-auth/login`
 * @更新时间 `2022-04-11 11:52:53`
 */
const postAdminauthLoginRequestConfig = {
    mockUrl: mockUrl_0_0_0_8,
    devUrl: devUrl_0_0_0_8,
    prodUrl: prodUrl_0_0_0_8,
    path: '/admin-auth/login',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_8,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__adminauth_login',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [管理员登陆↗](http://127.0.0.1:4000/project/11/interface/api/86) 的 **请求函数**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `POST /admin-auth/login`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const post__adminauth_login = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postAdminauthLoginRequestConfig, requestData), ...args);
};
post__adminauth_login.requestConfig = postAdminauthLoginRequestConfig;
/**
 * 接口 [管理员获取信息↗](http://127.0.0.1:4000/project/11/interface/api/89) 的 **请求配置**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `GET /admin-auth/profile`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getAdminauthProfileRequestConfig = {
    mockUrl: mockUrl_0_0_0_8,
    devUrl: devUrl_0_0_0_8,
    prodUrl: prodUrl_0_0_0_8,
    path: '/admin-auth/profile',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_8,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__adminauth_profile',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [管理员获取信息↗](http://127.0.0.1:4000/project/11/interface/api/89) 的 **请求函数**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `GET /admin-auth/profile`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__adminauth_profile = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getAdminauthProfileRequestConfig, requestData), ...args);
};
get__adminauth_profile.requestConfig = getAdminauthProfileRequestConfig;
/* prettier-ignore-end */
