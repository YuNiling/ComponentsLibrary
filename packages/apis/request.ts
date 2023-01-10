import axios from 'axios';

//  创建一个axios实例
const service = axios.create({
  // baseURL: (window as any).SERVICE_BASE_API_URL,
  baseURL: 'http://127.0.0.1:7001/apis',
  timeout: 20000,
  withCredentials: true,
  headers: {
<<<<<<< HEAD
    'Content-Type': 'application/json',
    Accept: '*/*',
    'x-csrf-token': 'Mr4Q2hKmVMbsAhWE9YyIEmKN',
    'X-Requested-With': 'XMLHttpRequest',
=======
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    // Accept: '*/*',
    // 'x-csrf-token': 'Mr4Q2hKmVMbsAhWE9YyIEmKN',
    // 'X-Requested-With': 'XMLHttpRequest',
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
  },
});

// 请求拦截器，需要添加在请求头中加token
service.interceptors.request.use(
  (config) => {
<<<<<<< HEAD
    if (config.baseURL) {
      config.baseURL = config.baseURL;
    }
    if (config.headers) {
      config.headers = config.headers;
      // config.headers.post['x-csrf-token'] = 'Mr4Q2hKmVMbsAhWE9YyIEmKN';
    }
=======
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
>>>>>>> 410ec5cfcf005e23e799810ac52cc13d41d30208
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
