import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import ZHThemeHeader from '@components/theme-header';
import ZHThemeAlbumCover from '@components/theme-album-cover';

import {
  HotAlbumWrapper
} from './style';

export default memo(function ZHHotAlbum(props) {
  

  const { hotAlbum } = useSelector(state => ({
    hotAlbum: state.getIn(['album','hotAlbum'])

  }), shallowEqual);


  return (
    <HotAlbumWrapper>
        <ZHThemeHeader 
          themeName="热门新碟"
          isIcon={false}
          isComment={true}
        />
        <ul className="pic">
          {
            hotAlbum.length > 0 && hotAlbum.map(album => {
              return (
                <ZHThemeAlbumCover size="130px" width="153px" info={album} key={album.id} />
              );
            })
          }
        </ul>
    </HotAlbumWrapper>
  );

})
