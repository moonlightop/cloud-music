import request from './request';

/**
 * @param {method,url,data,params,withCredentials} config 
 */

// 热门歌单分类标签 - 暂时感觉没用
export const requestHotPlayList = (method,playload) => {
  const url = '/playlist/hot';

  return request({ 
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });

}

// 全部歌单分类标签
export const requestPlayTagList = (method,playload) => {
  const url = '/playlist/catlist';

  return request({ 
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });

}

// 根据参数选获取某个标签的详细内容
/**
 * @param { order='hot' , cat=全部, limit=50, offset=-1 } playload 
 */
export const requestTopPlayList = (method,playload) => {
  const url = '/top/playlist';

  return request({ 
    method,
    url,
    [method === "POST" ? 'data' : 'params']: playload,
  });

} 