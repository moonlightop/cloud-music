import React, { memo } from 'react';
import { useSelector,useDispatch,shallowEqual } from 'react-redux';

import { isHideModal } from '@redux/actions/login';

import {
  NoLoginPageWrapper,
} from './style.js';

export default memo(function NoLoginPage(props) {
  const { routeName } = props;

  const dispatch = useDispatch();
  const { hideModal } = useSelector(state => ({
    hideModal: state.getIn(['login','hideModal']),

  }), shallowEqual);

  return (
    <NoLoginPageWrapper className='wrap-v2'>

      <div className={`${routeName}-bg`}>

        { 
          routeName === 'friend' ? 
          <div className="title">你可以关注明星和好友品味他们的私房歌单<br/>通过他们的动态发现更多精彩音乐</div> 
          : <h2 className="title">登录网易云</h2> 
        }
        <a hidefocus="true" href="##" onClick={e => { 
          e.preventDefault(); 
          // 显示登录框
          if(hideModal) 
            dispatch(isHideModal(false)); 
          
        }} className="btn">立即登录</a>

      </div>
    
    </NoLoginPageWrapper>
  );

})
