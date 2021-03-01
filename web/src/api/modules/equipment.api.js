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
 * @title 获取设备列表
 * @path /equipment
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__equipment (params, options) {
    const interfaceData = {
      path: '/equipment',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建设备
 * @path /equipment
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    code: '', // {string}
    brand: '', // {string}
    model: '', // {string}
    type: '', // {string}
    status: '', // {string}
    maximumFlightSpeed: '', // {string}
    operatingRadius: '', // {string}
    flightTime: '', // {string}
    purchaseTime: '', // {string}
    purchaser: '', // {string}

 }
 */
  post__equipment (params, options) {
    const interfaceData = {
      path: '/equipment',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fade3d1d744053e74cbd79f',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取设备
 * @path /equipment/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_equipment_id (params, options) {
    const interfaceData = {
      path: '/equipment/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fade3d1d744053e74cbd7a0',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新设备
 * @path /equipment/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    code: '', // {string}
    brand: '', // {string}
    model: '', // {string}
    type: '', // {string}
    status: '', // {string}
    maximumFlightSpeed: '', // {string}
    operatingRadius: '', // {string}
    flightTime: '', // {string}
    purchaseTime: '', // {string}
    purchaser: '', // {string}

 }
 */
  put_equipment_id (params, options) {
    const interfaceData = {
      path: '/equipment/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '5fade3d1d744053e74cbd7a1',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '5fade3d1d744053e74cbd7a2',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除设备
 * @path /equipment/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_equipment_id (params, options) {
    const interfaceData = {
      path: '/equipment/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5fade3d1d744053e74cbd7a3',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }

})
