import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [获取按钮列表↗](http://127.0.0.1:4000/project/11/interface/api/110) 的 **请求类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetButtonRequest {
    search?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取按钮列表↗](http://127.0.0.1:4000/project/11/interface/api/110) 的 **返回类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare type GetButtonResponse = {
    _id: string;
    name: string;
    remarks?: string;
}[];
/**
 * 接口 [获取按钮列表↗](http://127.0.0.1:4000/project/11/interface/api/110) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__button: {
    (requestData: GetButtonRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetButtonResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/button", "data", string, "search" | "sort" | "limit" | "page", false>;
};
/**
 * 接口 [创建按钮↗](http://127.0.0.1:4000/project/11/interface/api/113) 的 **请求类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `POST /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostButtonRequest {
    name: string;
    remarks?: string;
}
/**
 * 接口 [创建按钮↗](http://127.0.0.1:4000/project/11/interface/api/113) 的 **返回类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `POST /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostButtonResponse {
    _id: string;
    name: string;
    remarks?: string;
}
/**
 * 接口 [创建按钮↗](http://127.0.0.1:4000/project/11/interface/api/113) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `POST /button`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const post__button: {
    (requestData: PostButtonRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostButtonResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/button", "data", string, string, false>;
};
/**
 * 接口 [获取按钮↗](http://127.0.0.1:4000/project/11/interface/api/116) 的 **请求类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetButtonIdRequest {
    id: string;
}
/**
 * 接口 [获取按钮↗](http://127.0.0.1:4000/project/11/interface/api/116) 的 **返回类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetButtonIdResponse {
    _id: string;
    name: string;
    remarks?: string;
}
/**
 * 接口 [获取按钮↗](http://127.0.0.1:4000/project/11/interface/api/116) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `GET /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const get__button_id: {
    (requestData: GetButtonIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetButtonIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/button/{id}", "data", "id", string, false>;
};
/**
 * 接口 [更新按钮↗](http://127.0.0.1:4000/project/11/interface/api/119) 的 **请求类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `PUT /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PutButtonIdRequest {
    name?: string;
    remarks?: string;
    id: string;
}
/**
 * 接口 [更新按钮↗](http://127.0.0.1:4000/project/11/interface/api/119) 的 **返回类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `PUT /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PutButtonIdResponse {
    _id: string;
    name: string;
    remarks?: string;
}
/**
 * 接口 [更新按钮↗](http://127.0.0.1:4000/project/11/interface/api/119) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `PUT /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const put__button_id: {
    (requestData: PutButtonIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PutButtonIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/button/{id}", "data", "id", string, false>;
};
/**
 * 接口 [删除按钮↗](http://127.0.0.1:4000/project/11/interface/api/122) 的 **请求类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `DELETE /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface DeleteButtonIdRequest {
    id: string;
}
/**
 * 接口 [删除按钮↗](http://127.0.0.1:4000/project/11/interface/api/122) 的 **返回类型**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `DELETE /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface DeleteButtonIdResponse {
    _id: string;
    name: string;
    remarks?: string;
}
/**
 * 接口 [删除按钮↗](http://127.0.0.1:4000/project/11/interface/api/122) 的 **请求函数**
 *
 * @分类 [按钮管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_74)
 * @标签 `按钮管理`
 * @请求头 `DELETE /button/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const delete__button_id: {
    (requestData: DeleteButtonIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<DeleteButtonIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/button/{id}", "data", "id", string, false>;
};
