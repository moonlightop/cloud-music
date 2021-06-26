import Immutable from 'immutable';
import { PlayerType } from '@redux/constant';

// ?ids=1833792929
const initState = Immutable.Map({
  isPlay: false,
  operatorTip: '',
  currentSong: {},
  currentSongIndex: 0,
  playList: [],
  lyrics: [],
  currentLyricIndex: 0,
  simiSongList: [],
});

export default function player(preState=initState,action) {
  // console.log(preState);

  switch(action.type) {
    case PlayerType.CHANGE_IS_PLAY:
      return preState.set('isPlay',action.isPlay);
    case PlayerType.CHANGE_OPERATOR_TIP:
      return preState.set('operatorTip',action.operatorTip);
    case PlayerType.CHANGE_CURRENT_SONG_INDEX:
      return preState.set('currentSongIndex',action.currentSongIndex);
    case PlayerType.GET_CURRENT_SONG:
      return preState.set('currentSong',action.currentSong);
    case PlayerType.CHANGE_PLAY_LIST:
      return preState.set('playList',action.playList);
    case PlayerType.CHANGE_LYRICS:
      return preState.set('lyrics',action.lyrics);
    case PlayerType.CHANGE_CURRENT_LYRIC_INDEX:
      return preState.set('currentLyricIndex',action.currentLyricIndex);
    case PlayerType.GET_SIMI_SONG_LIST:
      return preState.set('simiSongList',action.simiSongList);
    default: 
      return preState;
  }

}