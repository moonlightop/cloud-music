import React, { memo, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeCurrentArea, changeCurrentType, getArtistList } from '@redux/actions/discover/artist';

import ZHArtistListItem from './c-cpns/artist-list-item';

import {
  ArtistListWrapper,
  ArtistListHeader,
  ArtistListContent
} from './style';

export default memo(function ZHArtistListWrapper(props) {
  
  const dispatch = useDispatch();
  const { currentType, currentArea,artistList } = useSelector(state => ({
    currentType: state.getIn(['artist','currentType']),
    currentArea: state.getIn(['artist','currentArea']),
    artistList: state.getIn(['artist','artistList'])

  }), shallowEqual);

  useEffect(() => {
    dispatch(getArtistList({ area: currentArea,type: currentType.type }))
  
  }, [dispatch,currentArea,currentType])
  
  const selectArtist = useCallback((area,artist) => {
    dispatch(changeCurrentArea(area));
    dispatch(changeCurrentType({ name: artist.name,type: artist.type }))

  }, [dispatch])


  return (
    <ArtistListWrapper>
      {/* 头部要抽成组件 */}
      <ArtistListHeader>
        <p className="left-title">
          {
            currentType.name === '推荐歌手' ? '热门歌手' : currentType.name
          }
        </p>
        <p className="right-title" onClick={e => selectArtist('-1',{ name: '入驻歌手',type: 2 })}>
          {
            currentType.name === '推荐歌手' ? 
              <>更多&gt;</> : ''
          }
        </p>
      </ArtistListHeader>
      {/* 字母表组件 */}
      <ArtistListContent>
        {
          artistList.map((artist,index) => {
            return (
              <ZHArtistListItem key={artist.id} index={index} info={artist}/>
            )
          })
        }
      </ArtistListContent>
    </ArtistListWrapper>
  );

})
