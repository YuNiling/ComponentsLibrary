import axios from 'axios';

//  创建一个axios实例
const service = axios.create({
  // baseURL: (window as any).SERVICE_BASE_API_URL,
  baseURL: 'http://127.0.0.1:7001/apis',
  timeout: 20000,
  withCredentials: true,
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    // Accept: '*/*',
    // 'x-csrf-token': 'Mr4Q2hKmVMbsAhWE9YyIEmKN',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
});

// 请求拦截器，需要添加在请求头中加token
service.interceptors.request.use(
  (config) => {
    // if (config.baseURL) {
    //   config.baseURL = config.baseURL;
    // }
    // if (config.headers) {
    //   config.headers = config.headers;
    //   // config.headers.post['x-csrf-token'] = 'Mr4Q2hKmVMbsAhWE9YyIEmKN';
    // }
    // if (config.data) {
    //   config.data = config.data;
    // }
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
