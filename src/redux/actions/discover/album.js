import { AlbumType } from "@redux/constant";
import { requestAllAlbum, requestHotAlbum } from "@services/album";

export const changeAllAlbum = (allAlbum) => ({
  type: AlbumType.CHANGE_ALL_ALBUM,
  allAlbum
})

export const getAllAlbum = ({ limit,offset }) => {
  return async (dispatch) => {
    let res = await requestAllAlbum('GET',{ limit,offset });
    if (res.code === 200) {
      dispatch(changeAllAlbum(res));
    }

  };
} 


export const changeHotAlbum = (hotAlbum) => ({
  type: AlbumType.CHANGE_HOT_ALBUM,
  hotAlbum
})

export const getHotAlbum = () => {
  return async (dispatch) => {
    let res = await requestHotAlbum('GET',{});
    // 热门数据仅展示10张
    if (res.code === 200) {
      dispatch(changeHotAlbum(res.albums.slice(0,10)));
    }

  };

}
