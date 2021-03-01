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
 * @title 管理员登陆
 * @path /admin-auth/login
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    username: '', // {string}
    password: '', // {string}

 }
 */
  post_adminauth_login (params, options) {
    const interfaceData = {
      path: '/admin-auth/login',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fab5f07d744053e74cbd569',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  USERINFO () {
    return request({
      url: '/auth/user/userinfo',
      method: 'get'
    })
  },
  changePassword (data) {
    return request({
      url: '/auth/user/changepassword',
      method: 'post',
      data
    })
  }
})
