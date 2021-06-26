import { AlbumType } from '@redux/constant';
import { Map } from 'immutable';

const initState = Map({
  hotAlbum: [],
  allAlbum: {}
});

export default function album(preState=initState,action) {

  switch(action.type) {
    case AlbumType.CHANGE_HOT_ALBUM:
      return preState.set('hotAlbum',action.hotAlbum);
    case AlbumType.CHANGE_ALL_ALBUM:
      return preState.set('allAlbum',action.allAlbum);
    default:
      return preState;
  }

}