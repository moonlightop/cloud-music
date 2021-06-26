
import request from './request';

/**
 * @param {method,url,data,params,withCredentials} config 
 */
//  /song/detail?ids=1833792929
export const requestSongByIds = (method,playload) => {
  const url = '/song/detail';

  return request({ 
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });
  

}


export const requestLyric = (method,playload) => {
  const url = '/lyric';

  return request({
    method,
    url,
    [method === "POST" ? "data" : "params"]: playload
  });
  
}


// 获取相似歌曲的信息
export const requestSimilarySong = (method,playload) => {
  const url = "/simi/song";
  return request({
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  })

}