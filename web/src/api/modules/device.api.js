export default ({
                  service,
                  request,
                  serviceForMock,
                  requestForMock,
                  mock,
                  faker,
                  tools,
                }) => ({


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
  post__device(params, options) {
    let interfaceData = {
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
    return request(interfaceData, params, options)
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
  get__device(params, options) {
    let interfaceData = {
      "path": "/device",
      "method": "GET",
      "req_params": [],
      "req_headers": [],
      "req_body_type": "raw"
    };
    return request(interfaceData, params, options)
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
  get_device_id(params, options) {
    let interfaceData = {
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
    return request(interfaceData, params, options)
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
  put_device_id(params, options) {
    let interfaceData = {
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
    return request(interfaceData, params, options)
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
  delete_device_id(params, options) {
    let interfaceData = {
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
    return request(interfaceData, params, options)
  },
});
