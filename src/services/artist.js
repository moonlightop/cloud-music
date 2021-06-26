import request from './request';

/*
  playload: 
    area 、type
    initial: 按首字母索引查找参数
    limit=100
*/
export function requestArtistList({ area,type,limit=100,initial='' }) {
  const playload = { area,type,limit };

  let url = '/artist/list'; // 歌手分类列表
  if (area === -1 && type === 1) {
    url = "/top/artists";  // 推荐歌手中的热门歌手，offset limit
  }

  return request({
    url,
    method: 'GET',
    params: playload
  });
}