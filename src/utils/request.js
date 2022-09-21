import axios from "axios";
import store from '../store/index';
const BASEURL =
  process.env.NODE_ENV === "production" ? "" : "http://172.31.68.85:8000/api";
// const BASEURL = process.env.NODE_ENV === "production" ? "" : "/api";
const service = axios.create({
  baseURL: BASEURL,
  timeout: 10000,
  //   headers: { "X-Custom-Header": "foobar" },
});
// Add a request interceptor

service.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    if (store.state.app.Token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `JWT ${store.state.app.Token}`;
    }

    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
service.interceptors.response.use(
  function(response) {
    // Do something with response data
    let data = response.data;
    console.log(data);
    // if (data) {
    //   return Promise.reject(data);
    // }
    return response;
  },
  function(error) {
    // Do something with response error
    // console.log(error);
    return Promise.reject(error);
  }
);

export default service;
