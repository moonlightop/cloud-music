
// login - 比较方便一些
const HIDELOGIN = 'login/hide-login';
const SELECT_PRO = 'login/select-pro';
const AUTO_LOGIN = 'login/auto-login';
const SHOW_TOAST = 'login/show-toast';
const SET_CONTENT = 'login/set-content';
export const loginType = {
  HIDELOGIN,
  SELECT_PRO,
  AUTO_LOGIN,
  SHOW_TOAST,
  SET_CONTENT,
};

// discover/recommend - 不是非必须用redux，防止切换路由后需要重新请求数据
const GET_CAROUSEL = 'discover/recommend/get-carousel';
const GET_PERSONALIZED = 'discover/recommend/get-personalized';
const GET_NEW_ALBUM = 'discover/recommend/get-new-album';

const GET_UP_LIST = 'discover/recommend/up-list';
const GET_NEW_SONG_LIST = 'discover/recommend/new-song-list';
const GET_ORIGIN_LIST = 'discover/recommend/origin-list';
const GET_RESIDENT_SINGER = 'discover/recommend/resident-singer';

export const RecommendType = {
  GET_CAROUSEL,
  GET_PERSONALIZED,
  GET_NEW_ALBUM,
  GET_UP_LIST,
  GET_NEW_SONG_LIST,
  GET_ORIGIN_LIST,
  GET_RESIDENT_SINGER
};


// player
const CHANGE_IS_PLAY = 'player/change-is-play'
const GET_CURRENT_SONG = 'player/get-current-song';
const CHANGE_CURRENT_SONG_INDEX = 'player/change-current-song-index';
const CHANGE_PLAY_LIST = 'player/change-play-list';
const CHANGE_LYRICS = 'player/change-lyrics';
const CHANGE_CURRENT_LYRIC_INDEX = 'player/change-current-lyric-index';
const GET_SIMI_SONG_LIST = 'player/get-simi-song-list';
const CHANGE_OPERATOR_TIP = 'player/change-operator-tip';

export const PlayerType = {
  CHANGE_IS_PLAY,
  GET_CURRENT_SONG,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_LIST,
  CHANGE_LYRICS,
  CHANGE_CURRENT_LYRIC_INDEX,
  GET_SIMI_SONG_LIST,
  CHANGE_OPERATOR_TIP
  
}


// toplist
const CHANGE_FEATURE_LIST = 'discover/toplist/change-feature-list';
const CHANGE_MEDIA_LIST = 'discover/toplist/change-media-list';
const CHANGE_SONG_LIST = 'discover/toplist/change-song-list';
const CHANGE_CUR_RANKING_UPDATE_FREQUENCY = 'discover/toplist/change-cur-ranking-update-frequency';


export const TopListType = {
  CHANGE_FEATURE_LIST,
  CHANGE_MEDIA_LIST,
  CHANGE_SONG_LIST,
  CHANGE_CUR_RANKING_UPDATE_FREQUENCY
}


// playlist
const CHANGE_PLAY_TAG_LIST = 'discover/playlist/change-play-tag-list';
const CHANGE_TOP_PLAY_LIST = 'discover/playlist/change-top-top-list';

export const PlayListType = {
  CHANGE_PLAY_TAG_LIST,
  CHANGE_TOP_PLAY_LIST
}

// catelist
const CHANGE_CATE_LIST = 'discover/djradio/change-cate-list';
const CHANGE_CUR_RADIO_TYPE = 'discover/djradio/change-cur-radio-type';
const CHANGE_EXCELLENT_RADIOS = 'discover/djradio/change-excellent-radios';
const CHANGE_RADIO_RANKING = 'discover/djradio/change-radio-ranking';

export const DjRadioType = {
  CHANGE_CATE_LIST,
  CHANGE_CUR_RADIO_TYPE,
  CHANGE_EXCELLENT_RADIOS,
  CHANGE_RADIO_RANKING

}


// album
const CHANGE_HOT_ALBUM = 'discover/album/change-hot-album';
const CHANGE_ALL_ALBUM = 'discover/album/change-all-album';

export const AlbumType = {
  CHANGE_HOT_ALBUM,
  CHANGE_ALL_ALBUM
}

// artist
const CHANGE_CURRENT_AREA = 'artist/change-current-area';
const CHANGE_CURRENT_TYPE = 'artist/change-current-type';
const CHANGE_ARTIST_LIST = 'artist/change-artist-list';

export const ArtistType = {
  CHANGE_CURRENT_AREA,
  CHANGE_CURRENT_TYPE,
  CHANGE_ARTIST_LIST
}