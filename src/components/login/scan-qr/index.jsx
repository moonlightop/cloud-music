import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { setContent } from '@redux/actions/login';

import {
  ScanQrContent,
  LeftContent,
  RightContent,
  ScanQrFooter
} from './style.js';

export default memo(function ZHScanQr(props) {

  const dispatch = useDispatch();

  return (
    <>
      {/* 二维码登录 */}
      {/* 中间显示的内容 */}
      <ScanQrContent>

        <LeftContent></LeftContent>
        <RightContent>
          {/* 二维码过时遮罩层 */}
          <div className="qr-useless">
            <p>二维码已失效</p>
            <a href="##" rel="noreferrer" onClick={e => { e.preventDefault();alert('功能模拟,无法刷新');}}>点击刷新</a>
          </div>
          {/* 二维码登录 */}
          <div className="title-and-qr">
            <span>扫码登录</span>
            <img src={require('../../../assets/img/login/scan-qr.jpg').default} alt="二维码"/>
            <p>
              使用&nbsp;
              <a href="https://music.163.com/#/download" rel="noreferrer" target="_blank">网易云音乐app</a>
              &nbsp;扫码登录
            </p>
          </div>
        </RightContent>
      
      </ScanQrContent>
      
      {/* 底部内容 */}
      <ScanQrFooter onClick={ e => dispatch(setContent({
        type: 'other',
        title: '登录',
      })) }><span>选择其它登录方式</span></ScanQrFooter> 
    
    </>
  );

})
