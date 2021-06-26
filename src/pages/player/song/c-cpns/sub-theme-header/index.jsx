import React, { memo } from 'react';

import { SubThemeHeaderWrapper } from './style';

export default memo(function ZHSubThemeHeader(props) {
  const { SubThemeName="" } = props;
  
  return (
    <SubThemeHeaderWrapper>
      {SubThemeName}
    </SubThemeHeaderWrapper>
  );

})
