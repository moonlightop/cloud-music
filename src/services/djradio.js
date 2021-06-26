
import request from './request';

/**
 * @param {method,url,data,params,withCredentials} config 
 */
export const requestCatelist = (method,playload) => {
  const url = '/dj/catelist';

  return request({
    url,
    method,
    [method === "POST" ? 'data' : 'params']: playload
  });

}

// type: 电台类型 - 可通过/dj/catelist获取每个分类的id对应此接口的type
export const requestRecommendType = (method,playload) => {
  const url = '/dj/recommend/type';

  return request({
    url,
    method,
    [method === "POST" ? 'data' : 'params']: playload
  });

}

// cateId：分类ID，可通过 /dj/category/recommend获取
// offset=0 limit=30
export const requestHotRadio = (method,playload) => {
  const url = '/dj/radio/hot';

  return request({
    url,
    method,
    [method === "POST" ? 'data' : 'params']: playload
  });

}