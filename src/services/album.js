import request from "./request";

/**
 * @param {method,url,data,params,withCredentials} config 
 */
export const requestHotAlbum = (method,playload) => {
  const url = '/album/newest';

  return request({ 
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });
  
}

export const requestAllAlbum = (method,playload) => {
  const url = '/top/album';

  return request({
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  })
}