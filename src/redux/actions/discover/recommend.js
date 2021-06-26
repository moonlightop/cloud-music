
import { RecommendType } from '@redux/constant';
import { requestCarousel, requestNewAlbum, requestPersonalized, requestResidentSinger, requestTopList } from '@services/recommend';

export const changeCarousel = (carouselList) => ({ 
  type: RecommendType.GET_CAROUSEL, 
  carouselList 
});
export const getCarousel = () => {
  return async (dispatch) => {
    // ...异步事件
    const res = await requestCarousel('GET',{
      type: 0,
    })
    
    if(res.code === 200) {
      dispatch(changeCarousel(res.banners));
    }

  };

};


export const changePersonalized = (personalized) => ({ 
  type: RecommendType.GET_PERSONALIZED, 
  personalized 
});
export const getPersonalized = () => {
  return async (dispatch) => {
    const res = await requestPersonalized('GET',{
      limit: 8,
    });

    if(res.code === 200) {
      dispatch(changePersonalized(res.result));
    }

  };

};


export const changeNewAlbum = (newAlbum) => ({ 
  type: RecommendType.GET_NEW_ALBUM,
  newAlbum 
});
export const getNewAlbum = () => {
  return async (dispatch) => {
    let res = await requestNewAlbum('POST',{
      limit: '10',
    });
    if(res.code === 200) {
      dispatch(changeNewAlbum(res.albums));
    }

  };

}

// 榜单
export const changeUpList = (upList) => ({ 
  type: RecommendType.GET_UP_LIST,
  upList 
});
export const changeNewSongList = (newSongList) => ({ 
  type: RecommendType.GET_NEW_SONG_LIST,
  newSongList 
});
export const changeOriginList= (originList) => ({ 
  type: RecommendType.GET_ORIGIN_LIST,
  originList 
});

export const getRankingList = (id) => {
  return async (dispatch) => {
    let res = await requestTopList('GET',{ id });

    /*
      id = 19723756(飙升榜)
      id = 3779629(新歌榜)
      id = 2884035(原创榜单)
    */
    if(res.code === 200) {
      switch(id) {
        case 19723756:
          dispatch(changeUpList(res.playlist));
          break;
        case 3779629:
          dispatch(changeNewSongList(res.playlist));
          break;
        case 2884035:
          dispatch(changeOriginList(res.playlist));
          break;
        default:
          alert("暂时此函数仅支持 飙升榜 新歌榜 原创榜单");
      }
  
    }
    
  };

}


// 右侧栏
export const changeResidentSinger = (residentSinger) => ({ 
  type: RecommendType.GET_RESIDENT_SINGER,
  residentSinger 
});
export const getResidentSinger = (limit,cat) => {
  return async (dispatch) => {
    let res = await requestResidentSinger('GET',{
      limit,
      cat
    });
    
    if(res.code === 200) {
      dispatch(changeResidentSinger(res.artists));
    }
  
  };

}
