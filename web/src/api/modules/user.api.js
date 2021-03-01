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
 * @title 获取用户列表
 * @path /user
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    role: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__user (params, options) {
    const interfaceData = {
      path: '/user',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建用户
 * @path /user
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    phone: '', // {string}
    username: '', // {string}
    password: '', // {string}
    roles: '', // {array}

 }
 */
  post__user (params, options) {
    const interfaceData = {
      path: '/user',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5facdd74d744053e74cbd71a',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新用户
 * @path /user/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    username: '', // {string}
    password: '', // {string}
    status: '', // {boolean}
    roles: '', // {array}

 }
 */
  put_user_id (params, options) {
    const interfaceData = {
      path: '/user/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5facdd74d744053e74cbd71b',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5facdd74d744053e74cbd71c',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  }
})
