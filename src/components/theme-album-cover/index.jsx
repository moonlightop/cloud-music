import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentSong } from '@redux/actions/player';

import { SetPitureSize } from '@utils/format-utils';

import ZHNavLink from '@components/navlink';

import { 
  ThemeAlbumCoverWrapper,
  THemeAlbumCoverPiture
} from './style';


export default memo(function ZHThemeAlbumCover(props) {
  // 展示的图片大小和信息
  const { 
    info,
    width = "118px",
    size = "100px",
  } = props; 

  const dispatch = useDispatch();
  const play = useCallback((songId) => {
    if (!songId) {
      alert('暂不支持该功能');
    } else {
      dispatch(getCurrentSong(songId)); // 如何获取到歌曲id呢
    }
  
  },[dispatch]);

  const picUrl = info.picUrl ? info.picUrl : info.coverImgUrl;

  // console.log(info.artist)

  return (
    <ThemeAlbumCoverWrapper 
      size={ size } 
      width={ width }
      className="sprite_02"
    >

      <THemeAlbumCoverPiture size={ size } width={ width }>
        <img 
          src={ SetPitureSize(picUrl ,parseInt(size)) } 
          alt={ info.name }
        />
        <ZHNavLink className="icon-ablum sprite_coverall" to={ "/album?id=" + info.id }>go</ZHNavLink>
        <button className="icon-play sprite_icon" onClick={ e => play() }>play</button>
      </THemeAlbumCoverPiture>

      <p className="song text-nowrap">
        <ZHNavLink to={ "/album?id=" + info.id }>{  info.name }</ZHNavLink>
      </p>
      <p className="artist text-nowrap">
        { 
          info.artists.length > 0 && info.artists.map((artist,index) => {
            return (
              <ZHNavLink to={ "/artist?id=" + artist.id } key={ artist.id }>
                { artist.name + ((index + 1) === info.artists.length ? '' : '/') }
              </ZHNavLink>
            );
          })
        }
      </p>

    </ThemeAlbumCoverWrapper>
  );

})
