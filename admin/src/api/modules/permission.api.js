export default ({
  service,
  request,
  serviceForMock,
  requestForMock,
  mock,
  faker,
  tools
}) => ({
  /**
 * @title 获取权限列表
 * @path /permission
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__permission (params, options) {
    const interfaceData = {
      path: '/permission',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建权限
 * @path /permission
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    alias: '', // {string}
    apis: '', // {array}
    menus: '', // {array}

 }
 */
  post__permission (params, options) {
    const interfaceData = {
      path: '/permission',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd57d',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取权限
 * @path /permission/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_permission_id (params, options) {
    const interfaceData = {
      path: '/permission/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd57e',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新权限
 * @path /permission/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    alias: '', // {string}
    apis: '', // {array}
    menus: '', // {array}

 }
 */
  put_permission_id (params, options) {
    const interfaceData = {
      path: '/permission/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd57f',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd580',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除权限
 * @path /permission/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_permission_id (params, options) {
    const interfaceData = {
      path: '/permission/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd581',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }
})
