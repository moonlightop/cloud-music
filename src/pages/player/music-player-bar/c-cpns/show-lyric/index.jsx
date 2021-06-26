import React, { memo } from 'react';

import { ShowLyricWrapper } from './style';

export default memo(function ZHShowLyric(props) {
  
  return (
    <ShowLyricWrapper style={{ visibility: props.lyric ? 'visible' : 'hidden' }}>
      {props.lyric}
    </ShowLyricWrapper>
  );

})
