import axios from 'axios'

const baseURl = process.env.VUE_APP_SERVER_BASE_URL

const service = axios.create({
  baseURL: baseURl,
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error);
})

//  response拦截器
service.interceptors.response.use(response => {
  return response
})

export default service;