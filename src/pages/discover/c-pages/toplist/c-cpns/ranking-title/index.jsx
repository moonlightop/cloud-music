import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import ZHControl from '@components/control';

import {
  RankingTitleWrapper
} from './style';
import { formatMonthDay, SetPitureSize } from '@utils/format-utils';



export default memo(function ZHRankingTitle(props) {

  const { songList,curRankingUpdateFrequency } = useSelector(state => ({
    songList: state.getIn(['toplist','songList']),
    curRankingUpdateFrequency: state.getIn(['toplist','curRankingUpdateFrequency']),

  }), shallowEqual);
  
  const coverImgUrl = songList.coverImgUrl && SetPitureSize(songList.coverImgUrl,150);
  const toplistName = songList.name;
  const updateTime = songList.updateTime && formatMonthDay(songList.updateTime);
  const songId = songList.tracks && songList.tracks[0].id;

  const commentCount = songList.commentCount;
  const shareCount = songList.shareCount;
  // const subscribedCount = songList.subscribedCount; // 订阅数

  return (
    <RankingTitleWrapper>
      <div className="pic">
        <img src={coverImgUrl} alt={toplistName}/>
        <span className="mask sprite_coverall"></span>
      </div>
      <div className="desc">
        <h2 className="toplist-name">{toplistName}</h2>
        <p className="update-time">
          <i className="icon-clock sprite_icon2"></i>
          <span>最近更新：{updateTime}</span>
          { curRankingUpdateFrequency && <span>({curRankingUpdateFrequency})</span> }
        </p>
        {/* 默认可以控制播放榜单中第一首歌曲 */}
        { songId && <ZHControl info={['播放','',`(${shareCount})`,'下载',`(${commentCount})`]} songId={songId}/> }
      </div>
    </RankingTitleWrapper>
  );


})
