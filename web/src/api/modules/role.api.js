export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({

  /**
 * @title 获取角色列表
 * @path /role
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__role (params, options) {
    const interfaceData = {
      path: '/role',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建角色
 * @path /role
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    alias: '', // {string}
    permissions: '', // {array}
    company: '', // {string}

 }
 */
  post__role (params, options) {
    const interfaceData = {
      path: '/role',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fab7e93d744053e74cbd5be',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取角色
 * @path /role/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_role_id (params, options) {
    const interfaceData = {
      path: '/role/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fab7e93d744053e74cbd5bf',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新角色
 * @path /role/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    alias: '', // {string}
    permissions: '', // {array}
    company: '', // {string}

 }
 */
  put_role_id (params, options) {
    const interfaceData = {
      path: '/role/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5fab7e93d744053e74cbd5c0',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5fab7e93d744053e74cbd5c1',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除角色
 * @path /role/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_role_id (params, options) {
    const interfaceData = {
      path: '/role/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5fab7e93d744053e74cbd5c2',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }

})
