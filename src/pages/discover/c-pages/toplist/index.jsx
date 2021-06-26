import React, { memo, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopListDetail,getPlayListDetail } from '@redux/actions/discover/toplist';

import ZHRankingsDesc from './c-cpns/rankings-desc';
import ZHRankingTitle from './c-cpns/ranking-title';
import ZHSongList from './c-cpns/song-list';

import {
  TopListWrapper,
  TopListLeft,
  TopListRight
} from './style';



export default memo(function ZHTopList(props) {

  const dispatch = useDispatch();
  const {
    featureList,
    mediaList,

  } = useSelector(state => ({
    featureList: state.getIn(['toplist','featureList']),
    mediaList: state.getIn(['toplist','mediaList']),

  }), shallowEqual);

  useEffect(() => {
    dispatch(getTopListDetail());
    // 默认获取飙升榜的playlist
    dispatch(getPlayListDetail(19723756));

  },[dispatch])

  return (
    <TopListWrapper className="wrap-v2">
      <TopListLeft>
        <ZHRankingsDesc rankingsTheme={["云音乐特色榜","全球媒体榜"]} rankingsInfo={[featureList,mediaList]}/>
      </TopListLeft>
      <TopListRight>
        <ZHRankingTitle/>
        <ZHSongList/>
      </TopListRight>
      {/* 没有匹配到路由时的not-found */}
      {
        renderRoutes(props.route.routes)
      }
    </TopListWrapper>
  );


})
