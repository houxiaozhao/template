/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_13 = 'http://127.0.0.1:4000/mock/11';
const devUrl_0_0_0_13 = 'http://127.0.0.1:3001';
const prodUrl_0_0_0_13 = '';
const dataKey_0_0_0_13 = 'data';
/**
 * 接口 [\/file\/upload↗](http://127.0.0.1:4000/project/11/interface/api/143) 的 **请求配置**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload`
 * @更新时间 `2022-04-11 11:52:54`
 */
const postFileUploadRequestConfig = {
    mockUrl: mockUrl_0_0_0_13,
    devUrl: devUrl_0_0_0_13,
    prodUrl: prodUrl_0_0_0_13,
    path: '/file/upload',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_13,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__file_upload',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [\/file\/upload↗](http://127.0.0.1:4000/project/11/interface/api/143) 的 **请求函数**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const post__file_upload = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postFileUploadRequestConfig, requestData), ...args);
};
post__file_upload.requestConfig = postFileUploadRequestConfig;
/**
 * 接口 [\/file\/upload-exif↗](http://127.0.0.1:4000/project/11/interface/api/146) 的 **请求配置**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload-exif`
 * @更新时间 `2022-04-11 11:52:54`
 */
const postFileUploadexifRequestConfig = {
    mockUrl: mockUrl_0_0_0_13,
    devUrl: devUrl_0_0_0_13,
    prodUrl: prodUrl_0_0_0_13,
    path: '/file/upload-exif',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.raw,
    dataKey: dataKey_0_0_0_13,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__file_uploadexif',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [\/file\/upload-exif↗](http://127.0.0.1:4000/project/11/interface/api/146) 的 **请求函数**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload-exif`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const post__file_uploadexif = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postFileUploadexifRequestConfig, requestData), ...args);
};
post__file_uploadexif.requestConfig = postFileUploadexifRequestConfig;
/**
 * 接口 [\/file\/signedUrlSync↗](http://127.0.0.1:4000/project/11/interface/api/149) 的 **请求配置**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/signedUrlSync`
 * @更新时间 `2022-04-11 11:52:54`
 */
const postFileSignedUrlSyncRequestConfig = {
    mockUrl: mockUrl_0_0_0_13,
    devUrl: devUrl_0_0_0_13,
    prodUrl: prodUrl_0_0_0_13,
    path: '/file/signedUrlSync',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.raw,
    dataKey: dataKey_0_0_0_13,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'post__file_signedUrlSync',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [\/file\/signedUrlSync↗](http://127.0.0.1:4000/project/11/interface/api/149) 的 **请求函数**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/signedUrlSync`
 * @更新时间 `2022-04-11 11:52:54`
 */
export const post__file_signedUrlSync = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(postFileSignedUrlSyncRequestConfig, requestData), ...args);
};
post__file_signedUrlSync.requestConfig = postFileSignedUrlSyncRequestConfig;
/* prettier-ignore-end */
