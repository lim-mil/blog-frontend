import axios from "axios";
import Vue from "vue";
import QS from "qs"

axios.defaults.baseURL = "http://localhost:7331/api/v1";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

// 验证 request 拦截器
// axios.interceptors.request.use()

// 验证 response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          break;
      }
    }

  }
)

Vue.prototype.$http = axios

/**
 * 封装 get 请求
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error.data);
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params)).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error.data);
    })
  })
}