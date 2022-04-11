/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_2 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_2 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_2 = '';
const dataKey_0_0_0_2 = 'data';
/**
 * 接口 [\/↗](http://127.0.0.1:4000/project/11/interface/api/11) 的 **请求配置**
 *
 * @分类 [home↗](http://127.0.0.1:4000/project/11/interface/api/cat_18)
 * @标签 `home`
 * @请求头 `GET /`
 * @更新时间 `2022-04-11 11:52:52`
 */
const getRequestConfig = {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.raw,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'get__',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [\/↗](http://127.0.0.1:4000/project/11/interface/api/11) 的 **请求函数**
 *
 * @分类 [home↗](http://127.0.0.1:4000/project/11/interface/api/cat_18)
 * @标签 `home`
 * @请求头 `GET /`
 * @更新时间 `2022-04-11 11:52:52`
 */
export const get__ = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(getRequestConfig, requestData), ...args);
};
get__.requestConfig = getRequestConfig;
/* prettier-ignore-end */
