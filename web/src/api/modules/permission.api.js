export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({

  /**
 * @title 获取权限列表
 * @path /user_permission
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__user_permission (params, options) {
    const interfaceData = {
      path: '/user_permission',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }
})
