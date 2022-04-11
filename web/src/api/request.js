import instance from './axios'

export default function request(payload, options = {}) {
  const url = process.env.NODE_ENV === 'development'
    ? payload.devUrl + payload.path
    : '/nest_service' + payload.path

  return instance(Object.assign({}, {
    method: payload.method,
    url: url,
    data: payload.data,
  }, options))
}
