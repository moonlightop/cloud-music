import React, { memo, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import ZHNavLink from '@components/navlink';
import { artistCategories } from '@common/local-data/artist-category';

import { getArtistList, changeCurrentArea,changeCurrentType } from '@redux/actions/discover/artist';

import {
  ArtistCategoryWrapper,
  ArtistCategoryItem
} from './style';


export default memo(function ZHArtistCategory(props) {
  
  const dispatch = useDispatch();
  const { currentArea,currentType } = useSelector(state => ({
    currentArea: state.getIn(['artist','currentArea']),
    currentType: state.getIn(['artist','currentType'])

  }), shallowEqual);

  const selectArtist = useCallback((area,artist) => {
    const { type,name } = artist;
    dispatch(changeCurrentArea(area));
    dispatch(changeCurrentType({ type,name }));
    dispatch(getArtistList({ area,type }));

  },[dispatch]);


  return (
    <ArtistCategoryWrapper>
      {
        artistCategories.map(tag => {
          const { area } = tag;
          return (
            <ul className="section" key={tag.title + tag.area}>
              <h3 className="title">{tag.title}</h3>
              {
                tag.artists.map((artist,index) => {
                  // 根据当前的地区，歌手类型判断分类栏的选择
                  const isSelect = currentArea === area && currentType.type === artist.type;
                  return (
                    <ArtistCategoryItem 
                      key={artist.id+artist.name}
                      className={isSelect ? "actived" : ""}
                      onClick={e => selectArtist(area,artist) }
                    >
                      <span className="icon-circle">
                        <ZHNavLink to={artist.url}>{artist.name}</ZHNavLink>
                      </span>
                    </ArtistCategoryItem>
                  );
                })
              }
            </ul>
          );
        })
      }
    </ArtistCategoryWrapper>
  );

})
