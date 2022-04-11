import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [管理员登陆↗](http://127.0.0.1:4000/project/11/interface/api/86) 的 **请求类型**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `POST /admin-auth/login`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostAdminauthLoginRequest {
    username: string;
    password: string;
}
/**
 * 接口 [管理员登陆↗](http://127.0.0.1:4000/project/11/interface/api/86) 的 **返回类型**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `POST /admin-auth/login`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface PostAdminauthLoginResponse {
    _id: string;
    username: string;
    access_token: string;
}
/**
 * 接口 [管理员登陆↗](http://127.0.0.1:4000/project/11/interface/api/86) 的 **请求函数**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `POST /admin-auth/login`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const post__adminauth_login: {
    (requestData: PostAdminauthLoginRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostAdminauthLoginResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/admin-auth/login", "data", string, string, false>;
};
/**
 * 接口 [管理员获取信息↗](http://127.0.0.1:4000/project/11/interface/api/89) 的 **请求类型**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `GET /admin-auth/profile`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetAdminauthProfileRequest {
}
/**
 * 接口 [管理员获取信息↗](http://127.0.0.1:4000/project/11/interface/api/89) 的 **返回类型**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `GET /admin-auth/profile`
 * @更新时间 `2022-04-11 11:52:53`
 */
export interface GetAdminauthProfileResponse {
    _id: string;
    username: string;
}
/**
 * 接口 [管理员获取信息↗](http://127.0.0.1:4000/project/11/interface/api/89) 的 **请求函数**
 *
 * @分类 [管理员认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_60)
 * @标签 `管理员认证`
 * @请求头 `GET /admin-auth/profile`
 * @更新时间 `2022-04-11 11:52:53`
 */
export declare const get__adminauth_profile: {
    (requestData?: GetAdminauthProfileRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetAdminauthProfileResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/admin-auth/profile", "data", string, string, true>;
};
