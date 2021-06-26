import { PlayerType } from "@redux/constant";
import { requestLyric, requestSimilarySong, requestSongByIds } from "@services/player";
import { formatLyrics } from '@utils/format-utils';
import { getRandomIndex } from '@utils/getRandomIndex';


export const changeIsPlay = (isPlay) => ({
  type: PlayerType.CHANGE_IS_PLAY,
  isPlay
})
export const changeOperatorTip = (operatorTip) => ({
  type: PlayerType.CHANGE_OPERATOR_TIP,
  operatorTip
})

export const changeCurrentSong = (currentSong) => ({ 
  type: PlayerType.GET_CURRENT_SONG, 
  currentSong 
});
export const changeCurrentSongIndex = (currentSongIndex) => ({
  type: PlayerType.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
});
export const changePlayList = (playList) => ({
  type: PlayerType.CHANGE_PLAY_LIST,
  playList
})

export const changeCurrentLyricIndex = (currentLyricIndex) => ({
  type: PlayerType.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
});
export const changeLyrics = (lyrics) => ({
  type: PlayerType.CHANGE_LYRICS,
  lyrics
});

export const delSong = (id) => {
  return (dispatch,getState) => {
    // 1. 在播放列表中寻找该歌曲
    const playList = getState().getIn(['player','playList']);
    const delSongIndex = playList.findIndex(song => {
      return id === song.id
    });

    // 2. 删掉
    const newPlayList = [ ...playList ];
    newPlayList.splice(delSongIndex,1);
    dispatch(changePlayList(newPlayList));

  };

}

// 抽取获取歌词信息的公共函数
const getCurrentLyrics = async (dispatch,id) => {
  const lyricsRes = await requestLyric('GET',{ id });
  if(lyricsRes.code === 200) {
    const lyrics = formatLyrics(lyricsRes.lrc.lyric);

    dispatch(changeLyrics(lyrics));
    // dispatch(changeCurrentLyricIndex(0));
  
  }
};

/*
  play: 根据歌曲id获取并播放歌曲
  addToPlayList: 根据歌曲id获取然后添加到播放列表中，但不播放
*/
export const getCurrentSong = (ids,type='play') => {
  return async (dispatch,getState) => {
    // 1. 判断播放列表中是否函数该歌曲
    const playList = getState().getIn(['player','playList']);
    const songIndex = playList.findIndex(song => {
      return song.id === parseInt(ids);
    });

    if(songIndex !== -1) {
      // 2. 播放列表中已经有该歌曲 
      if(type === 'play') {
        // 需要播放
        dispatch(changeCurrentSongIndex(songIndex));
        dispatch(changeCurrentSong(playList[songIndex]));
      }

    }else{    
      // 2. 没有此歌曲，则根据id获取该歌曲
      let res = await requestSongByIds('GET',{ ids });
      if(res.code === 200) {
        const curSong = res.songs[0];
        if(type === 'play') {
          // 2. 成功获取后，修改currentSong 、currentSongIndex 、playList
          dispatch(changeCurrentSongIndex(playList.length)); // 放在最后！
          dispatch(changeCurrentSong(curSong));
        }
        dispatch(changePlayList([ ...playList,curSong ])); // 防止redux不更新，所以返回新对象
      }

    }

    // 3. 获取该歌曲的歌词
    if(type === 'play') getCurrentLyrics(dispatch,ids);

  };

}

export const getNextSong = (indexOffset,playWay) => {
  return (dispatch,getState) => {
    // player是一个immutable对象
    const playList = getState().getIn(['player','playList']);
    const currentSongIndex = getState().getIn(['player','currentSongIndex']);
    let nextIndex = -1;

    switch(playWay) {
      case '随机':
        nextIndex = getRandomIndex(playList.length,currentSongIndex);
        break;
      default:
        // 单曲循环 | 顺序
        nextIndex = currentSongIndex + indexOffset;
        if(nextIndex < 0) nextIndex = playList.length - 1;
        else if(nextIndex === playList.length) nextIndex = 0;
    }    
    // console.log(nextIndex);

    dispatch(changeCurrentSongIndex(nextIndex));
    dispatch(changeCurrentSong(playList[nextIndex]));
    
    // 获取下一首歌曲的歌词
    getCurrentLyrics(dispatch,playList[nextIndex].id);

  };

}


export const changeSimiSongList = (simiSongList) => ({
  type: PlayerType.GET_SIMI_SONG_LIST,
  simiSongList
})

export const getSimiSongList = (id) => {
  return async (dispatch) => {
    let res = await requestSimilarySong('GET',{ id });
    if(res.code === 200) {
      dispatch(changeSimiSongList(res.songs));

    }
  };

}
