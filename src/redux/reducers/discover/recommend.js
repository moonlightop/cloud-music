import Immutable from 'immutable';
import { RecommendType } from '@redux/constant';

const initState = Immutable.Map({
  carouselList: [],
  personalized: [],
  newAlbum: [],
  upList: [],
  newSongList: [],
  originList: [],
  residentSinger: [],

});

export default function recommend(preState=initState,action) {

  switch(action.type) {
    case RecommendType.GET_CAROUSEL:
      return preState.set('carouselList',action.carouselList);  
    case RecommendType.GET_PERSONALIZED:
      return preState.set('personalized',action.personalized);
    case RecommendType.GET_NEW_ALBUM:
      return preState.set('newAlbum',action.newAlbum);
    case RecommendType.GET_UP_LIST:
      return preState.set('upList',action.upList);
    case RecommendType.GET_NEW_SONG_LIST:
      return preState.set('newSongList',action.newSongList);
    case RecommendType.GET_ORIGIN_LIST:
      return preState.set('originList',action.originList);
    case RecommendType.GET_RESIDENT_SINGER:
      return preState.set('residentSinger',action.residentSinger);
    default: 
      return preState;
  }

}