import React, { memo,useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getPersonalized } from '@redux/actions/discover/recommend';

import ZHThemeHeader from '@components/theme-header';
import ZHThemeRcmCover from '@components/theme-rcm-cover';

import { HotRecommendWrapper } from './style';


export default memo(function ZHHotRecommend(props) {

  // 从redux中获取热门推荐的数据
  const dispatch = useDispatch();
  const { personalized } = useSelector(state => ({
    personalized: state.getIn(['recommend','personalized']),

  }),shallowEqual);
  const personalizedLen = personalized.length; 

  useEffect(() => {
    if(personalizedLen === 0) {
      dispatch(getPersonalized());
    }

  },[dispatch,personalizedLen]);

  
  return (
    <HotRecommendWrapper>
      <ZHThemeHeader themeRoute={"/discover/playlist"} themeName={'热门推荐'} desc={['华语','流行','摇滚','民谣','电子']} /> 
      <ul className="hot-content">
        {
          personalized.map((item,index) => {
            return (
              <ZHThemeRcmCover 
                themeInfo={item} 
                key={item.id} 
              />
            );
          })
        }
      </ul>
    </HotRecommendWrapper>
  )
})
