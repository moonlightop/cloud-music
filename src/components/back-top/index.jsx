
import React, { memo, useCallback, useEffect, useState } from 'react';

import { BackTop } from './style.js';

export default memo(function ZHBackTop(props) {
  const { title="回到顶部" } = props;

  const [ isBackTop,setIsBackTop ] = useState(false);

  // 获取redux中显示框的数据
  const scrollCallback = useCallback(e => {
    let ticking = false;
    if(!ticking) {
      window.requestAnimationFrame(function() {
        const scrollTop = e.target.scrollTop;
        // console.log(isBackTop,scrollTop,e.target)

        if(!isBackTop && scrollTop > 350) {
          // console.log(scrollTop);
          setIsBackTop(true);

        }else if(isBackTop && scrollTop <= 350) {
          // console.log(scrollTop);
          setIsBackTop(false);

        }

        ticking = false;
      });
      ticking = true;
    }

  },[isBackTop,setIsBackTop])

  // 监听滚动事件
  useEffect(() => {
    document.body.addEventListener('scroll',scrollCallback)
    return () => {
      document.body.removeEventListener('scroll',scrollCallback);
    };

  },[scrollCallback]);

  
  return (
    <BackTop 
      style={{ visibility: isBackTop ? 'visible' : 'hidden' }}
      onClick={e => { 
        e.preventDefault(); 
        document.body.scrollTo(0,0);
        setIsBackTop(false);
      }} 
      className="backtop_sprite"
    >
      {title}
    </BackTop>
  )
})
