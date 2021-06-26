
import React, { memo } from 'react';
import {
  LoadingSpinnerIcon,
} from './style';

// 发现音乐二级路由切换时，中间圆圈转动
export default memo(function ZHLoading() {
  // console.log('loading');
  return (
    <LoadingSpinnerIcon></LoadingSpinnerIcon>
  );
  
});
