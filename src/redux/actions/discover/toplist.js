import { TopListType } from "@redux/constant";
import { requestPlayListDetail, requestToplistDetail } from "@services/toplist";

export const changeCurRankingUpdateFrequency = (curRankingUpdateFrequency) => ({
  type: TopListType.CHANGE_CUR_RANKING_UPDATE_FREQUENCY,
  curRankingUpdateFrequency
})

export const changeFeatureList = (featureList) => ({
  type: TopListType.CHANGE_FEATURE_LIST,
  featureList
})

export const changeMediaList = (mediaList) => ({
  type: TopListType.CHANGE_MEDIA_LIST,
  mediaList
})

export const getTopListDetail = () => {
  return async(dispatch) => {
    let res = await requestToplistDetail();
    if(res.code === 200) {
      dispatch(changeFeatureList(res.list.slice(0,4)));
      dispatch(changeMediaList(res.list.slice(4)));
    }

  };
}

export const changeSongList = (songList) => ({
  type: TopListType.CHANGE_SONG_LIST,
  songList
})

export const getPlayListDetail = (id) => {
  return async(dispatch) => {
    let res = await requestPlayListDetail('GET',{ id });
    if(res.code === 200) {
      dispatch(changeSongList(res.playlist));
    }

  };
}

