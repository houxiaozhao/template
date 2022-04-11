import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [获取角色列表↗](http://127.0.0.1:4000/project/11/interface/api/71) 的 **请求类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetRoleRequest {
    search?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取角色列表↗](http://127.0.0.1:4000/project/11/interface/api/71) 的 **返回类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare type GetRoleResponse = {
    _id: string;
    alias?: string;
    permissions: {
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
        verification: boolean;
    }[];
    company: string;
}[];
/**
 * 接口 [获取角色列表↗](http://127.0.0.1:4000/project/11/interface/api/71) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__role: {
    (requestData: GetRoleRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetRoleResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/role", "data", string, "search" | "sort" | "limit" | "page", false>;
};
/**
 * 接口 [创建角色↗](http://127.0.0.1:4000/project/11/interface/api/74) 的 **请求类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `POST /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostRoleRequest {
    alias?: string;
    permissions: string[];
    company: string;
}
/**
 * 接口 [创建角色↗](http://127.0.0.1:4000/project/11/interface/api/74) 的 **返回类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `POST /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostRoleResponse {
    _id: string;
    alias?: string;
    permissions: string[];
    company: string;
}
/**
 * 接口 [创建角色↗](http://127.0.0.1:4000/project/11/interface/api/74) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `POST /role`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const post__role: {
    (requestData: PostRoleRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostRoleResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/role", "data", string, string, false>;
};
/**
 * 接口 [获取角色↗](http://127.0.0.1:4000/project/11/interface/api/77) 的 **请求类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetRoleIdRequest {
    id: string;
}
/**
 * 接口 [获取角色↗](http://127.0.0.1:4000/project/11/interface/api/77) 的 **返回类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetRoleIdResponse {
    _id: string;
    alias?: string;
    permissions: {
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
        verification: boolean;
    }[];
    company: string;
}
/**
 * 接口 [获取角色↗](http://127.0.0.1:4000/project/11/interface/api/77) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `GET /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__role_id: {
    (requestData: GetRoleIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetRoleIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/role/{id}", "data", "id", string, false>;
};
/**
 * 接口 [更新角色↗](http://127.0.0.1:4000/project/11/interface/api/80) 的 **请求类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `PUT /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PutRoleIdRequest {
    alias?: string;
    permissions?: string[];
    company?: string;
    id: string;
}
/**
 * 接口 [更新角色↗](http://127.0.0.1:4000/project/11/interface/api/80) 的 **返回类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `PUT /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PutRoleIdResponse {
    _id: string;
    alias?: string;
    permissions: string[];
    company: string;
}
/**
 * 接口 [更新角色↗](http://127.0.0.1:4000/project/11/interface/api/80) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `PUT /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const put__role_id: {
    (requestData: PutRoleIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PutRoleIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/role/{id}", "data", "id", string, false>;
};
/**
 * 接口 [删除角色↗](http://127.0.0.1:4000/project/11/interface/api/83) 的 **请求类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `DELETE /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface DeleteRoleIdRequest {
    id: string;
}
/**
 * 接口 [删除角色↗](http://127.0.0.1:4000/project/11/interface/api/83) 的 **返回类型**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `DELETE /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface DeleteRoleIdResponse {
    _id: string;
    alias?: string;
    permissions: string[];
    company: string;
}
/**
 * 接口 [删除角色↗](http://127.0.0.1:4000/project/11/interface/api/83) 的 **请求函数**
 *
 * @分类 [角色管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_53)
 * @标签 `角色管理`
 * @请求头 `DELETE /role/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const delete__role_id: {
    (requestData: DeleteRoleIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<DeleteRoleIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/role/{id}", "data", "id", string, false>;
};
