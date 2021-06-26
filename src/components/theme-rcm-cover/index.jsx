import React, { memo,useCallback } from 'react';
// import { useDispatch } from 'react-redux';

// import { getCurrentSong } from '@redux/actions/player';
import { SetPitureSize,CalcPlayCount } from '@utils/format-utils';

import ZHNavLink from '@components/navlink';

import { ThemeCoverWrapper } from './style';

export default memo(function ZHThemeRcmCover(props) {
  const { themeInfo } = props;

  // const dispatch = useDispatch();
  const play = useCallback(() => {
    alert('暂未开发');
    // dispatch(getCurrentSong()) // 如何获取到相应的歌曲id呢？不知道
  
  },[]);

  const picUrl = themeInfo.picUrl ? themeInfo.picUrl : themeInfo.coverImgUrl;

  
  return (
    <ThemeCoverWrapper>
      <div className="piture">
        <img src={SetPitureSize(picUrl,140)} alt={themeInfo.name}/>
        <ZHNavLink className="cover-bg sprite_cover" 
           to={"/playlist?id=" + themeInfo.id}
           title={themeInfo.name}>
          cover-bg
        </ZHNavLink>
        <div className="bottom sprite_cover">
          <div className="left">
            <i className="icon-headset sprite_icon"></i>
            <span className="play-count">{CalcPlayCount(themeInfo.playCount)}</span>
          </div>
          <button className="icon-play sprite_icon" onClick={play}>play</button>
        </div>
      </div>
      <p className="desc">
        <ZHNavLink to={"/playlist?id=" + themeInfo.id} >{themeInfo.name}</ZHNavLink>
      </p>
    </ThemeCoverWrapper>
  )
})
