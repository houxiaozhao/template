import axios from 'axios'
import cookies from '@/libs/util.cookies'
// import {Notification} from 'element-ui';
import { get } from 'lodash'
import store from './../store/index'

const instance = axios.create({
  // baseURL: 'http://127.0.0.1:5100',
  timeout: 60000,
  headers: {}
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  const token = cookies.get('token')
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // dataAxios 是 axios 返回数据中的 data
  const dataAxios = response.data
  // return dataAxios
  // 这个状态码是和后端约定的
  const { errno } = dataAxios
  // 根据 errno 进行判断
  if (errno === undefined) {
    // 如果没有 errno 代表这不是项目后端开发的接口
    return dataAxios
  } else {
    // 有 errno 代表这是一个后端接口 可以进行进一步的判断
    switch (errno) {
      case 0:
        // [ 示例 ] errno === 0 代表没有错误
        return dataAxios
      case 999:
        console.log('token')
        store.dispatch('system/logout').then(r => {
          console.log(r)
        })
        return dataAxios
      default:
        return dataAxios
    }
  }
}, function (error) {
  const status = get(error, 'response.status')
  switch (status) {
    case 400:
      error.message = '请求错误'
      break
    case 401:
      error.message = '未授权，请登录'
      break
    case 403:
      error.message = '拒绝访问'
      break
    case 404:
      error.message = `请求地址出错: ${error.response.config.url}`
      break
    case 408:
      error.message = '请求超时'
      break
    case 500:
      error.message = '服务器内部错误'
      break
    case 501:
      error.message = '服务未实现'
      break
    case 502:
      error.message = '网关错误'
      break
    case 503:
      error.message = '服务不可用'
      break
    case 504:
      error.message = '网关超时'
      break
    case 505:
      error.message = 'HTTP版本不受支持'
      break
    default:
      break
  }
  if (error.response && error.response.data) error.message = error.response.data.errmsg
  // Notification({
  //     title: '提示',
  //     message: error.message,
  //     type: 'warning',
  // })
  return Promise.reject(error)
})
export default instance
