/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_6 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_6 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_6 = '';
const dataKey_0_0_0_6 = 'data';
/**
 * 接口 [获取公司列表↗](http://127.0.0.1:4000/project/11/interface/api/56) 的 **请求配置**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getCompanyRequestConfig = {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/company',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: ['search', 'limit', 'sort', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__company',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取公司列表↗](http://127.0.0.1:4000/project/11/interface/api/56) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__company = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getCompanyRequestConfig, requestData), ...args);
};
get__company.requestConfig = getCompanyRequestConfig;
/**
 * 接口 [创建公司↗](http://127.0.0.1:4000/project/11/interface/api/59) 的 **请求配置**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `POST /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
const postCompanyRequestConfig = {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/company',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__company',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [创建公司↗](http://127.0.0.1:4000/project/11/interface/api/59) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `POST /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const post__company = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postCompanyRequestConfig, requestData), ...args);
};
post__company.requestConfig = postCompanyRequestConfig;
/**
 * 接口 [获取公司↗](http://127.0.0.1:4000/project/11/interface/api/62) 的 **请求配置**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const getCompanyIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/company/{id}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__company_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [获取公司↗](http://127.0.0.1:4000/project/11/interface/api/62) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const get__company_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getCompanyIdRequestConfig, requestData), ...args);
};
get__company_id.requestConfig = getCompanyIdRequestConfig;
/**
 * 接口 [更新公司↗](http://127.0.0.1:4000/project/11/interface/api/65) 的 **请求配置**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `PUT /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const putCompanyIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/company/{id}',
    method: Method.PUT,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'put__company_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [更新公司↗](http://127.0.0.1:4000/project/11/interface/api/65) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `PUT /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const put__company_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(putCompanyIdRequestConfig, requestData), ...args);
};
put__company_id.requestConfig = putCompanyIdRequestConfig;
/**
 * 接口 [删除公司↗](http://127.0.0.1:4000/project/11/interface/api/68) 的 **请求配置**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `DELETE /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
const deleteCompanyIdRequestConfig = {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/company/{id}',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.raw,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'delete__company_id',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [删除公司↗](http://127.0.0.1:4000/project/11/interface/api/68) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `DELETE /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export const delete__company_id = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(deleteCompanyIdRequestConfig, requestData), ...args);
};
delete__company_id.requestConfig = deleteCompanyIdRequestConfig;
/* prettier-ignore-end */
