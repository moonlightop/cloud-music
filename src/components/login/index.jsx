import React, { memo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { isHideModal } from '@redux/actions/login';
import { dragEvent } from '@utils/event';

import ZHToast from '@components/toast';
import ZHScanQr from './scan-qr';
import ZHOther from './other';
import ZHPhoneEmail from './phone-email';

import {
  LoginWrapper,
  LoginHeader
} from './style.js';

export default memo(function ZhLogin(props) {

  // header标签的拖拽时的样式
  const [ dragStyle,setDragStyle ] = useState({
    left: 0.5 * document.body.clientWidth,
    top: 0.5 * document.body.clientHeight,
  }); 

  // 是否隐藏登录框，内容区展示的组件，是否显示未勾选协议就跳转其它登录方式的中间提示框
  const dispatch = useDispatch();
  const { hideModal,content,showToast } = useSelector(state => ({
    hideModal: state.getIn(['login','hideModal']),
    content: state.getIn(['login','content']),
    showToast: state.getIn(['login','showToast']),
    
  }),shallowEqual);

  // 隐藏后再次显示,定位仍处于中间
  if (hideModal) {
    dragStyle.left = 0.5 * document.body.clientWidth;
    dragStyle.top = 0.5 * document.body.clientHeight;
  }


  // console.log(dragStyle,0.5 * document.body.clientHeight);

  return (
    <>
      <LoginWrapper style={{...dragStyle}}>

        {/* 需要给头部封装一个鼠标拖拽的功能 onMouseDown onMouseMove onMouseUp  */}
        <LoginHeader onMouseDown={e => dragEvent(e,dragStyle,setDragStyle)}>
          <span className="title">{content.title}</span>
          <i className="icon" onMouseDown={ e => { 
            e.stopPropagation();
            dispatch(isHideModal(true)); 
          }}></i>
        </LoginHeader>

        {/* 内容区展示的组件 */}
        { 
          content.type === 'scan-qr' ? <ZHScanQr /> : 
          content.type === 'other' ? <ZHOther /> :

          content.type === 'phone-register' || 
          content.type === 'phone-login' ||  
          content.type === 'email' ? 
          <ZHPhoneEmail  /> : ''
        }

      </LoginWrapper>


      {/* 未勾选协议就选择其它登录方式的提示框 */}
      { showToast ? <ZHToast/> : '' }

    </>
  );
})
