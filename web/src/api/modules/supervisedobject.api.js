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
 * @title 获取监管对象列表
 * @path /supervised-object
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    search: '', // {string}  undefined
    limit: '', // {string}  undefined
    sort: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__supervisedobject (params, options) {
    const interfaceData = {
      path: '/supervised-object',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建监管对象
 * @path /supervised-object
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    name: '', // {string}
    addr: '', // {string}
    area: '', // {string}
    tags: '', // {array}
    tagDetail: '', // {object}
    sensitiveArea: '', // {boolean}

 }
 */
  post__supervisedobject (params, options) {
    const interfaceData = {
      path: '/supervised-object',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fb751e2f86b0f15b444d8d3',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取监管对象
 * @path /supervised-object/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_supervisedobject_id (params, options) {
    const interfaceData = {
      path: '/supervised-object/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fb751e2f86b0f15b444d8d4',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新监管对象
 * @path /supervised-object/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    name: '', // {string}
    addr: '', // {string}
    area: '', // {string}
    tags: '', // {array}
    tagDetail: '', // {object}
    sensitiveArea: '', // {boolean}

 }
 */
  put_supervisedobject_id (params, options) {
    const interfaceData = {
      path: '/supervised-object/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5fb751e2f86b0f15b444d8d5',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5fb751e2f86b0f15b444d8d6',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除监管对象
 * @path /supervised-object/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_supervisedobject_id (params, options) {
    const interfaceData = {
      path: '/supervised-object/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5fb751e2f86b0f15b444d8d7',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }
})
