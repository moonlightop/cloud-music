import React, { Fragment, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentSong, changeOperatorTip, changeIsPlay } from '@redux/actions/player';
import { isHideModal } from '@redux/actions/login';


import { ControlWrapper } from './style';

/*
  根据info内容渲染，播放 、收藏 、分享 、下载 、用户评论按钮
    若数组元素为空，则不渲染该按钮
  songId是点击播放按钮对应的歌曲id
*/

export default memo(function ZHControl(props) {
  const { info = [],songId } = props;

  const dispatch = useDispatch();
  
  const control = useCallback((index,type="play") => {
    /*
      0：播放
      1 、2 、3 、4 、5：登录后的功能，分别为 收藏 、分享 、下载 、评论 、添加到播放列表
    */
   if(index === 0 || index === 5) {
    // 播放当前歌曲
    dispatch(changeOperatorTip(type));
    type === "play" && dispatch(getCurrentSong(songId,type));
    type === "play" && dispatch(changeIsPlay(true));

   }else {
     // 1. 判断是否登录
     // 未登录则显示登录框
     dispatch(isHideModal(false));
   }

  },[dispatch,songId]);



  return (
    <ControlWrapper>
      {
        info.length > 0 && info.map((item,index) => {
          if(!item) return '';
          return (
            <Fragment key={item+songId}>
              <span className={`icon${index} sprite_button2`} onClick={e => control(index,"play")}>
                <i className="btn sprite_button2">
                  { index === 0 ? <em className="sprite_button2"></em> : '' }
                  {item}
                </i>
              </span>
              { 
                index === 0 
                ? <span className="icon-plus sprite_button2" onClick={e => control(info.length,'addToPlayList')}></span> : '' 
              }
            </Fragment>
          );

        })
      }
    </ControlWrapper>
  );

})
