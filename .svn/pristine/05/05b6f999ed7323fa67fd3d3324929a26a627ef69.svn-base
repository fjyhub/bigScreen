'use strict'

import axios from 'axios'
import router from '../router'

import { Message } from 'element-ui'

const config = {
  // baseURL: process.env.NODE_ENV == 'development' ? 'http://192.168.5.121:8085' : 'http://youth-info.xicp.net:18758',
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
    // 'content-Type': 'multipart/form-data'
  },
  timeout: 60 * 1000 // Timeout
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  request => {
    let params = {}

    if (request.params) {
      Object.keys(request.params)
        .filter(key => !!request.params[key])
        .forEach(key => {
          params[key] = request.params[key]
        })
    } else {
      params = request.params
    }

    request.params = params || {}
    return request
  },
  err => Promise.reject(err)
)

// Add a response interceptor
_axios.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { code, message } = dataAxios
    // 根据 code 进行判断

    if (code === undefined) {
      // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
      return dataAxios
    } else {
      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (code) {
        case 200:
          // [ 示例 ] code === 0 代表没有错误
          return Promise.resolve(dataAxios)
        case 20001:
          // router.push('/login')
          break
        case 70010:
          return Promise.resolve(dataAxios)
        case 70015:
          return Promise.resolve(dataAxios)
        case 2:
          return Promise.resolve(dataAxios)
        case 401:
          router.go(0)
          return Promise.resolve(dataAxios)
        default:
          // 不是正确的 code
          Message.error(message)
          return Promise.resolve(dataAxios)
      }
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  }
)

export default _axios
