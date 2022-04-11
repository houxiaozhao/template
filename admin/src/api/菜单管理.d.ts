import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [获取菜单树↗](http://127.0.0.1:4000/project/11/interface/api/92) 的 **请求类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/menutree`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetMenuMenutreeRequest {
}
/**
 * 接口 [获取菜单树↗](http://127.0.0.1:4000/project/11/interface/api/92) 的 **返回类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/menutree`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare type GetMenuMenutreeResponse = any;
/**
 * 接口 [获取菜单树↗](http://127.0.0.1:4000/project/11/interface/api/92) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/menutree`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__menu_menutree: {
    (requestData?: GetMenuMenutreeRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<any>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/menu/menutree", "data", string, string, true>;
};
/**
 * 接口 [获取菜单列表↗](http://127.0.0.1:4000/project/11/interface/api/95) 的 **请求类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetMenuRequest {
    search?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取菜单列表↗](http://127.0.0.1:4000/project/11/interface/api/95) 的 **返回类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare type GetMenuResponse = {
    type: '菜单' | '菜单组';
    order: number;
}[];
/**
 * 接口 [获取菜单列表↗](http://127.0.0.1:4000/project/11/interface/api/95) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__menu: {
    (requestData: GetMenuRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetMenuResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/menu", "data", string, "search" | "sort" | "limit" | "page", false>;
};
/**
 * 接口 [创建菜单↗](http://127.0.0.1:4000/project/11/interface/api/98) 的 **请求类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `POST /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostMenuRequest {
    type: '菜单' | '菜单组';
    order: number;
}
/**
 * 接口 [创建菜单↗](http://127.0.0.1:4000/project/11/interface/api/98) 的 **返回类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `POST /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostMenuResponse {
    type: '菜单' | '菜单组';
    order: number;
}
/**
 * 接口 [创建菜单↗](http://127.0.0.1:4000/project/11/interface/api/98) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `POST /menu`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const post__menu: {
    (requestData: PostMenuRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostMenuResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/menu", "data", string, string, false>;
};
/**
 * 接口 [获取菜单↗](http://127.0.0.1:4000/project/11/interface/api/101) 的 **请求类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetMenuIdRequest {
    id: string;
}
/**
 * 接口 [获取菜单↗](http://127.0.0.1:4000/project/11/interface/api/101) 的 **返回类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetMenuIdResponse {
    type: '菜单' | '菜单组';
    order: number;
}
/**
 * 接口 [获取菜单↗](http://127.0.0.1:4000/project/11/interface/api/101) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `GET /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__menu_id: {
    (requestData: GetMenuIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetMenuIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/menu/{id}", "data", "id", string, false>;
};
/**
 * 接口 [更新菜单↗](http://127.0.0.1:4000/project/11/interface/api/104) 的 **请求类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `PUT /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PutMenuIdRequest {
    type?: '菜单' | '菜单组';
    order?: number;
    id: string;
}
/**
 * 接口 [更新菜单↗](http://127.0.0.1:4000/project/11/interface/api/104) 的 **返回类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `PUT /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PutMenuIdResponse {
    type: '菜单' | '菜单组';
    order: number;
}
/**
 * 接口 [更新菜单↗](http://127.0.0.1:4000/project/11/interface/api/104) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `PUT /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const put__menu_id: {
    (requestData: PutMenuIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PutMenuIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/menu/{id}", "data", "id", string, false>;
};
/**
 * 接口 [删除菜单↗](http://127.0.0.1:4000/project/11/interface/api/107) 的 **请求类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `DELETE /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface DeleteMenuIdRequest {
    id: string;
}
/**
 * 接口 [删除菜单↗](http://127.0.0.1:4000/project/11/interface/api/107) 的 **返回类型**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `DELETE /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface DeleteMenuIdResponse {
    type: '菜单' | '菜单组';
    order: number;
}
/**
 * 接口 [删除菜单↗](http://127.0.0.1:4000/project/11/interface/api/107) 的 **请求函数**
 *
 * @分类 [菜单管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_67)
 * @标签 `菜单管理`
 * @请求头 `DELETE /menu/{id}`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const delete__menu_id: {
    (requestData: DeleteMenuIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<DeleteMenuIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/menu/{id}", "data", "id", string, false>;
};
