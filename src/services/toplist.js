import request from './request';

/**
 * @param {method,url,data,params,withCredentials} config 
 */
// 获取所有榜单
export const requestToplistDetail = (method,playload) => {
  const url = '/toplist/detail';
  return request({
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload
  })
}


// 根据id获取榜单对应的歌曲信息
export const requestPlayListDetail = (method,playload) => {
  const url = '/playlist/detail';
  return request({ 
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload
  });

}