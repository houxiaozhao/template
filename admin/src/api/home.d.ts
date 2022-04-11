import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export declare type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [\/↗](http://127.0.0.1:4000/project/11/interface/api/11) 的 **请求类型**
 *
 * @分类 [home↗](http://127.0.0.1:4000/project/11/interface/api/cat_18)
 * @标签 `home`
 * @请求头 `GET /`
 * @更新时间 `2022-04-11 11:52:52`
 */
export interface GetRequest {
}
/**
 * 接口 [\/↗](http://127.0.0.1:4000/project/11/interface/api/11) 的 **返回类型**
 *
 * @分类 [home↗](http://127.0.0.1:4000/project/11/interface/api/cat_18)
 * @标签 `home`
 * @请求头 `GET /`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare type GetResponse = any;
/**
 * 接口 [\/↗](http://127.0.0.1:4000/project/11/interface/api/11) 的 **请求函数**
 *
 * @分类 [home↗](http://127.0.0.1:4000/project/11/interface/api/cat_18)
 * @标签 `home`
 * @请求头 `GET /`
 * @更新时间 `2022-04-11 11:52:52`
 */
export declare const get__: {
    (requestData?: GetRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<any>;
    requestConfig: RequestConfig<"http://127.0.0.1:4000/mock/11", "http://127.0.0.1:3001", "", "/", "data", string, string, true>;
};
