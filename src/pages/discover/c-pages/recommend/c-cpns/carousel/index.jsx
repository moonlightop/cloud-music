
import { memo, useEffect, useState, useRef } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { getCarousel } from '@redux/actions/discover/recommend';

import { autoRotate } from '@utils/format-utils';


import {
  BannersWrapper,
  Bg,
  Banners,
  Piture,
  Circle,
  Download

} from './style.js';

// 轮播图本地测试数据
import { carouselList } from '@common/local-data/recommend-banners';


// 回到顶部组件出现，取消定时器，反之重新开启定时器

export default memo(function ZHCarousel(props) {

  // Api接口太卡了，因此将图片保存到本地了
  // const dispatch = useDispatch();
  // const { carouselList } = useSelector(state => ({
  //   carouselList: state.getIn(['recommend','carouselList']),

  // }),shallowEqual);
  // const carouselLen = carouselList.length;
  
  // useEffect(() => {
  //   // 通过派发异步action来获取轮播图数据并存储到redux中
  //   if(carouselLen === 0) {
  //     dispatch(getCarousel());
  //     alert('已成功通过API获取轮播图数据，但由于太卡了，因此采用本地数据模拟');
  //   }

  // },[dispatch,carouselLen]) 


  // 淡入 - 淡出效果样式管理
  const [imgStyle,setImgStyle] = useState({
    transition: 'none 0s ease 0s',
    opacity: 1
  });
  const imageNum = carouselList.length;
  
  // 当前显示的页面下标
  const [ currentIndex,setCurrentIndex ] = useState(0);
  // 用于定时器的清除 / 记录绑定transitionend的回调函数名字
  const timerRef = useRef(null);

  useEffect(() => {
    
    // 首次渲染完后,设置定时器,通过动画淡出图片
    timerRef.current = autoRotate(setImgStyle);
    // 监听滚动事件,以便backtop组件显示时，消除自动播放的定时器
    function sCallback(e) {
      let ticking = false;
      if(!ticking) {
        window.requestAnimationFrame(function() {
          const timer = timerRef.current;
          const scrollTop = e.target.scrollTop;
          if(timer && scrollTop > 350) {
            // console.log('滚动条大于350，清除定时器');
            clearInterval(timer);
            timerRef.current = null;
        
          }else if(!timer && scrollTop <= 350) {
            // console.log('滚动条小于350，开启定时器',scrollTop);
            timerRef.current = autoRotate(setImgStyle);
          } 
          ticking = false;

        });
    
        ticking = true;
      }

    }
    document.body.addEventListener('scroll',sCallback);
    // 仅进行transitionend监听
    function tCallback(e) {
      if(e.target.style.transition === 'opacity 1s ease-in 0s') {
        // 切换下一张图片
        setCurrentIndex(cIndex => {
          const nIndex = cIndex + 1;
          return (nIndex >= imageNum ? (nIndex - imageNum) : nIndex);
        })
        // 0.2 -> 1: 淡入图片
        setImgStyle({
          transition: 'opacity 1s ease-out 0s',
          opacity: 1
        });
      
      }else if(e.target.style.transition === 'opacity 1s ease-out 0s') {
        setImgStyle({
          transition: 'none 0s ease 0s',
          opacity: 1
        });
  
      }
      
    }
    window.addEventListener('transitionend',tCallback);

    return () => {
      clearInterval(timerRef.current);
      document.body.removeEventListener('scroll',sCallback);
      window.removeEventListener('transitionend',tCallback);
    };

  },[imageNum]);

  const currentImage = carouselList[currentIndex];
  // const bgImageUrl = currentImage.imageUrl + '?imageView&blur=40x20';


  return (
    <BannersWrapper 
      onMouseEnter={e => { 
        if(timerRef.current) {
          // console.log('清除定时器');
          clearInterval(timerRef.current); 
          timerRef.current = null;
        }
      }} 
      onMouseLeave={e => { 
        if(!timerRef.current) {
          // console.log('重新开启定时器');
          timerRef.current = autoRotate(setImgStyle); 
        }
      }}
    >
      <Bg style={{ backgroundImage: `url(${currentImage.bgImageUrl})`}}>
        <Banners className="wrap-v2">

          <Piture style={imgStyle} onClick={ e => { alert('跳转功能仍未开发完成'); } }>
            <a  href="##" 
                onClick={ e => e.preventDefault() }
                key={currentImage.imageUrl} className="piture-item">
              <img 
                src={currentImage.imageUrl} 
                alt={currentImage.typeTitle}
              />
            </a>
          </Piture>

          <Circle onClick={ e => {
            const nextIndex = parseInt(e.target.getAttribute('index'));
            if(nextIndex >= 0 && nextIndex < imageNum) {
              setCurrentIndex(nextIndex);
            }
          }}>
            {
              carouselList.map((img,index) => {
                return (
                  <span 
                    className={(index === currentIndex ? "actived" : "") + " circle-item banner_circle"}
                    index={index}
                    key={img.imageUrl}
                  ></span>
                );
              })
            }
          </Circle>

          <span className="left-arrow banner_sprite" onClick={e => {
            setCurrentIndex(cIndex => {
              const nIndex = cIndex - 1;
              return nIndex >= 0 ? nIndex : (nIndex + imageNum);
            });
          }}></span>
          <span className="right-arrow banner_sprite" onClick={e => {
            setCurrentIndex(cIndex => {
              const nIndex = cIndex + 1;
              return nIndex >= imageNum ? (nIndex - imageNum) : nIndex;
            });
          }}></span>

          <Download>
            <a href="#/download">下载客户端</a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            <span className="banner_sprite shadowl"></span>
            <span className="banner_sprite shadowr"></span>
          </Download>  

        </Banners>
      </Bg>
    </BannersWrapper>
  );

})