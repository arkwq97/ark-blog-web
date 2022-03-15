import axios from 'axios'

//const testBaseURL = 'http://120.79.160.95:8080';
const baseURl = 'http://localhost:3000'

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