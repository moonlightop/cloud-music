import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import ZHArtistListWrapper from './c-cpns/artist-list';
import ZHArtistCategoryWrapper from './c-cpns/artist-category';

import {
  ArtistWrapper
} from './style';

export default memo(function ZHArtist(props) {
  
  
  return (
    <ArtistWrapper className="wrap-v2">
      <ZHArtistCategoryWrapper />
      <ZHArtistListWrapper />
      {
        renderRoutes(props.route.routes)
      }
    </ArtistWrapper>
  );
})
