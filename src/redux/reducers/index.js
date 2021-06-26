
import { combineReducers } from 'redux-immutable';

import login from './login';
import recommend from './discover/recommend';
import toplist from './discover/toplist';
import playlist from './discover/playlist';
import djradio from './discover/djradio';
import album from './discover/album';
import artist from './discover/artist';
import player from './player';

export default combineReducers({
  login,
  recommend,
  toplist,
  playlist,
  djradio,
  album,
  artist,
  player,
})