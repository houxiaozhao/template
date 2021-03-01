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
 * @title 获取规划列表
 * @path /plan
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__plan (params, options) {
    const interfaceData = {
      path: '/plan',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 创建规划
 * @path /plan
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    day: '', // {number}  时间戳
    name: '', // {string}
    type: '', // {string}
    isRepeat: '', // {boolean}
    recurOption: '', // {object}
    company: '', // {string}

 }
 */
  post__plan (params, options) {
    const interfaceData = {
      path: '/plan',
      method: 'POST',
      req_params: [],
      req_headers: [
        {
          required: '1',
          _id: '5fb3331de8c8e324d8480ec5',
          name: 'Content-Type',
          value: 'application/json'
        }
      ],
      req_body_type: 'json'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取规划
 * @path /plan/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_plan_id (params, options) {
    const interfaceData = {
      path: '/plan/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fb3331de8c8e324d8480ec6',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取作业列表
 * @path /task
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    sort: '', // {string}  undefined
    search: '', // {string}  undefined
    page: '', // {string}  undefined

 }
 */
  get__task (params, options) {
    const interfaceData = {
      path: '/task',
      method: 'GET',
      req_params: [],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除任务
 * @path /task/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  delete_task_id (params, options) {
    const interfaceData = {
      path: '/task/{id}',
      method: 'DELETE',
      req_params: [
        {
          _id: '5fbb282ff86b0f15b444d942',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },
  /**
 * @title 开始分析
 * @path /task/startAnalysis/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_startAnalysis_id (params, options) {
    const interfaceData = {
      path: '/task/startAnalysis/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fb4dcd5e8c8e324d8480f35',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 重新开始分析
 * @path /task/restartAnalysis/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_restartAnalysis_id (params, options) {
    const interfaceData = {
      path: '/task/restartAnalysis/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fbe004eaf9c376e843bc8f8',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 删除任务标注,重新开始标注
 * @path /task/resetAnnotations/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_resetAnnotations_id (params, options) {
    const interfaceData = {
      path: '/task/resetAnnotations/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fbf1214af9c376e843bca03',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 分析完成
 * @path /task/endAnalysis/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_endAnalysis_id (params, options) {
    const interfaceData = {
      path: '/task/endAnalysis/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fb4dcd5e8c8e324d8480f36',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取分析任务cvat创建状态
 * @path /task/cvatTaskStatus/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_cvatTaskStatus_id (params, options) {
    const interfaceData = {
      path: '/task/cvatTaskStatus/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fbe0150af9c376e843bc97c',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  },

  /**
 * @title 获取任务的图片gps位置
 * @path /task/getTaskImageLocation/{id}
 * @param {Object} params 请求参数
 * @param {Object} options 请求配置
 * @info params
 {
    id: '', // {string}  undefined

 }
 */
  get_getTaskImageLocation_id (params, options) {
    const interfaceData = {
      path: '/task/getTaskImageLocation/{id}',
      method: 'GET',
      req_params: [
        {
          _id: '5fcf305fd23e753c44afc064',
          name: 'id'
        }
      ],
      req_headers: [],
      req_body_type: 'raw'
    }
    return request(interfaceData, params, options)
  }
})
