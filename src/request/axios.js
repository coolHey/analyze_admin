import axios from "axios";
import router from "../router";
const service = axios.create({
  // 环境变量，需要在.env文件中配置
  baseURL: '182.0.0.1:8080',
  // 超时时间暂定5s
  timeout: 5000,
});

service.interceptors.request.use(
  async config => {
    config.headers.token = sessionStorage.getItem('token')
    return config
  },
  error => {
    return Promise.error(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },

  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 500:
          break
        case 403:
          router.push('/login')
      }
      return Promise.reject(error.response)
    }
  }
)

export const Request = (url, options = {}) => {
  let method = options.method || 'get'
  let params = options.params || {}
  if (method === 'get' || method === 'GET') {
    return new Promise((resolve, reject) => {
      service.get(url, { params: params }).then(res => {
        if (res && res.dara) {
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      service.post(url, params).then(res => {
        if (res && res.data) {
          resolve(res.data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}