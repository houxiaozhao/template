

/**
 * @title /
 * @path /
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
get__ (params, options){
  let interfaceData={
  "path": "/",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取用户列表
 * @path /user
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    search: '', // {string}  undefined 
    role: '', // {string}  undefined 
    limit: '', // {string}  undefined 
    sort: '', // {string}  undefined 
    page: '', // {string}  undefined 

 }
 */
get__user (params, options){
  let interfaceData={
  "path": "/user",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 创建用户
 * @path /user
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    phone: '', // {string} *  
    username: '', // {string} *  
    password: '', // {string} *  
    roles: '', // {array} *  
    gender: '', // {string} *  
    email: '', // {string} *  
    code: '', // {string} *  
    birth: '', // {number} *  

 }
 */
post__user (params, options){
  let interfaceData={
  "path": "/user",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492ae94",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
    gender: '', // {string}   
    email: '', // {string}   
    code: '', // {string}   
    birth: '', // {number}   

 }
 */
put_user_id (params, options){
  let interfaceData={
  "path": "/user/{id}",
  "method": "PUT",
  "req_params": [
    {
      "_id": "603c8d1770f1844c8492ae95",
      "name": "id"
    }
  ],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492ae96",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 用户登陆
 * @path /auth/login
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    phone: '', // {string} *  
    password: '', // {string} *  
    uuid: '', // {string} *  
    code: '', // {string} *  

 }
 */
post_auth_login (params, options){
  let interfaceData={
  "path": "/auth/login",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492ae97",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 用户短信验证码登陆
 * @path /auth/verificationCodeLogin
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    phone: '', // {string} *  
    code: '', // {string} *  

 }
 */
post_auth_verificationCodeLogin (params, options){
  let interfaceData={
  "path": "/auth/verificationCodeLogin",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492ae98",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
get_auth_profile (params, options){
  let interfaceData={
  "path": "/auth/profile",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 用户获取验证码,验证码1小时有效
 * @path /auth/svgCaptacha
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
get_auth_svgCaptacha (params, options){
  let interfaceData={
  "path": "/auth/svgCaptacha",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取验证码
 * @path /auth/verificationCode
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    phone: '', // {string} * undefined 

 }
 */
get_auth_verificationCode (params, options){
  let interfaceData={
  "path": "/auth/verificationCode",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 找回密码
 * @path /auth/retrievePassword
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    code: '', // {string} * undefined 
    password: '', // {string} * undefined 
    phone: '', // {string} * undefined 

 }
 */
get_auth_retrievePassword (params, options){
  let interfaceData={
  "path": "/auth/retrievePassword",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取公司列表
 * @path /company
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
get__company (params, options){
  let interfaceData={
  "path": "/company",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 创建公司
 * @path /company
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    name: '', // {string} *  
    phone: '', // {string} *  
    username: '', // {string} *  
    password: '', // {string} *  
    permissions: '', // {array} *  

 }
 */
post__company (params, options){
  let interfaceData={
  "path": "/company",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492aea1",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
get_company_id (params, options){
  let interfaceData={
  "path": "/company/{id}",
  "method": "GET",
  "req_params": [
    {
      "_id": "603c8d1770f1844c8492aea2",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
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
put_company_id (params, options){
  let interfaceData={
  "path": "/company/{id}",
  "method": "PUT",
  "req_params": [
    {
      "_id": "603c8d1770f1844c8492aea3",
      "name": "id"
    }
  ],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492aea4",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
delete_company_id (params, options){
  let interfaceData={
  "path": "/company/{id}",
  "method": "DELETE",
  "req_params": [
    {
      "_id": "603c8d1770f1844c8492aea5",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取角色列表
 * @path /role
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
get__role (params, options){
  let interfaceData={
  "path": "/role",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 创建角色
 * @path /role
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    alias: '', // {string}   
    permissions: '', // {array} *  
    company: '', // {string} *  

 }
 */
post__role (params, options){
  let interfaceData={
  "path": "/role",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492aeaa",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
get_role_id (params, options){
  let interfaceData={
  "path": "/role/{id}",
  "method": "GET",
  "req_params": [
    {
      "_id": "603c8d1770f1844c8492aeab",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
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
put_role_id (params, options){
  let interfaceData={
  "path": "/role/{id}",
  "method": "PUT",
  "req_params": [
    {
      "_id": "603c8d1770f1844c8492aeac",
      "name": "id"
    }
  ],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492aead",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
delete_role_id (params, options){
  let interfaceData={
  "path": "/role/{id}",
  "method": "DELETE",
  "req_params": [
    {
      "_id": "603c8d1770f1844c8492aeae",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 管理员登陆
 * @path /admin-auth/login
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    username: '', // {string} *  
    password: '', // {string} *  

 }
 */
post_adminauth_login (params, options){
  let interfaceData={
  "path": "/admin-auth/login",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492aeaf",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 管理员获取信息
 * @path /admin-auth/profile
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
get_adminauth_profile (params, options){
  let interfaceData={
  "path": "/admin-auth/profile",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取菜单树
 * @path /menu/menutree
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
get_menu_menutree (params, options){
  let interfaceData={
  "path": "/menu/menutree",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取菜单列表
 * @path /menu
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
get__menu (params, options){
  let interfaceData={
  "path": "/menu",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 创建菜单
 * @path /menu
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    type: '', // {string} *  
    order: '', // {number}   
    title: '', // {string} *  
    remarks: '', // {string}   
    icon: '', // {string}   
    path: '', // {string} *  
    parent: '', // {string}   

 }
 */
post__menu (params, options){
  let interfaceData={
  "path": "/menu",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1770f1844c8492aeb4",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取菜单
 * @path /menu/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined 

 }
 */
get_menu_id (params, options){
  let interfaceData={
  "path": "/menu/{id}",
  "method": "GET",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aeb5",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 更新菜单
 * @path /menu/{id}
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
put_menu_id (params, options){
  let interfaceData={
  "path": "/menu/{id}",
  "method": "PUT",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aeb6",
      "name": "id"
    }
  ],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aeb7",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 删除菜单
 * @path /menu/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined 

 }
 */
delete_menu_id (params, options){
  let interfaceData={
  "path": "/menu/{id}",
  "method": "DELETE",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aeb8",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取按钮列表
 * @path /button
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
get__button (params, options){
  let interfaceData={
  "path": "/button",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 创建按钮
 * @path /button
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    name: '', // {string} *  
    remarks: '', // {string}   

 }
 */
post__button (params, options){
  let interfaceData={
  "path": "/button",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aebd",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
get_button_id (params, options){
  let interfaceData={
  "path": "/button/{id}",
  "method": "GET",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aebe",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 更新按钮
 * @path /button/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined 
    name: '', // {string}   
    remarks: '', // {string}   

 }
 */
put_button_id (params, options){
  let interfaceData={
  "path": "/button/{id}",
  "method": "PUT",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aebf",
      "name": "id"
    }
  ],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aec0",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
delete_button_id (params, options){
  let interfaceData={
  "path": "/button/{id}",
  "method": "DELETE",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aec1",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取接口列表
 * @path /api
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
get__api (params, options){
  let interfaceData={
  "path": "/api",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 创建接口
 * @path /api
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    method: '', // {string} *  
    verification: '', // {boolean} *  
    url: '', // {string} *  
    alias: '', // {string}   

 }
 */
post__api (params, options){
  let interfaceData={
  "path": "/api",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aec6",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
get_api_id (params, options){
  let interfaceData={
  "path": "/api/{id}",
  "method": "GET",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aec7",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
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
put_api_id (params, options){
  let interfaceData={
  "path": "/api/{id}",
  "method": "PUT",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aec8",
      "name": "id"
    }
  ],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aec9",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
delete_api_id (params, options){
  let interfaceData={
  "path": "/api/{id}",
  "method": "DELETE",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aeca",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取权限列表
 * @path /permission
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
get__permission (params, options){
  let interfaceData={
  "path": "/permission",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 创建权限
 * @path /permission
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    alias: '', // {string}   
    apis: '', // {array} *  
    menus: '', // {array} *  
    buttons: '', // {array} *  

 }
 */
post__permission (params, options){
  let interfaceData={
  "path": "/permission",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aecf",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
get_permission_id (params, options){
  let interfaceData={
  "path": "/permission/{id}",
  "method": "GET",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aed0",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
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
    buttons: '', // {array}   

 }
 */
put_permission_id (params, options){
  let interfaceData={
  "path": "/permission/{id}",
  "method": "PUT",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aed1",
      "name": "id"
    }
  ],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aed2",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
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
delete_permission_id (params, options){
  let interfaceData={
  "path": "/permission/{id}",
  "method": "DELETE",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aed3",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取权限列表
 * @path /user_permission
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
get__user_permission (params, options){
  let interfaceData={
  "path": "/user_permission",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title /file/upload
 * @path /file/upload
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
post_file_upload (params, options){
  let interfaceData={
  "path": "/file/upload",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aed8",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title /file/upload-exif
 * @path /file/upload-exif
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
post_file_uploadexif (params, options){
  let interfaceData={
  "path": "/file/upload-exif",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aed9",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title /file/signedUrlSync
 * @path /file/signedUrlSync
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {

 }
 */
post_file_signedUrlSync (params, options){
  let interfaceData={
  "path": "/file/signedUrlSync",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aeda",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 创建device
 * @path /device
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    name: '', // {string} *  

 }
 */
post__device (params, options){
  let interfaceData={
  "path": "/device",
  "method": "POST",
  "req_params": [],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aee0",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取device列表
 * @path /device
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
get__device (params, options){
  let interfaceData={
  "path": "/device",
  "method": "GET",
  "req_params": [],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 获取device
 * @path /device/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined 

 }
 */
get_device_id (params, options){
  let interfaceData={
  "path": "/device/{id}",
  "method": "GET",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aee5",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 更新device
 * @path /device/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined 

 }
 */
put_device_id (params, options){
  let interfaceData={
  "path": "/device/{id}",
  "method": "PUT",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aee6",
      "name": "id"
    }
  ],
  "req_headers": [
    {
      "required": "1",
      "_id": "603c8d1870f1844c8492aee7",
      "name": "Content-Type",
      "value": "application/json"
    }
  ],
  "req_body_type": "json"
};
  return request(interfaceData,params, options)
},
  

/**
 * @title 删除device
 * @path /device/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined 

 }
 */
delete_device_id (params, options){
  let interfaceData={
  "path": "/device/{id}",
  "method": "DELETE",
  "req_params": [
    {
      "_id": "603c8d1870f1844c8492aee8",
      "name": "id"
    }
  ],
  "req_headers": [],
  "req_body_type": "raw"
};
  return request(interfaceData,params, options)
},
  

const Ajv = require('ajv');

function  schemaValidator(schema, params) {
  try {
    const ajv = new Ajv({
      format: false,
      meta: false,
      schemaId: 'id'
    });
    let metaSchema = require('ajv/lib/refs/json-schema-draft-04.json');
    ajv.addMetaSchema(metaSchema);
    ajv._opts.defaultMeta = metaSchema.id;
    ajv._refs['http://json-schema.org/schema'] = 'http://json-schema.org/draft-04/schema';
    schema = schema || {
      type: 'object',
      title: 'empty object',
      properties: {}
    };
    const validate = ajv.compile(schema);
    let valid = validate(params);

    let message = '';
    if (!valid) {
      message += ajv.errorsText(validate.errors, { separator: '\n' });
    }

    return {
      valid: valid,
      message: message
    };
  } catch (e) {
    return {
      valid: false,
      message: e.message
    };
  }
};

function checkRequestParams(){}
  
function httpRequest(interfaceData, params, options){
  let  url=  interfaceData.path;
  let method = interfaceData.method;

  let isRestful = false;
  if(url.indexOf(':') > 0){
    isRestful = true;
  }else if(url.indexOf('{') > 0 && url.indexOf('}') > 0){
    isRestful = true;
  }

  if(isRestful){
    interfaceData.req_params.forEach(item=>{
      let val = params[item.name];
      if(!val){
        throw new Error('路径参数 ' + item.name + ' 不能为空')
      }
      url = url.replace(":" + item.name , val );
      url = url.replace("{" + item.name + "}", val );
      delete params[item.name]
    })
  }
const HTTP_METHOD = {
  GET: {
    request_body: false,
  },
  POST: {
    request_body: true,
  },
  PUT: {
    request_body: true,
  },
  DELETE: {
    request_body: true,
  },
  HEAD: {
    request_body: false,
  },
  OPTIONS: {
    request_body: false,
  },
  PATCH: {
    request_body: true,
  },
};

function request(baseinfo, options = {}) {
  let params = baseinfo.params;

  options = Object.assign(
    {},
    {
      url: baseinfo.url,
      method: baseinfo.method,
    },
    options,
  );

  if (HTTP_METHOD[baseinfo.method].request_body) {
    options.data = params;
  } else {
    options.params = params;
  }

  if (checkRequestParams && typeof checkRequestParams === 'function') {
    checkRequestParams(interfaceData, params);
  }

  return axios(options);
}
 
  return request({
    url,
    method, 
    params
  }, options)
  
}
  