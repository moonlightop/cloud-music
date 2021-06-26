import { isHideModal } from '@redux/actions/login';
import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { UserLoginWrapper } from './style';

export default memo(function ZHUserLogin(props) {
  
  const dispatch = useDispatch();
  const { hideModal } = useSelector(state => ({
    hideModal: state.getIn(['login','hideModal'])

  }),shallowEqual)
  
  return (
    <UserLoginWrapper className="sprite_02">
      <p className="info-desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <button className="user-login sprite_02" onClick={e => { 
        if(hideModal) dispatch(isHideModal(false)); 
      }}>用户登录</button>
    </UserLoginWrapper>
  );
})
