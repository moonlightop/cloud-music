
import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

import ZHLoading from '@components/loading';

import {
  DiscoverWrapper,
} from './style';

export default memo(function ZHDiscover(props) {
  const { route } = props;

  return (
    <DiscoverWrapper>
      <Suspense fallback={<ZHLoading />}>
        { renderRoutes(route.routes) }
      </Suspense>
    </DiscoverWrapper>
  )
})

