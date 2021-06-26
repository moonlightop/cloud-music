
import request from './request';

/**
 * @param {method,url,data,params,withCredentials} config 
 */

//  type: 0,：请求轮播图数据
export const requestCarousel = (method,playload) => {
  const url = '/banner';

  return request({ 
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });
  
}

/*
  limit: 8 - 请求8条数据
*/
export const requestPersonalized = (method,playload) => {
  const url = '/personalized';

  return request({
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });
}

/*
  limit: '10' - 请求10条数据
*/
export const requestNewAlbum = (method,playload) => {
  const url = '/top/album';

  return request({
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });

}

/*
  id = 19723756(飙升榜)
  id = 3779629(新歌榜)
  id = 2884035(原创榜单)
*/
export const requestTopList = (method,playload) => {
  const url = '/playlist/detail';

  return request({
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });

}

// 入驻歌手 - 文档中暂未找到数据源，因此用其它数据进行模仿
export const requestResidentSinger = (method,playload) => {
  const url = '/artist/list';

  return request({
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,

  });

}
