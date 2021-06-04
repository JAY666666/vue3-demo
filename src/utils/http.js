import axios from "axios";
import { getToken } from "@/utils/auth";

const instance = axios.create({
  baseURL: "http://localhost:2333",
  timeout: 5000,
});

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    let token = getToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
