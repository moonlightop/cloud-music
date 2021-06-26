import { getTopPlayList } from '@redux/actions/discover/playlist';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';


import {
  PaginationWrapper
} from './style';


/*
  页码全部从0开始
*/

export default memo(function ZHPagination(props) {
  
  const { total,pageNum,cat='' } = props;

  // 总页数
  const totalPage = Math.ceil(total / pageNum);
  // 中间需要展示的页数量
  const showPageNum = Math.ceil(total / pageNum / 6);

  const dispatch = useDispatch();
  /*
    0 ~ showPageNum - 1
    showPageNum ~ 2*showPageNum - 1
    ...
  */
  const getMiddlePages = useCallback(() => {
    const middlePages = [];
    // 除了第一页和最后一页
    for(var i = 1; i < totalPage - 1; i ++) {
      middlePages.push(i);
    }
    // res = [[长度为showPageNum],...]
    const res = [];
    for(var j = 0; j < middlePages.length; j += showPageNum) {
      res[Math.floor(j / showPageNum)] = middlePages.slice(j,j + showPageNum);
    }

    return res;

  },[totalPage,showPageNum]);

  // 当前页码：0开始
  const [ curPageOffset,setcurPageOffset ] = useState(0);

  // 中间区域偏移量：0开始
  const [ middleOffset,setMiddleOffset ] = useState(Math.floor(curPageOffset / showPageNum));
  // 中间页码的数组
  const [ showPages ] = useState(getMiddlePages());

  const changePageOffset = useCallback((newPageOffset) => {
    if (cat) {
      // 有cat，说明是playList路由
      dispatch(getTopPlayList({ cat,offset: newPageOffset }));
    } else {
      // 此处是album路由
    }

    // 公共操作
    setcurPageOffset(newPageOffset);
    if (newPageOffset === 0) {
      setMiddleOffset(0);
    } else {
      setMiddleOffset(Math.floor((newPageOffset - 1) / showPageNum));
    }

  },[cat,showPageNum,dispatch]);

  const isFirstPage = curPageOffset === 0;
  const isLastPage = curPageOffset === (totalPage - 1);
  
  // console.log(showPages)
  
  return (
    <PaginationWrapper >
      <button 
        disabled={isFirstPage} 
        className={ "prev sprite_playlist_button btn " + (isFirstPage ? 'prev-disabled' : '')}
        onClick={e => {
          if(curPageOffset <= 0) return;
          changePageOffset(curPageOffset - 1);
        }}  
      >
        上一页
      </button>

      {/* 第一页 */}
      <span 
        onClick={e => changePageOffset(0)}
        className={curPageOffset === 0 ? 'actived-btn sprite_playlist_button' : ''}
      >
        1
      </span>
      {/* 因为从0开始，再加上第一页不算，也就是从第showPageNum+2页开始显示dot */}
      { curPageOffset > showPageNum && <i className="dot">...</i> }

      {
        /* 
          保持中间页数恒定为showPageNum
        */
        showPages[middleOffset].map(selfPage => {
          return (
            <span onClick={e => changePageOffset(selfPage)}
              className={curPageOffset === selfPage ? 'actived-btn sprite_playlist_button' : ''}
              key={`${selfPage}-pages`}
            >
              { selfPage + 1 }
            </span>
          );
        })
      }

      {  
        showPages[middleOffset].length > 0 
          && middleOffset < (showPages.length - 1)
            && <i className="dot">...</i> 
      }
      {/* 最后一页 */}
      <span   
        onClick={e => changePageOffset(totalPage - 1) }
        className={curPageOffset === (totalPage - 1) ? 'actived-btn sprite_playlist_button' : ''} 
      >
        { totalPage }
      </span>

      <button 
        disabled={isLastPage}
        className={ "next sprite_playlist_button btn" + (isLastPage ? ' prev-disabled' : '')}
        onClick={e => {
          if(curPageOffset > totalPage - 1) return;
          changePageOffset(curPageOffset + 1);
        }}
      >
        下一页
      </button>
    </PaginationWrapper>
  );

})
