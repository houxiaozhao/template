import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/125) 的 **请求类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetPermissionRequest {
    search?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/125) 的 **返回类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare type GetPermissionResponse = {
    _id: string;
    alias?: string;
    apis: {
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
        verification: boolean;
    }[];
    menus: {
        type: '菜单' | '菜单组';
        order: number;
    }[];
    buttons: string[];
}[];
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/125) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const get__permission: {
    (requestData: GetPermissionRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetPermissionResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/permission", "data", string, "search" | "sort" | "limit" | "page", false>;
};
/**
 * 接口 [创建权限↗](http://127.0.0.1:4000/project/11/interface/api/128) 的 **请求类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `POST /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PostPermissionRequest {
    alias?: string;
    apis: string[];
    menus: string[];
    buttons: string[];
}
/**
 * 接口 [创建权限↗](http://127.0.0.1:4000/project/11/interface/api/128) 的 **返回类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `POST /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PostPermissionResponse {
    _id: string;
    alias?: string;
    apis: string[];
    menus: string[];
    buttons: string[];
}
/**
 * 接口 [创建权限↗](http://127.0.0.1:4000/project/11/interface/api/128) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `POST /permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const post__permission: {
    (requestData: PostPermissionRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostPermissionResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/permission", "data", string, string, false>;
};
/**
 * 接口 [获取权限↗](http://127.0.0.1:4000/project/11/interface/api/131) 的 **请求类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetPermissionIdRequest {
    id: string;
}
/**
 * 接口 [获取权限↗](http://127.0.0.1:4000/project/11/interface/api/131) 的 **返回类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetPermissionIdResponse {
    _id: string;
    alias?: string;
    apis: {
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
        verification: boolean;
    }[];
    menus: {
        type: '菜单' | '菜单组';
        order: number;
    }[];
    buttons: string[];
}
/**
 * 接口 [获取权限↗](http://127.0.0.1:4000/project/11/interface/api/131) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `GET /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const get__permission_id: {
    (requestData: GetPermissionIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetPermissionIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/permission/{id}", "data", "id", string, false>;
};
/**
 * 接口 [更新权限↗](http://127.0.0.1:4000/project/11/interface/api/134) 的 **请求类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `PUT /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PutPermissionIdRequest {
    alias?: string;
    apis?: string[];
    menus?: string[];
    buttons?: string[];
    id: string;
}
/**
 * 接口 [更新权限↗](http://127.0.0.1:4000/project/11/interface/api/134) 的 **返回类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `PUT /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface PutPermissionIdResponse {
    _id: string;
    alias?: string;
    apis: string[];
    menus: string[];
    buttons: string[];
}
/**
 * 接口 [更新权限↗](http://127.0.0.1:4000/project/11/interface/api/134) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `PUT /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const put__permission_id: {
    (requestData: PutPermissionIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PutPermissionIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/permission/{id}", "data", "id", string, false>;
};
/**
 * 接口 [删除权限↗](http://127.0.0.1:4000/project/11/interface/api/137) 的 **请求类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `DELETE /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface DeletePermissionIdRequest {
    id: string;
}
/**
 * 接口 [删除权限↗](http://127.0.0.1:4000/project/11/interface/api/137) 的 **返回类型**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `DELETE /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface DeletePermissionIdResponse {
    _id: string;
    alias?: string;
    apis: string[];
    menus: string[];
    buttons: string[];
}
/**
 * 接口 [删除权限↗](http://127.0.0.1:4000/project/11/interface/api/137) 的 **请求函数**
 *
 * @分类 [权限管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_81)
 * @标签 `权限管理`
 * @请求头 `DELETE /permission/{id}`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const delete__permission_id: {
    (requestData: DeletePermissionIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<DeletePermissionIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/permission/{id}", "data", "id", string, false>;
};
