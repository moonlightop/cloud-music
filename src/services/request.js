
import originAxios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

/**
 * @param {method,url,data,params,withCredentials} config 
 */
export default function request(config) {

  return new Promise((resolve,reject) => {
    // 1. 创建axios实例
    const instance = originAxios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    });

    // 2. 创建拦截器
    instance.interceptors.request.use(request => {
      // loading组件\ 预加载 \ token验证(权限) \ 请求参数序列化处理 ...

      return request;
    },err => {
      return err;
    });

    instance.interceptors.response.use(response => {
      return response.data;
    },err => {
      return err;
    });

    config.timestamp = new Date().getTime();
    // 3. 发送请求
    instance(config).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });

  });

}