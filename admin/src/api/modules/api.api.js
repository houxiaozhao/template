export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({

  /**
 * @title 获取接口列表
 * @path /api
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__api (params, options) {
    const interfaceData = {
      path: '/api',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建接口
 * @path /api
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    method: '', // {string}
    verification: '', // {boolean}
    url: '', // {string}
    alias: '', // {string}

 }
 */
  post__api (params, options) {
    const interfaceData = {
      path: '/api',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd575',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取接口
 * @path /api/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_api_id (params, options) {
    const interfaceData = {
      path: '/api/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd576',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新接口
 * @path /api/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    method: '', // {string}
    verification: '', // {boolean}
    url: '', // {string}
    alias: '', // {string}

 }
 */
  put_api_id (params, options) {
    const interfaceData = {
      path: '/api/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd577',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd578',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除接口
 * @path /api/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_api_id (params, options) {
    const interfaceData = {
      path: '/api/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd579',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }
})
