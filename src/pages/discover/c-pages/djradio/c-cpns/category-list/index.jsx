import React, { memo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { isHideModal } from '@redux/actions/login';

import {
  CategoryListWrapper
} from './style';
import { getCurRadioType } from '@redux/actions/discover/djradio';

export default memo(function ZHCategoryList(props) {
  

  const dispatch = useDispatch();

  const { catelist,hideModal } = useSelector(state => ({
    catelist: state.getIn(['djradio','catelist']),
    hideModal: state.getIn(['login','hideModal'])

  }), shallowEqual);

  const [ curIndex,setCurIndex ] = useState(0);


  return (
    <CategoryListWrapper>
      {
        catelist.length > 0 && catelist.map((cate,index) => {
          // console.log(cate.picWebUrl)
          return (
            <li key={cate.id}>  
              {/* to={`/discvoer/djradio/category?id=${cate.id}`} */}
              <div 
                className={(curIndex === index ? "actived-cate" : "")  + " sprite_radio_bg pic-container"}
                onClick={e => {
                  dispatch(getCurRadioType(cate.id));
                  setCurIndex(index);
                }}
              >
                <div className="cate-pic" style={{ backgroundImage: `url(${cate.picWebUrl})` }}>
                </div>
                <span>{cate.name}</span>
              </div>
            </li>
          );
        })
      }

      <li>
        <a 
          href="https://music.163.com/#/topic?id=18652232" target="_blank" rel="noreferrer"
          className="sprite_radio_bg  pic-container"
        >
          <div className="sprite_radio_faq cate-pic"></div>
          <span>常见问题</span>
        </a>
      </li>
      <li>
        <div 
          className={(curIndex === catelist.length + 1 ? "actived-cate" : "")  + " sprite_radio_bg pic-container"}
          onClick={e => {
            setCurIndex(catelist.length + 1);
            dispatch(isHideModal(!hideModal));
          }}
        >
          <div className="cate-pic sprite_radio_apply"></div>
          <span>我要做主播</span>
        </div>
      </li>

    </CategoryListWrapper>
  );
})
