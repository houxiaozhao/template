import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [\/file\/upload↗](http://127.0.0.1:4000/project/11/interface/api/143) 的 **请求类型**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PostFileUploadRequest {
}
/**
 * 接口 [\/file\/upload↗](http://127.0.0.1:4000/project/11/interface/api/143) 的 **返回类型**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare type PostFileUploadResponse = string;
/**
 * 接口 [\/file\/upload↗](http://127.0.0.1:4000/project/11/interface/api/143) 的 **请求函数**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const post__file_upload: {
    (requestData?: PostFileUploadRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<string>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/file/upload", "data", string, string, true>;
};
/**
 * 接口 [\/file\/upload-exif↗](http://127.0.0.1:4000/project/11/interface/api/146) 的 **请求类型**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload-exif`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PostFileUploadexifRequest {
}
/**
 * 接口 [\/file\/upload-exif↗](http://127.0.0.1:4000/project/11/interface/api/146) 的 **返回类型**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload-exif`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare type PostFileUploadexifResponse = any;
/**
 * 接口 [\/file\/upload-exif↗](http://127.0.0.1:4000/project/11/interface/api/146) 的 **请求函数**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/upload-exif`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const post__file_uploadexif: {
    (requestData?: PostFileUploadexifRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<any>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/file/upload-exif", "data", string, string, true>;
};
/**
 * 接口 [\/file\/signedUrlSync↗](http://127.0.0.1:4000/project/11/interface/api/149) 的 **请求类型**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/signedUrlSync`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare type PostFileSignedUrlSyncRequest = string;
/**
 * 接口 [\/file\/signedUrlSync↗](http://127.0.0.1:4000/project/11/interface/api/149) 的 **返回类型**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/signedUrlSync`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare type PostFileSignedUrlSyncResponse = any;
/**
 * 接口 [\/file\/signedUrlSync↗](http://127.0.0.1:4000/project/11/interface/api/149) 的 **请求函数**
 *
 * @分类 [文件上传↗](http://127.0.0.1:4000/project/11/interface/api/cat_95)
 * @标签 `文件上传`
 * @请求头 `POST /file/signedUrlSync`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const post__file_signedUrlSync: {
    (requestData: PostFileSignedUrlSyncRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<any>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/file/signedUrlSync", "data", string, string, false>;
};
