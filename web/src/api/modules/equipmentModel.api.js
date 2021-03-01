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
 * @title 获取设备型号列表
 * @path /equipmentModel
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
  get__equipmentModel (params, options) {
    const interfaceData = {
      path: '/equipmentModel',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建设备型号
 * @path /equipmentModel
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    brand: '', // {string}
    model: '', // {string}
    type: '', // {string}
    manufacturer: '', // {string}
    UAVHeight: '', // {number}
    UAVWidth: '', // {number}
    UAVLength: '', // {number}
    UAVWeight: '', // {number}
    wheelbase: '', // {number}
    remoteControlDistance: '', // {number}
    flightTime: '', // {number}
    horizontalFlightSpeed: '', // {number}
    verticalFlightSpeed: '', // {number}
    windResistance: '', // {string}

 }
 */
  post__equipmentModel (params, options) {
    const interfaceData = {
      path: '/equipmentModel',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '60334801aa63d11f2496d0e7',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取设备型号
 * @path /equipmentModel/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_equipmentModel_id (params, options) {
    const interfaceData = {
      path: '/equipmentModel/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '60334801aa63d11f2496d0e8',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 更新设备型号
 * @path /equipmentModel/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined
    brand: '', // {string}
    model: '', // {string}
    type: '', // {string}
    manufacturer: '', // {string}
    UAVHeight: '', // {number}
    UAVWidth: '', // {number}
    UAVLength: '', // {number}
    UAVWeight: '', // {number}
    wheelbase: '', // {number}
    remoteControlDistance: '', // {number}
    flightTime: '', // {number}
    horizontalFlightSpeed: '', // {number}
    verticalFlightSpeed: '', // {number}
    windResistance: '', // {string}

 }
 */
  put_equipmentModel_id (params, options) {
    const interfaceData = {
      path: '/equipmentModel/{id}',
      method: 'PUT',
      req_params: [
        {
          _id: '60334801aa63d11f2496d0e9',
          name: 'id'
        }
      ],
      req_headers: [
        {
          required: '1',
          _id: '60334801aa63d11f2496d0ea',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除设备型号
 * @path /equipmentModel/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_equipmentModel_id (params, options) {
    const interfaceData = {
      path: '/equipmentModel/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '60334801aa63d11f2496d0eb',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }
})
