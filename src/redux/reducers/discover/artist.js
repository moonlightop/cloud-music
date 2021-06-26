import { ArtistType } from '@redux/constant';
import { Map } from 'immutable';

const initState = Map({
  currentArea: -1,
  currentType: {
    name: "推荐歌手",
    type: 1
  },
  artistList: []
  
});

export default function artist (preState=initState,action) {
  switch(action.type) {
    case ArtistType.CHANGE_ARTIST_LIST:
      return preState.set('artistList',action.artistList);
    case ArtistType.CHANGE_CURRENT_AREA:
      return preState.set('currentArea',action.currentArea);
    case ArtistType.CHANGE_CURRENT_TYPE:
      return preState.set('currentType',action.currentType);
    default:
      return preState;
  }
}