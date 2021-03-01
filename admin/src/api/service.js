import axios from 'axios'
import Adapter from 'axios-mock-adapter'
import { get } from 'lodash'
import util from '@/libs/util'
import { errorLog, errorCreate } from './tools'
import store from '@/store'

/**
 * @description 创建请求实例
 */
function createService () {
  // 创建一个 axios 实例
  const service = axios.create()
  // 请求拦截
  service.interceptors.request.use(
    config => config,
    error => {
      // 发送失败
      console.log(error)
      return Promise.reject(error)
    }
  )
  // 响应拦截
  service.interceptors.response.use(
    response => {
      // dataAxios 是 axios 返回数据中的 data
      const dataAxios = response.data
      console.log(dataAxios)
      // 这个状态码是和后端约定的
      const { errno } = dataAxios
      // 根据 code 进行判断
      if (errno === undefined) {
        // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
        return dataAxios
      } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (errno) {
          case 0:
            // [ 示例 ] code === 0 代表没有错误
            return dataAxios
          case 999:
            store.dispatch('d2admin/account/logout', {})
            errorCreate(`[ errno: 999 ] ${dataAxios.errmsg}: ${response.config.url}`)
            break
          case 400:
            // store.dispatch('d2admin/account/logout', {})
            errorCreate(`[ errno: 400 ] ${dataAxios.errmsg}: ${response.config.url}`)
            break
          default:
            // 不是正确的 code
            errorCreate(`${dataAxios.msg}: ${response.config.url}`)
            break
        }
      }
    },
    error => {
      const status = get(error, 'response.status')
      switch (status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
      if (error.response.data) error.message = error.response.data.message
      errorLog(error)
      return Promise.reject(error)
    }
  )
  return service
}

/**
 * @description 创建请求方法
 * @param {Object} service axios 实例
 */
function createRequestFunction (service) {
  return function (config) {
    const token = util.cookies.get('token')
    const configDefault = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': get(config, 'headers.Content-Type', 'application/json')
      },
      timeout: 5000,
      baseURL: process.env.VUE_APP_API,
      data: {}
    }
    return service(Object.assign(configDefault, config))
  }
}

// 用于真实网络请求的实例和请求方法
export const service = createService()
// export const request = createRequestFunction(service)

// 用于模拟网络请求的实例和请求方法
export const serviceForMock = createService()
export const requestForMock = createRequestFunction(serviceForMock)

// 网络请求数据模拟工具
export const mock = new Adapter(serviceForMock)

export function request (interfaceData, params, options) {
  let url = interfaceData.path
  const method = interfaceData.method

  let isRestful = false
  if (url.indexOf(':') > 0) {
    isRestful = true
  } else if (url.indexOf('{') > 0 && url.indexOf('}') > 0) {
    isRestful = true
  }

  if (isRestful) {
    interfaceData.req_params.forEach(item => {
      const val = params[item.name]
      if (!val) {
        throw new Error('路径参数 ' + item.name + ' 不能为空')
      }
      url = url.replace(':' + item.name, val)
      url = url.replace('{' + item.name + '}', val)
      delete params[item.name]
    })
  }
  const HTTP_METHOD = {
    GET: {
      request_body: false
    },
    POST: {
      request_body: true
    },
    PUT: {
      request_body: true
    },
    DELETE: {
      request_body: true
    },
    HEAD: {
      request_body: false
    },
    OPTIONS: {
      request_body: false
    },
    PATCH: {
      request_body: true
    }
  }

  function request (baseinfo, options = {}) {
    const params = baseinfo.params

    options = Object.assign({}, {
      url: baseinfo.url,
      method: baseinfo.method

    }, options)

    if (HTTP_METHOD[baseinfo.method].request_body) {
      options.data = params
    } else {
      options.params = params
    }

    return createRequestFunction(service)(options)
  }

  return request({
    url,
    method,
    params
  }, options)
}
