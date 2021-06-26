import React, { memo } from 'react';

import NoLoginPage from '@components/no-login-page';

export default memo(function ZHFriend() {

  return (
    <>
      {/* 未登录时显示的页面 */}
      <NoLoginPage routeName='friend'/>
    </>
  );
})
