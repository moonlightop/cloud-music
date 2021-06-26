import { PlayListType } from '@redux/constant';
import { Map } from 'immutable';

const initState = Map({
  playTagList: {},
  topPlayList: {}

});

export default function playlist(preState=initState,action) {

  switch(action.type) {
    case PlayListType.CHANGE_PLAY_TAG_LIST:
      return preState.set('playTagList',action.playTagList);
    case PlayListType.CHANGE_TOP_PLAY_LIST:
      return preState.set('topPlayList',action.topPlayList);
    default:
      return preState;
  }

}