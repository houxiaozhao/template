/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_4 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_4 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_4 = '';
const dataKey_0_0_0_4 = 'data';
/**
 * 接口 [用户登陆↗](http://127.0.0.1:4000/project/11/interface/api/23) 的 **请求配置**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/login`
 * @更新时间 `2022-04-11 11:52:52`
 */
const postAuthLoginRequestConfig = {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/auth/login',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__auth_login',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [用户登陆↗](http://127.0.0.1:4000/project/11/interface/api/23) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/login`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const post__auth_login = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postAuthLoginRequestConfig, requestData), ...args);
};
post__auth_login.requestConfig = postAuthLoginRequestConfig;
/**
 * 接口 [用户短信验证码登陆↗](http://127.0.0.1:4000/project/11/interface/api/26) 的 **请求配置**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/verificationCodeLogin`
 * @更新时间 `2022-04-11 11:52:52`
 */
const postAuthVerificationCodeLoginRequestConfig = {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/auth/verificationCodeLogin',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__auth_verificationCodeLogin',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [用户短信验证码登陆↗](http://127.0.0.1:4000/project/11/interface/api/26) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/verificationCodeLogin`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const post__auth_verificationCodeLogin = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postAuthVerificationCodeLoginRequestConfig, requestData), ...args);
};
post__auth_verificationCodeLogin.requestConfig = postAuthVerificationCodeLoginRequestConfig;
/**
 * 接口 [用户获取信息↗](http://127.0.0.1:4000/project/11/interface/api/29) 的 **请求配置**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/profile`
 * @更新时间 `2022-04-11 11:52:52`
 */
const getAuthProfileRequestConfig = {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/auth/profile',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__auth_profile',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [用户获取信息↗](http://127.0.0.1:4000/project/11/interface/api/29) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/profile`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const get__auth_profile = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getAuthProfileRequestConfig, requestData), ...args);
};
get__auth_profile.requestConfig = getAuthProfileRequestConfig;
/**
 * 接口 [用户获取验证码,验证码1小时有效↗](http://127.0.0.1:4000/project/11/interface/api/32) 的 **请求配置**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/svgCaptacha`
 * @更新时间 `2022-04-11 11:52:52`
 */
const getAuthSvgCaptachaRequestConfig = {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/auth/svgCaptacha',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.raw,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__auth_svgCaptacha',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [用户获取验证码,验证码1小时有效↗](http://127.0.0.1:4000/project/11/interface/api/32) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/svgCaptacha`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const get__auth_svgCaptacha = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getAuthSvgCaptachaRequestConfig, requestData), ...args);
};
get__auth_svgCaptacha.requestConfig = getAuthSvgCaptachaRequestConfig;
/**
 * 接口 [获取验证码↗](http://127.0.0.1:4000/project/11/interface/api/35) 的 **请求配置**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/verificationCode`
 * @更新时间 `2022-04-11 11:52:52`
 */
const getAuthVerificationCodeRequestConfig = {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/auth/verificationCode',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: ['phone'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__auth_verificationCode',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取验证码↗](http://127.0.0.1:4000/project/11/interface/api/35) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/verificationCode`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const get__auth_verificationCode = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getAuthVerificationCodeRequestConfig, requestData), ...args);
};
get__auth_verificationCode.requestConfig = getAuthVerificationCodeRequestConfig;
/**
 * 接口 [找回密码↗](http://127.0.0.1:4000/project/11/interface/api/38) 的 **请求配置**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/retrievePassword`
 * @更新时间 `2022-04-11 11:52:52`
 */
const getAuthRetrievePasswordRequestConfig = {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/auth/retrievePassword',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.raw,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: ['code', 'password', 'phone'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__auth_retrievePassword',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [找回密码↗](http://127.0.0.1:4000/project/11/interface/api/38) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/retrievePassword`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const get__auth_retrievePassword = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getAuthRetrievePasswordRequestConfig, requestData), ...args);
};
get__auth_retrievePassword.requestConfig = getAuthRetrievePasswordRequestConfig;
/* prettier-ignore-end */
