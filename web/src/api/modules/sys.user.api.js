export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  changePassword (data) {
    return request({
      url: '/auth/user/changepassword',
      method: 'post',
      data
    })
  },

  /**
 * @title 获取验证码
 * @path /auth/verificationCode
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    phone: '', // {string}  undefined

 }
 */
  get_auth_verificationCode (params, options) {
    const interfaceData = {
      path: '/auth/verificationCode',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 找回密码
 * @path /auth/retrievePassword
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    code: '', // {string}  undefined
    password: '', // {string}  undefined
    phone: '', // {string}  undefined

 }
 */
  get_auth_retrievePassword (params, options) {
    const interfaceData = {
      path: '/auth/retrievePassword',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },
  /**
 * @title 用户获取验证码
 * @path /auth/svgCaptacha
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
  get_auth_svgCaptacha (params, options) {
    const interfaceData = {
      path: '/auth/svgCaptacha',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },
  /**
 * @title 获取本部门用户信息
 * @path /auth/user/departmentuserinfo/:id
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}

 }
 */
  get_departmentuserinfo_id (params, options) {
    const interfaceData = {
      path: '/auth/user/departmentuserinfo/:id',
      method: 'GET',
      req_params: [
        {
          _id: '5f9ba8ef920ac47a589a3484',
          name: 'id',
          desc: ''
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5f9ba8ef920ac47a589a3485',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 用户登陆
 * @path /auth/login
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    phone: '', // {string}
    password: '', // {string}

 }
 */
  post_auth_login (params, options) {
    const interfaceData = {
      path: '/auth/login',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fab7e92d744053e74cbd5a1',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 用户获取信息
 * @path /auth/profile
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
  get_auth_profile (params, options) {
    const interfaceData = {
      path: '/auth/profile',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 用户修改密码
 * @path /auth/user/changepassword
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    oldPassword: '', // {string}
    newPassword: '', // {string}

 }
 */
  post_user_changepassword (params, options) {
    const interfaceData = {
      path: '/auth/user/changepassword',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5f880780c5fee06d0c87fe98',
          name: 'Content-Type',
          value: 'application/json'
        },
        {
          required: '1',
          _id: '5f880780c5fee06d0c87fe97',
          name: 'Authorization',
          desc: 'token '
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 用户使用身份证信息修改密码
 * @path /auth/user/changepassword2
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    name: '', // {string}
    citizenIDNumber: '', // {string}
    newPassword: '', // {string}

 }
 */
  post_user_changepassword2 (params, options) {
    const interfaceData = {
      path: '/auth/user/changepassword2',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5f8d20fbf1679f3b1c7d118f',
          name: 'Content-Type',
          value: 'application/json'
        },
        {
          required: '1',
          _id: '5f8d20fbf1679f3b1c7d118e',
          name: 'Authorization',
          desc: 'token '
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },
  /**
 * @title 部门内部获取用户列表
 * @path /auth/user
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    currentPage: '', // {string}  当前页数 默认1
    pageSize: '', // {string}  每页个数 默认10
    search: '', // {string}  搜索
    order: '', // {string}  排序

 }
 */
  get_auth_user (params, options) {
    const interfaceData = {
      path: '/auth/user',
      method: 'GET',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5f58772d07932e62505f293e',
          name: 'Content-Type',
          value: 'application/json'
        },
        {
          required: '1',
          _id: '5f58772d07932e62505f293d',
          name: 'Authorization',
          desc: 'token '
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 部门内部创建用户
 * @path /auth/user
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    phone: '', // {string}
    username: '', // {string}
    password: '', // {string}
    avatar: '', // {string}

 }
 */
  post_auth_user (params, options) {
    const interfaceData = {
      path: '/auth/user',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5f5f0c58427b591dccb983d4',
          name: 'Content-Type',
          value: 'application/json'
        },
        {
          required: '1',
          _id: '5f5f0c58427b591dccb983d3',
          name: 'Authorization',
          desc: 'token '
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 部门内部编辑用户
 * @path /user/user/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}
    phone: '', // {string}
    username: '', // {string}
    roles: '', // {array}

 }
 */
  put_user_id (params, options) {
    const interfaceData = {
      path: '/user/user/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5f5f1c87427b591dccb985a6',
          name: 'id',
          desc: ''
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5f5f1c87427b591dccb985a8',
          name: 'Content-Type',
          value: 'application/json'
        },
        {
          required: '1',
          _id: '5f5f1c87427b591dccb985a7',
          name: 'Authorization',
          desc: 'token '
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  }
})
