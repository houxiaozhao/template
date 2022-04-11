import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [获取公司列表↗](http://127.0.0.1:4000/project/11/interface/api/56) 的 **请求类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetCompanyRequest {
    search?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取公司列表↗](http://127.0.0.1:4000/project/11/interface/api/56) 的 **返回类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare type GetCompanyResponse = {
    _id: string;
    name: string;
}[];
/**
 * 接口 [获取公司列表↗](http://127.0.0.1:4000/project/11/interface/api/56) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__company: {
    (requestData: GetCompanyRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetCompanyResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/company", "data", string, "search" | "sort" | "limit" | "page", false>;
};
/**
 * 接口 [创建公司↗](http://127.0.0.1:4000/project/11/interface/api/59) 的 **请求类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `POST /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostCompanyRequest {
    name: string;
    phone: string;
    username: string;
    password: string;
    permissions: string[];
}
/**
 * 接口 [创建公司↗](http://127.0.0.1:4000/project/11/interface/api/59) 的 **返回类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `POST /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostCompanyResponse {
    _id: string;
    name: string;
}
/**
 * 接口 [创建公司↗](http://127.0.0.1:4000/project/11/interface/api/59) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `POST /company`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const post__company: {
    (requestData: PostCompanyRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostCompanyResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/company", "data", string, string, false>;
};
/**
 * 接口 [获取公司↗](http://127.0.0.1:4000/project/11/interface/api/62) 的 **请求类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetCompanyIdRequest {
    id: string;
}
/**
 * 接口 [获取公司↗](http://127.0.0.1:4000/project/11/interface/api/62) 的 **返回类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetCompanyIdResponse {
    _id: string;
    name: string;
}
/**
 * 接口 [获取公司↗](http://127.0.0.1:4000/project/11/interface/api/62) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `GET /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__company_id: {
    (requestData: GetCompanyIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetCompanyIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/company/{id}", "data", "id", string, false>;
};
/**
 * 接口 [更新公司↗](http://127.0.0.1:4000/project/11/interface/api/65) 的 **请求类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `PUT /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PutCompanyIdRequest {
    name?: string;
    id: string;
}
/**
 * 接口 [更新公司↗](http://127.0.0.1:4000/project/11/interface/api/65) 的 **返回类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `PUT /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PutCompanyIdResponse {
    _id: string;
    name: string;
}
/**
 * 接口 [更新公司↗](http://127.0.0.1:4000/project/11/interface/api/65) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `PUT /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const put__company_id: {
    (requestData: PutCompanyIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PutCompanyIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/company/{id}", "data", "id", string, false>;
};
/**
 * 接口 [删除公司↗](http://127.0.0.1:4000/project/11/interface/api/68) 的 **请求类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `DELETE /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface DeleteCompanyIdRequest {
    id: string;
}
/**
 * 接口 [删除公司↗](http://127.0.0.1:4000/project/11/interface/api/68) 的 **返回类型**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `DELETE /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface DeleteCompanyIdResponse {
    _id: string;
    name: string;
}
/**
 * 接口 [删除公司↗](http://127.0.0.1:4000/project/11/interface/api/68) 的 **请求函数**
 *
 * @分类 [公司管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_46)
 * @标签 `公司管理`
 * @请求头 `DELETE /company/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const delete__company_id: {
    (requestData: DeleteCompanyIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<DeleteCompanyIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/company/{id}", "data", "id", string, false>;
};
