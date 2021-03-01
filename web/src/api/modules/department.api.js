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
 * @path /department/tree
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
  get_department_tree (params, options) {
    const interfaceData = {
      path: '/department/tree',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取部门列表
 * @path /department
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__department (params, options) {
    const interfaceData = {
      path: '/department',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建部门
 * @path /department
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    name: '', // {string}
    code: '', // {string}
    parent: '', // {string}

 }
 */
  post__department (params, options) {
    const interfaceData = {
      path: '/department',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5facdd74d744053e74cbd750',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取部门
 * @path /department/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_department_id (params, options) {
    const interfaceData = {
      path: '/department/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5facdd74d744053e74cbd751',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新部门
 * @path /department/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    name: '', // {string}
    code: '', // {string}
    parent: '', // {string}

 }
 */
  put_department_id (params, options) {
    const interfaceData = {
      path: '/department/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5facdd74d744053e74cbd752',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5facdd74d744053e74cbd753',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除部门
 * @path /department/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_department_id (params, options) {
    const interfaceData = {
      path: '/department/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5facdd74d744053e74cbd754',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 添加用户到部门
 * @path /department/addUserToDepartment
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    user: '', // {string}
    department: '', // {string}
    position: '', // {string}

 }
 */
  post_department_addUserToDepartment (params, options) {
    const interfaceData = {
      path: '/department/addUserToDepartment',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5facdd74d744053e74cbd74a',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 从部门删除用户
 * @path /department/removeUserFormDepartment
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    user: '', // {string}
    department: '', // {string}

 }
 */
  delete_department_removeUserFormDepartment (params, options) {
    const interfaceData = {
      path: '/department/removeUserFormDepartment',
      method: 'DELETE',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5facdd74d744053e74cbd74b',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新部门中的用户
 * @path /department/updateDepartmentUser
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    user: '', // {string}
    department: '', // {string}
    position: '', // {string}

 }
 */
  put_department_updateDepartmentUser (params, options) {
    const interfaceData = {
      path: '/department/updateDepartmentUser',
      method: 'PUT',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5facdd74d744053e74cbd74c',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  }
})
