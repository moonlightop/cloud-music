import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRankingList } from '@redux/actions/discover/recommend';

import ZHThemeHeader from '@components/theme-header';
import ZHThemeTopListCover from '@components/theme-top-list-cover';
import { RankingListWrapper } from './style';


export default memo(function ZHRankingList() {

  const dispatch = useDispatch();
  const { upList,newSongList,originList } = useSelector(state => ({
    upList: state.getIn(['recommend','upList']),
    newSongList: state.getIn(['recommend','newSongList']),
    originList: state.getIn(['recommend','originList'])

  }),shallowEqual);

  useEffect(() => {
    /*
      id = 19723756(飙升榜)
      id = 3779629(新歌榜)
      id = 2884035(原创榜单)
    */
    dispatch(getRankingList(19723756));
    dispatch(getRankingList(3779629));
    dispatch(getRankingList(2884035));

  },[dispatch]);

  return (
    <RankingListWrapper>
      <ZHThemeHeader themeRoute={"/discover/toplist"} themeName={'榜单'}/>
      <div className="content">
        {/* 分别为 飙升榜 、新歌榜 、原创榜单 */}
        <ZHThemeTopListCover 
          info={upList} 
          rankingId={19723756} 
          rankingName='upList' 
        /> 
        <ZHThemeTopListCover 
          info={newSongList} 
          rankingId={3779629} 
          rankingName='newSongList' 
        />
        <ZHThemeTopListCover 
          info={originList} 
          rankingId={2884035} 
          rankingName='originList'
        />
      </div>
    </RankingListWrapper>
  )
})
