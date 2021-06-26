import React, { memo, } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { isShowToast,isSelectPro,setContent } from '@redux/actions/login'
import { LoginFooter,LoginContentRight } from '@common/local-data/login';

import {
  OtherContent,
  OtherFooter,
  OtherLeftContent,
  OtherRightContent,
  OtherPro
} from './style.js';

// 是否选择协议 + 切换中间内容区展示的内容
const contentAndToast = (selectPro,dispatch,type,title) => {
  // console.log(selectPro);
  if (!selectPro) {
    // 显示中间的提示框
    dispatch(isShowToast(true))

  } else if(setContent && type) {
    // 修改内容区组件
    dispatch(setContent({
      type,
      title
    }));
  }

};

export default memo(function ZHOther(props) {

  const dispatch = useDispatch();
  const { selectPro } = useSelector(state => ({
    selectPro: state.getIn(['login','selectPro']),

  }),shallowEqual);


  return (
    <>
      <OtherContent>

        {/* 手机号登录和注册 */}
        <OtherLeftContent>
          <div className="bg-computer"></div>
          <div className="btn-phone-login sprite_button2">
            <i className="sprite_button2"  onClick={e => { 
              contentAndToast(selectPro,dispatch,'phone-login','手机号登录'); }}>手机号登录</i>
          </div>
          <div className="btn-register sprite_button2">
            <i className="sprite_button2"  onClick={e => { 
              contentAndToast(selectPro,dispatch,'phone-register','手机号注册'); }}>注册</i>
          </div>
        </OtherLeftContent>
        {/* 其它登录方式,除了邮箱登录都是直接打开新页面展示登录方式 */}
        <OtherRightContent className="right-content">
          {
            LoginContentRight.map(loginWay => {
              const { title,href,isLoginWay } = loginWay;
              return (
                <li key={title}>
                  <a href={isLoginWay ? '##' : href} target="_blank" rel="noreferrer" onClick={e => {
                    // 最后一个邮箱才会渲染自己的组件
                    if(isLoginWay) {
                      e.preventDefault();
                      contentAndToast(selectPro,dispatch,'email','网易邮箱登录');
                    }
                  }}>
                    <i className="icon sprite_logo"></i>
                    {title}
                  </a>
                </li>
              );
            })
          }
        </OtherRightContent>
        {/* 同意协议勾选 */}
        <OtherPro>
          <input id="agree-pro" type="checkbox" onChange={
            e => dispatch(isSelectPro(e.target.checked))
          } 
            defaultChecked={selectPro}
          />
          <label htmlFor="agree-pro">同意</label>
          {
            LoginFooter.map(pro => {
              const { href,title } = pro;
              return (
                <a key={href} href={href} target="_blank" rel="noreferrer"  
                  style={{ color: '#507DAF' }}>{title}</a>
              );
            })
          }
        </OtherPro>

      </OtherContent>

      {/* 二维码-登陆方式 */}
      <OtherFooter onClick={e => { 
        contentAndToast(selectPro,dispatch,'scan-qr','二维码登录'); 
      }}></OtherFooter>

    </>
  )
})
