export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({

  /**
 * @title 获取按钮列表
 * @path /button
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__button (params, options) {
    const interfaceData = {
      path: '/button',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建按钮
 * @path /button
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    type: '', // {string}
    order: '', // {number}
    title: '', // {string}
    remarks: '', // {string}
    icon: '', // {string}
    path: '', // {string}
    parent: '', // {string}

 }
 */
  post__button (params, options) {
    const interfaceData = {
      path: '/button',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd56d',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取按钮
 * @path /button/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_button_id (params, options) {
    const interfaceData = {
      path: '/button/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd56e',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新按钮
 * @path /button/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    type: '', // {string}
    order: '', // {number}
    title: '', // {string}
    remarks: '', // {string}
    icon: '', // {string}
    path: '', // {string}
    parent: '', // {string}

 }
 */
  put_button_id (params, options) {
    const interfaceData = {
      path: '/button/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd56f',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd570',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除按钮
 * @path /button/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_button_id (params, options) {
    const interfaceData = {
      path: '/button/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd571',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }

})
