import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/140) 的 **请求类型**
 *
 * @分类 [用户权限接口↗](http://127.0.0.1:4000/project/11/interface/api/cat_88)
 * @标签 `用户权限接口`
 * @请求头 `GET /user_permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export interface GetUserPermissionRequest {
    search?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/140) 的 **返回类型**
 *
 * @分类 [用户权限接口↗](http://127.0.0.1:4000/project/11/interface/api/cat_88)
 * @标签 `用户权限接口`
 * @请求头 `GET /user_permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare type GetUserPermissionResponse = {
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
 * 接口 [获取权限列表↗](http://127.0.0.1:4000/project/11/interface/api/140) 的 **请求函数**
 *
 * @分类 [用户权限接口↗](http://127.0.0.1:4000/project/11/interface/api/cat_88)
 * @标签 `用户权限接口`
 * @请求头 `GET /user_permission`
 * @更新时间 `2022-04-11 11:52:54`
 */
export declare const get__user_permission: {
    (requestData: GetUserPermissionRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetUserPermissionResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/user_permission", "data", string, "search" | "sort" | "limit" | "page", false>;
};
