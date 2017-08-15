import axios from 'axios'
// import config from '@/config.conf'
import router from '@/router'
import { storage } from '@/util'
import { Toast } from 'mint-ui'

// 所有请求的Base Url
axios.defaults.baseURL = config.baseUrl

// 每个请求加上Token
axios.interceptors.request.use(config => {
  config.headers['Token'] = storage.getToken()
  return config
})

// 更新Token
axios.interceptors.response.use(response => {
  if (response.data != null) {
    storage.setToken(response.data.token)
  }
  return response
})

// 处理服务端status错误
axios.interceptors.response.use(response => {
  if (typeof response.data.status !== 'number') {
    return Promise.reject({
      message: '服务端返回状态不是数字'
    })
  }

  if (response.data.status !== 1) {
    if (response.data.error != null) {
      return Promise.reject(response.data.error)
    } else {
      return Promise.reject({
        message: '服务端返回状态不为1，但并没有给出具体错误'
      })
    }
  }
  return response.data.result
})

// 根据服务端状态，踢出用户
axios.interceptors.response.use(undefined, error => {
  const response = error.response

  if (response != null) {
    // 用户未登录
    if (response.status === 401) {
      router.replace({
        path: '/login',
        query: { redirect: router.currentRoute.fullPath }
      })
      return Promise.reject({
        handled: true,
        message: '请重新登录'
      })
    }

    // Token过期
    if (response.status === 403) {
      return Promise.reject({
        message: '长时间未操作，请重新进入'
      })
    }

    // 服务端有告诉是什么错误
    if (response.data != null && response.data.error != null) {
      return Promise.reject(response.data.error)
    }
  }

  // 未知错误
  return Promise.reject(error)
})

export default class Api {
  static install(Vue) {
    Object.defineProperty(Vue.prototype, '$api', {
      get() { return api }
    })
  }
}
