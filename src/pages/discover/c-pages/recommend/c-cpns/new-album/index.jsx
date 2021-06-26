import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewAlbum } from '@redux/actions/discover/recommend';

import ZHThemeHeader from '@components/theme-header';
import ZHThemeAlbumCover from '@components/theme-album-cover';

import { 
  NewAlbumWrapper,
  NewAlbumContent
} from './style';


export default memo(function ZHNewAlbum(props) {

  const dispatch = useDispatch();
  const { newAlbum } = useSelector(state => ({
    newAlbum: state.getIn(['recommend','newAlbum']),

  }));

  useEffect(() => {
    dispatch(getNewAlbum());

  },[dispatch])

  const [ albumStyle,changeAlbumStyle ] = useState({
    left: [-1,0,1,2],
    transition: [],
    type: '',
  });

  // 通过key来控制左右箭头的多次触发 - 每次只能翻一页！
  const keyRef = useRef(true);
  const transitionCount = useRef(0);

  useEffect(() => {
    function openKey(e) {
      // 需要注意有两次transitionend触发，我们希望的是第二次进行相应属性的修改（动画效果完成后的立即跳转）
      if((++ transitionCount.current) === 2) {
        // 怪不得，上面轮播图的完成也是通过监听transitionend来做的，快取消它的监听事件！
        // console.log('两次transitionend');
        keyRef.current = true;
        transitionCount.current = 0;

        changeAlbumStyle(albumStyle => {
          albumStyle.transition = [
            'none 0s ease 0s',
            'none 0s ease 0s',
            'none 0s ease 0s',
            'none 0s ease 0s'
          ];
          const cIndex = parseInt(albumStyle.left.indexOf(0));
          const bannersLen = albumStyle.left.length;
          if(albumStyle.type === 'right-arrow') {
            albumStyle.left[(cIndex - 1) < 0 ? (cIndex - 1) + bannersLen : (cIndex - 1)] = -1;
          }else if(albumStyle.type === 'left-arrow') {
            albumStyle.left[(cIndex + 1) % bannersLen] = 1;
          }
    
          return { ...albumStyle };
        })
      }

    }
    window.addEventListener('transitionend',openKey);
    return () => {
      window.removeEventListener('transitionend',openKey);
    }

  },[])

  const arrowRotate = useCallback((type) => {

    if(keyRef.current) {
      keyRef.current = false;
      changeAlbumStyle(albumStyle => {
        const cIndex = parseInt(albumStyle.left.indexOf(0));
        const bannersLen = albumStyle.left.length;

        // 闭环的圆圈！！！
        if(type === 'left-arrow') {

          // 1. 先改变原来的0 1 -> -1 0（两张图片向左滚动），在transitionend再将 0 前面的元素改为 1（过渡动画完成后进行立即跳转 - 视觉上）
          albumStyle.left[cIndex] = -1;
          albumStyle.left[(cIndex + 1) % bannersLen] = 0;
          // 2. 修改transition(原来的0 1进行过渡)
          albumStyle.transition[cIndex] = 'left 1s ease-out 0s';
          albumStyle.transition[(cIndex + 1) % bannersLen] = 'left 1s ease-out 0s'; 
          albumStyle.type = 'left-arrow';

        }else if(type === 'right-arrow') {

          // 1. 先改变原来的-1 0 -> 0 1（两者图片向右滚动），在transitionend再将 0 后面的元素改为 -1（过渡动画完成后进行立即跳转 - 视觉上）
          albumStyle.left[cIndex] = 1;
          albumStyle.left[(cIndex - 1) < 0 ? (cIndex - 1) + bannersLen : (cIndex - 1)] = 0;
          // 2. 修改transition(原来的 -1 0进行过渡)
          albumStyle.transition[cIndex] = 'left 1s ease-out 0s';
          albumStyle.transition[(cIndex - 1) < 0 ? (cIndex - 1) + bannersLen : (cIndex - 1)] = 'left 1s ease-out 0s';
          albumStyle.type = 'right-arrow';

        }
        return {...albumStyle};
      });
    }

  },[]);


  return (
    <NewAlbumWrapper>
        <ZHThemeHeader themeRoute={"/discover/album"} themeName={'新碟上架'}/>
        <NewAlbumContent>
          <span className="left-arrow sprite_02" onClick={e => { arrowRotate('left-arrow'); }}></span>
          <div className="banners">
          {
            newAlbum.length > 0 ? 
              [1,0,1,0].map((item,index) => {
                return (
                  // slice: 0 ~ 5  => [0 ~ 4]  
                  // slice: 5 ~ 10 => [5 ~ 9]
                  <ul 
                    className="banners-item" 
                    key={'banners-item' + (-index)}
                    style={{ 
                      left: `${albumStyle.left[index] * 100}%`, 
                      transition: albumStyle.transition.length > 0 ? albumStyle.transition[index] : "",
                    }}
                  >
                    {
                      newAlbum.slice(item*5,(item+1)*5).map(album => {
                        return (
                          <ZHThemeAlbumCover key={album.name} info={album} width={"118px"} size={"100px"}/>
                        );  
                      })
                    }
                  </ul>
                );

              }) : ""
            }
         </div>
          <span className="right-arrow sprite_02" onClick={e => { arrowRotate('right-arrow'); }}></span>
        </NewAlbumContent>
    </NewAlbumWrapper>
  )
})
