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
 * @title 获取部门树
 * @path /admin/companytree
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
  get_admin_companytree (params, options) {
    const interfaceData = {
      path: '/admin/companytree',
      method: 'GET',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5f58772c07932e62505f28d8',
          name: 'Content-Type',
          value: 'application/json'
        },
        {
          required: '1',
          _id: '5f58772c07932e62505f28d7',
          name: 'Authorization',
          desc: 'token '
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取公司列表
 * @path /company
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__company (params, options) {
    const interfaceData = {
      path: '/company',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建公司
 * @path /company
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    name: '', // {string}
    phone: '', // {string}
    username: '', // {string}
    password: '', // {string}
    permissions: '', // {array}

 }
 */
  post__company (params, options) {
    const interfaceData = {
      path: '/company',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd58d',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取公司
 * @path /company/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_company_id (params, options) {
    const interfaceData = {
      path: '/company/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd58e',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新公司
 * @path /company/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    name: '', // {string}

 }
 */
  put_company_id (params, options) {
    const interfaceData = {
      path: '/company/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd58f',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd590',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除公司
 * @path /company/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_company_id (params, options) {
    const interfaceData = {
      path: '/company/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5fab5f07d744053e74cbd591',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }
})
