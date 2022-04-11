import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [创建device↗](http://127.0.0.1:4000/project/11/interface/api/152) 的 **请求类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `POST /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PostDeviceRequest {
    name: string;
}
/**
 * 接口 [创建device↗](http://127.0.0.1:4000/project/11/interface/api/152) 的 **返回类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `POST /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PostDeviceResponse {
    _id: string;
    name: string;
}
/**
 * 接口 [创建device↗](http://127.0.0.1:4000/project/11/interface/api/152) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `POST /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const post__device: {
    (requestData: PostDeviceRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostDeviceResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/device", "data", string, string, false>;
};
/**
 * 接口 [获取device列表↗](http://127.0.0.1:4000/project/11/interface/api/155) 的 **请求类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetDeviceRequest {
    search?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取device列表↗](http://127.0.0.1:4000/project/11/interface/api/155) 的 **返回类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare type GetDeviceResponse = {
    _id: string;
    name: string;
}[];
/**
 * 接口 [获取device列表↗](http://127.0.0.1:4000/project/11/interface/api/155) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const get__device: {
    (requestData: GetDeviceRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetDeviceResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/device", "data", string, "search" | "sort" | "limit" | "page", false>;
};
/**
 * 接口 [获取device↗](http://127.0.0.1:4000/project/11/interface/api/158) 的 **请求类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetDeviceIdRequest {
    id: string;
}
/**
 * 接口 [获取device↗](http://127.0.0.1:4000/project/11/interface/api/158) 的 **返回类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetDeviceIdResponse {
    _id: string;
    name: string;
}
/**
 * 接口 [获取device↗](http://127.0.0.1:4000/project/11/interface/api/158) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `GET /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const get__device_id: {
    (requestData: GetDeviceIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetDeviceIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/device/{id}", "data", "id", string, false>;
};
/**
 * 接口 [更新device↗](http://127.0.0.1:4000/project/11/interface/api/161) 的 **请求类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `PUT /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PutDeviceIdRequest {
    name?: string;
    id: string;
}
/**
 * 接口 [更新device↗](http://127.0.0.1:4000/project/11/interface/api/161) 的 **返回类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `PUT /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PutDeviceIdResponse {
    _id: string;
    name: string;
}
/**
 * 接口 [更新device↗](http://127.0.0.1:4000/project/11/interface/api/161) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `PUT /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const put__device_id: {
    (requestData: PutDeviceIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PutDeviceIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/device/{id}", "data", "id", string, false>;
};
/**
 * 接口 [删除device↗](http://127.0.0.1:4000/project/11/interface/api/164) 的 **请求类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `DELETE /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface DeleteDeviceIdRequest {
    id: string;
}
/**
 * 接口 [删除device↗](http://127.0.0.1:4000/project/11/interface/api/164) 的 **返回类型**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `DELETE /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface DeleteDeviceIdResponse {
    _id: string;
    name: string;
}
/**
 * 接口 [删除device↗](http://127.0.0.1:4000/project/11/interface/api/164) 的 **请求函数**
 *
 * @分类 [device管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_102)
 * @标签 `device管理`
 * @请求头 `DELETE /device/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const delete__device_id: {
    (requestData: DeleteDeviceIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<DeleteDeviceIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/device/{id}", "data", "id", string, false>;
};
