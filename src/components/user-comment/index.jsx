import ZHThemeHeader from '@components/theme-header';
import React, { memo } from 'react';

import {
  UserCommentWrapper
} from './style';

export default memo(function ZHUserComment(props) {

  const { commentCount } = props;

  return (
    <UserCommentWrapper>
      <ZHThemeHeader 
        themeName='评论' 
        desc={[`共${commentCount}条评论`]} 
        isIcon={false}
        isComment={true} 
      />
    </UserCommentWrapper>
  );

})
