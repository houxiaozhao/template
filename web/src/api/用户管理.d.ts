import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [获取用户列表↗](http://127.0.0.1:4000/project/11/interface/api/14) 的 **请求类型**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `GET /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface GetUserRequest {
    search?: string;
    role?: string;
    limit?: string;
    sort?: string;
    page?: string;
}
/**
 * 接口 [获取用户列表↗](http://127.0.0.1:4000/project/11/interface/api/14) 的 **返回类型**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `GET /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare type GetUserResponse = {
    _id: string;
    phone: string;
    username: string;
    status: boolean;
    company: string;
    roles: {
        _id: string;
        alias?: string;
        permissions: string[];
        company: string;
    }[];
    gender: string;
    email: string;
    code: string;
    birth: string;
}[];
/**
 * 接口 [获取用户列表↗](http://127.0.0.1:4000/project/11/interface/api/14) 的 **请求函数**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `GET /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const get__user: {
    (requestData: GetUserRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetUserResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/user", "data", string, "search" | "sort" | "role" | "limit" | "page", false>;
};
/**
 * 接口 [创建用户↗](http://127.0.0.1:4000/project/11/interface/api/17) 的 **请求类型**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `POST /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PostUserRequest {
    phone: string;
    username: string;
    password: string;
    roles: string[];
    gender: string;
    email: string;
    code: string;
    birth: number;
}
/**
 * 接口 [创建用户↗](http://127.0.0.1:4000/project/11/interface/api/17) 的 **返回类型**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `POST /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PostUserResponse {
    _id: string;
    phone: string;
    username: string;
    status: boolean;
    company: string;
    roles: {
        _id: string;
        alias?: string;
        permissions: string[];
        company: string;
    }[];
    gender: string;
    email: string;
    code: string;
    birth: string;
}
/**
 * 接口 [创建用户↗](http://127.0.0.1:4000/project/11/interface/api/17) 的 **请求函数**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `POST /user`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const post__user: {
    (requestData: PostUserRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostUserResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/user", "data", string, string, false>;
};
/**
 * 接口 [更新用户↗](http://127.0.0.1:4000/project/11/interface/api/20) 的 **请求类型**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `PUT /user/{id}`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PutUserIdRequest {
    username?: string;
    password?: string;
    status?: boolean;
    roles?: string[];
    gender?: string;
    email?: string;
    code?: string;
    birth?: number;
    id: string;
}
/**
 * 接口 [更新用户↗](http://127.0.0.1:4000/project/11/interface/api/20) 的 **返回类型**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `PUT /user/{id}`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PutUserIdResponse {
    _id: string;
    phone: string;
    username: string;
    status: boolean;
    company: string;
    roles: {
        _id: string;
        alias?: string;
        permissions: string[];
        company: string;
    }[];
    gender: string;
    email: string;
    code: string;
    birth: string;
}
/**
 * 接口 [更新用户↗](http://127.0.0.1:4000/project/11/interface/api/20) 的 **请求函数**
 *
 * @分类 [用户管理↗](http://127.0.0.1:4000/project/11/interface/api/cat_25)
 * @标签 `用户管理`
 * @请求头 `PUT /user/{id}`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const put__user_id: {
    (requestData: PutUserIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PutUserIdResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/user/{id}", "data", "id", string, false>;
};
