import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import ZHAllAlbum from './c-cpns/all-album';
import ZHHotAlbum from './c-cpns/hot-album';

import { getHotAlbum,getAllAlbum } from '@redux/actions/discover/album';

import {
  AlbumWrapper
} from './style';

export default memo(function ZHAlbum(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotAlbum());
    dispatch(getAllAlbum({ limit: 35,offset: 0 }));

  }, [dispatch])

  return (
    <AlbumWrapper className="wrap-v2">
      <ZHHotAlbum />
      <ZHAllAlbum />
      {
        renderRoutes(props.route.routes)
      }
    </AlbumWrapper>
  );

})
