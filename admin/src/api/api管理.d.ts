import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [获取接口列表↗](http://127.0.0.1:4000/project/11/interface/api/41) 的 **请求类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface GetApiRequest {
    search?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取接口列表↗](http://127.0.0.1:4000/project/11/interface/api/41) 的 **返回类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare type GetApiResponse = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    verification: boolean;
}[];
/**
 * 接口 [获取接口列表↗](http://127.0.0.1:4000/project/11/interface/api/41) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const get__api: {
    (requestData: GetApiRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetApiResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/api", "data", string, "search" | "sort" | "limit" | "page", false>;
};
/**
 * 接口 [创建接口↗](http://127.0.0.1:4000/project/11/interface/api/44) 的 **请求类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `POST /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PostApiRequest {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    verification: boolean;
}
/**
 * 接口 [创建接口↗](http://127.0.0.1:4000/project/11/interface/api/44) 的 **返回类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `POST /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PostApiResponse {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    verification: boolean;
}
/**
 * 接口 [创建接口↗](http://127.0.0.1:4000/project/11/interface/api/44) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `POST /api`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const post__api: {
    (requestData: PostApiRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostApiResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/api", "data", string, string, false>;
};
/**
 * 接口 [获取接口↗](http://127.0.0.1:4000/project/11/interface/api/47) 的 **请求类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetApiIdRequest {
    id: string;
}
/**
 * 接口 [获取接口↗](http://127.0.0.1:4000/project/11/interface/api/47) 的 **返回类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetApiIdResponse {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    verification: boolean;
}
/**
 * 接口 [获取接口↗](http://127.0.0.1:4000/project/11/interface/api/47) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `GET /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__api_id: {
    (requestData: GetApiIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetApiIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/api/{id}", "data", "id", string, false>;
};
/**
 * 接口 [更新接口↗](http://127.0.0.1:4000/project/11/interface/api/50) 的 **请求类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `PUT /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PutApiIdRequest {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    verification?: boolean;
    id: string;
}
/**
 * 接口 [更新接口↗](http://127.0.0.1:4000/project/11/interface/api/50) 的 **返回类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `PUT /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PutApiIdResponse {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    verification: boolean;
}
/**
 * 接口 [更新接口↗](http://127.0.0.1:4000/project/11/interface/api/50) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `PUT /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const put__api_id: {
    (requestData: PutApiIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PutApiIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/api/{id}", "data", "id", string, false>;
};
/**
 * 接口 [删除接口↗](http://127.0.0.1:4000/project/11/interface/api/53) 的 **请求类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `DELETE /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface DeleteApiIdRequest {
    id: string;
}
/**
 * 接口 [删除接口↗](http://127.0.0.1:4000/project/11/interface/api/53) 的 **返回类型**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `DELETE /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface DeleteApiIdResponse {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    verification: boolean;
}
/**
 * 接口 [删除接口↗](http://127.0.0.1:4000/project/11/interface/api/53) 的 **请求函数**
 *
 * @分类 [api管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_39)
 * @标签 `api管理`
 * @请求头 `DELETE /api/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const delete__api_id: {
    (requestData: DeleteApiIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<DeleteApiIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/api/{id}", "data", "id", string, false>;
};
