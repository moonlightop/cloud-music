import { Map } from 'immutable';
import { TopListType } from '@redux/constant';

const initState = Map({
  curRankingUpdateFrequency: '',
  featureList: [],
  mediaList: [],
  songList: []

});


export default function toplist(preState=initState,action) {

  switch(action.type) {
    case TopListType.CHANGE_CUR_RANKING_UPDATE_FREQUENCY:
      return preState.set('curRankingUpdateFrequency',action.curRankingUpdateFrequency);
    case TopListType.CHANGE_FEATURE_LIST:
      return preState.set('featureList',action.featureList);
    case TopListType.CHANGE_MEDIA_LIST:
      return preState.set('mediaList',action.mediaList);
    case TopListType.CHANGE_SONG_LIST:
      return preState.set('songList',action.songList);
    default: 
      return preState;
  }

}