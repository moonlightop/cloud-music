import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getCurrentSong, changeOperatorTip } from '@redux/actions/player'
import { SetPitureSize } from '@utils/format-utils';

import ZHNavLink from '@components/navlink';

import {
  ThemeTopListCoverWrapper,
  ThemeTopListCoverHeader,
  ThemeTopListCoverSongList,
  ThemeTopListCoverFooter
} from './style';

export default memo(function ZHThemeTopListCover(props) {
  
  const { info,rankingId,rankingName } = props;
  const { tracks } = info;

  const dispatch = useDispatch();
  const { upList,newSongList,originList } = useSelector(state => ({
    upList: state.getIn(['recommend','upList']),
    newSongList: state.getIn(['recommend','newSongList']),
    originList: state.getIn(['recommend','originList'])

  }), shallowEqual);


  const play = useCallback((songId,type="play") => {
    if(!songId) {
      if(rankingName === 'upList') {
        songId = upList.tracks[0].id;
      } else if(rankingName === 'newSongList') {
        songId = newSongList.tracks[0].id;
      } else if(rankingName === 'originList') {
        songId = originList.tracks[0].id;
      }
    }
    dispatch(changeOperatorTip(type));
    dispatch(getCurrentSong(songId,type)); // 如何获取到歌曲id呢
  
  },[dispatch,upList,newSongList,originList,rankingName]);


  return (
    <ThemeTopListCoverWrapper>

      <ThemeTopListCoverHeader className="header">
        <div className="piture">
          { info.coverImgUrl && <img src={SetPitureSize(info.coverImgUrl,80)} alt={info.name}/> }
          <span className="shadow sprite_coverall">go</span>
        </div>
        <div className="title">
          <span className="name">
            <h3>{info.name}</h3>
          </span>
          <span className="icon-play sprite_02" onClick={e => play()}></span>
          <span className="icon-fac sprite_02" onClick={e => play(null,"addToPlayList")}></span>
        </div>
      </ThemeTopListCoverHeader>

      <ThemeTopListCoverSongList className="song-list">
        {
          tracks && tracks.length > 0 && tracks.slice(0,10).map((track,index) => {
            return (
              <li key={track.id}>
                <div className="song-desc">
                  <span className="song-index">{index + 1}</span>
                  <ZHNavLink to={"/song?id=" + track.id} className="song-name">{track.name}</ZHNavLink>
                </div>
                <div className="icon">
                <span className="icon-play sprite_02" onClick={e => play(track.id)}></span>
                <span className="icon-add sprite_icon2" onClick={e => play(track.id,'addToPlayList')}></span>
                <span className="icon-fac sprite_02"></span>
                </div>
              </li>
            );
          })
        }
      </ThemeTopListCoverSongList>

      <ThemeTopListCoverFooter>
        <ZHNavLink to={"/discover/toplist?id=" + rankingId} >查看全部&gt;</ZHNavLink>
      </ThemeTopListCoverFooter>

    </ThemeTopListCoverWrapper>
  )
})
