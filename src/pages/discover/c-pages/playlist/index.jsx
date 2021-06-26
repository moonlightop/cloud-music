import { getPlayTagList, getTopPlayList } from '@redux/actions/discover/playlist';
import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import ZHThemeRcmCover from '@components/theme-rcm-cover';
import ZHPagination from '@components/pagination';
import ZHCategoryModal from './c-cpns/category-modal';

import {
  PlayListWrapper,
  PlayListHeader,
  PlayListContent

} from './style';

export default memo(function ZHPlayList(props) {

  const dispatch = useDispatch();
  const { topPlayList } = useSelector(state => ({
    topPlayList: state.getIn(['playlist','topPlayList'])

  }), shallowEqual)

  useEffect(() => {
    // 获取所有分类标签名
    dispatch(getPlayTagList());
    // 默认获取全部歌曲
    dispatch(getTopPlayList({}));

  },[dispatch])

  const [ showCategoryModal,setShowCategoryModal ] = useState(false);


  return (
    <PlayListWrapper 
      className="wrap-v2" 
      onMouseDown={e => setShowCategoryModal(false)}
    >
      <PlayListHeader>
        <div className="left"> 
          <span className="classTag">{topPlayList.cat}</span>
          <div className="select-btn sprite_button2" onClick={e => setShowCategoryModal(!showCategoryModal)}>
            <span className="sprite_button2">
              <em>选择分类</em>
              <i className="sprite_icon2"></i>
            </span>
          </div>
        </div>
        <span 
          className="hot sprite_playlist_button"
          onClick={e => dispatch(getTopPlayList({ cat: topPlayList.cat,order: 'hot' }))}
        >热门</span>
      </PlayListHeader>
          
      <ZHCategoryModal 
        showCategoryModal={showCategoryModal}
        setShowCategoryModal={setShowCategoryModal}
      />

      <PlayListContent>
        {
          topPlayList.playlists && topPlayList.playlists.map((song,index) => {
            return (
              <ZHThemeRcmCover 
                themeInfo={song} 
                key={song.id + index} 
              ></ZHThemeRcmCover>
            );
          })
        }
      </PlayListContent>
      {/* 
        分页器组件应该可以设置：defaultCurPage，pageNum，tota ...参数
      */}
      { 
        topPlayList.more && 
          <ZHPagination 
            total={topPlayList.total} 
            pageNum={35}
            cat={topPlayList.cat}
          /> 
      }
      {
        renderRoutes(props.route.routes)
      }
    </PlayListWrapper>
  );

})
