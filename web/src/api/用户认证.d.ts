import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [用户登陆↗](http://127.0.0.1:4000/project/11/interface/api/23) 的 **请求类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/login`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PostAuthLoginRequest {
    phone: string;
    password: string;
    uuid: string;
    code: string;
}
/**
 * 接口 [用户登陆↗](http://127.0.0.1:4000/project/11/interface/api/23) 的 **返回类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/login`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PostAuthLoginResponse {
    _id: string;
    phone: string;
    access_token: string;
    menus: {
        icon: string;
        order: number;
        path: string;
        title: string;
        type: string;
        _id: string;
    }[];
}
/**
 * 接口 [用户登陆↗](http://127.0.0.1:4000/project/11/interface/api/23) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/login`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const post__auth_login: {
    (requestData: PostAuthLoginRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostAuthLoginResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/auth/login", "data", string, string, false>;
};
/**
 * 接口 [用户短信验证码登陆↗](http://127.0.0.1:4000/project/11/interface/api/26) 的 **请求类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/verificationCodeLogin`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PostAuthVerificationCodeLoginRequest {
    phone: string;
    code: string;
}
/**
 * 接口 [用户短信验证码登陆↗](http://127.0.0.1:4000/project/11/interface/api/26) 的 **返回类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/verificationCodeLogin`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface PostAuthVerificationCodeLoginResponse {
    _id: string;
    phone: string;
    access_token: string;
    menus: {
        icon: string;
        order: number;
        path: string;
        title: string;
        type: string;
        _id: string;
    }[];
}
/**
 * 接口 [用户短信验证码登陆↗](http://127.0.0.1:4000/project/11/interface/api/26) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `POST /auth/verificationCodeLogin`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const post__auth_verificationCodeLogin: {
    (requestData: PostAuthVerificationCodeLoginRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<PostAuthVerificationCodeLoginResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/auth/verificationCodeLogin", "data", string, string, false>;
};
/**
 * 接口 [用户获取信息↗](http://127.0.0.1:4000/project/11/interface/api/29) 的 **请求类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/profile`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface GetAuthProfileRequest {
}
/**
 * 接口 [用户获取信息↗](http://127.0.0.1:4000/project/11/interface/api/29) 的 **返回类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/profile`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface GetAuthProfileResponse {
    _id: string;
    phone: string;
    menus: {
        icon: string;
        order: number;
        path: string;
        title: string;
        type: string;
        _id: string;
    }[];
}
/**
 * 接口 [用户获取信息↗](http://127.0.0.1:4000/project/11/interface/api/29) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/profile`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const get__auth_profile: {
    (requestData?: GetAuthProfileRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<GetAuthProfileResponse>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/auth/profile", "data", string, string, true>;
};
/**
 * 接口 [用户获取验证码,验证码1小时有效↗](http://127.0.0.1:4000/project/11/interface/api/32) 的 **请求类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/svgCaptacha`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface GetAuthSvgCaptachaRequest {
}
/**
 * 接口 [用户获取验证码,验证码1小时有效↗](http://127.0.0.1:4000/project/11/interface/api/32) 的 **返回类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/svgCaptacha`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare type GetAuthSvgCaptachaResponse = any;
/**
 * 接口 [用户获取验证码,验证码1小时有效↗](http://127.0.0.1:4000/project/11/interface/api/32) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/svgCaptacha`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const get__auth_svgCaptacha: {
    (requestData?: GetAuthSvgCaptachaRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<any>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/auth/svgCaptacha", "data", string, string, true>;
};
/**
 * 接口 [获取验证码↗](http://127.0.0.1:4000/project/11/interface/api/35) 的 **请求类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/verificationCode`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface GetAuthVerificationCodeRequest {
    phone: string;
}
/**
 * 接口 [获取验证码↗](http://127.0.0.1:4000/project/11/interface/api/35) 的 **返回类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/verificationCode`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare type GetAuthVerificationCodeResponse = string;
/**
 * 接口 [获取验证码↗](http://127.0.0.1:4000/project/11/interface/api/35) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/verificationCode`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const get__auth_verificationCode: {
    (requestData: GetAuthVerificationCodeRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<string>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/auth/verificationCode", "data", string, "phone", false>;
};
/**
 * 接口 [找回密码↗](http://127.0.0.1:4000/project/11/interface/api/38) 的 **请求类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/retrievePassword`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface GetAuthRetrievePasswordRequest {
    code: string;
    password: string;
    phone: string;
}
/**
 * 接口 [找回密码↗](http://127.0.0.1:4000/project/11/interface/api/38) 的 **返回类型**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/retrievePassword`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare type GetAuthRetrievePasswordResponse = any;
/**
 * 接口 [找回密码↗](http://127.0.0.1:4000/project/11/interface/api/38) 的 **请求函数**
 *
 * @分类 [用户认证↗](http://127.0.0.1:4000/project/11/interface/api/cat_32)
 * @标签 `用户认证`
 * @请求头 `GET /auth/retrievePassword`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const get__auth_retrievePassword: {
    (requestData: GetAuthRetrievePasswordRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<any>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/auth/retrievePassword", "data", string, "code" | "password" | "phone", false>;
};
