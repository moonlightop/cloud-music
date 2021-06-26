import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { getCatelist,getCurRadioType } from '@redux/actions/discover/djradio';

import ZHCategoryList from './c-cpns/category-list';
import ZHExcellentRadio from './c-cpns/excellent-radio';
import ZHRadioRanking from './c-cpns/radio-ranking';


import {
  DjRadioWrapper
} from './style';


export default memo(function ZHDjradio(props) {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatelist());
    // 默认情感调频
    dispatch(getCurRadioType(3));

  },[dispatch])


  return (
    <DjRadioWrapper className="wrap-v2">
      <ZHCategoryList />
      <ZHExcellentRadio />
      <ZHRadioRanking />
      {
        renderRoutes(props.route.routes)
      } 
    </DjRadioWrapper>
  );

})
