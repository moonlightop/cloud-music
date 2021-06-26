import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import ZHThemeHeader from '@components/theme-header';
import ZHThemeAlbumCover from '@components/theme-album-cover';
import ZHPagination from '@components/pagination';

import {
  AllAlbumWrapper
} from './style';


export default memo(function ZHAllAlbum(props) {
  
  const { allAlbum } = useSelector(state => ({
    allAlbum: state.getIn(['album','allAlbum'])

  }), shallowEqual);

  
  return (
    <AllAlbumWrapper>
      <ZHThemeHeader 
        themeName="全部新碟"
        desc={['全部','华语','欧美','韩国','日本']}
        isIcon={false}
        isComment={true}
      />
      <ul className="pic">
        {
          allAlbum.total > 0 && allAlbum.albums.map(album => {
            return (
              <ZHThemeAlbumCover size="130px" width="153px" info={album} key={album.id}/>
            );
          })
        }
      </ul>
      {/* 之前封装的分页器组件不太行，建议参考antd来封装 */}
      { 
        allAlbum.total > 0 && 
        <ZHPagination 
          total={allAlbum.total} 
          pageNum={35} 
        /> 
      }
    </AllAlbumWrapper>
  );

})
