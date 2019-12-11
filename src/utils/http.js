import axios from 'axios'
import router from '@/router'
import baseUrl from '@/api/baseUrl.js'

// 跨域
axios.defaults.withCredentials = true
//设置不同环境的baseUrl
axios.defaults.baseURL = baseUrl.apiBaseUrl
axios.defaults.timeout = 100000

// request拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// 控制 返回 401 时的弹出框次数
let isMultiEvent = false

// respone拦截器
axios.interceptors.response.use(
  response => {
    /**
     * code为非0时，返回错误信息 与后端约定code值
     */
    const res = response.data
    if (res.resCode && res.resCode !== 0) {
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  error => {
    // 请求无返回 超时/网络错误
    if (!error.response) {
      if (!isMultiEvent) {
        alert("请求失败，请检查网络或服务器状态")
        isMultiEvent = true
        setTimeout(() => {
          isMultiEvent = false
        }, 3000)
      }
      // router.replace({
      //   name: 'home',
      //   query: { redirect: router.currentRoute.name }
      // })
    } else {
      switch (error.response.status) {
        case 401:
          console.log('401')
          if (!isMultiEvent) {
            alert("登录超时，请重新登录")
            /**
             * 处理登录返回的情况
             */
            // 普通401拦截直接返回到登录页面
            router.push({ name: 'home' })
            isMultiEvent = true
            setTimeout(() => {
              isMultiEvent = false
            }, 3000)
          }
          break
        case 500:
          console.log('500')
          break
        default:
          console.log("输出错误信息")
          break
      }
    }
    return Promise.reject(error)
  }
)

export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: `${url}`,
    data: params
  });
}
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${url}`,
    data: params
  });
}
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${url}`,
    data: params
  });
}
export const deleteRequest = (url, params) => {
  return axios({
    method: 'delete',
    url: `${url}`,
    data: params
  });
}
