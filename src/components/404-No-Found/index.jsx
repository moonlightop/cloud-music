
import React, { memo } from 'react';

import ZHNavLink from '@components/navlink';

import { NoFoundWrapper } from './style.js';

export default memo(function ZHNoFound(props) {
  const { wrapType="wrap-v2" } = props;

  return (
    <NoFoundWrapper className={`${wrapType}`}>
      <h1>no-found界面</h1>
      <ZHNavLink to="/">跳转首页</ZHNavLink>
    </NoFoundWrapper>
  )
})
