import axios from "axios";
import Vue from "vue";
import CONFIG from "@/config";

// axios.defaults.baseURL = "http://localhost:7331/api/v1";
axios.defaults.baseURL = CONFIG.BASE_SERVER + CONFIG.BASE_API;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

// 验证 request 拦截器
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("OAUTH_JWT_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

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
    axios.post(url, params).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error.data);
    })
  })
}