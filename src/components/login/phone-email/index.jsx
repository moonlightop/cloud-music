
import React, { memo, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { setContent,isAutoLogin,loginRequest } from '@redux/actions/login';

import {
  PhoneEmailWrapper,
  PhoneEmailFooter,
  Content,
  Oinput,
  Login
} from './style.js';

export default memo(function ZHPhoneEmail(props) {

  // 内容区显示的组件，是否勾选自动登录
  const dispatch = useDispatch();
  const { content:{ type },autoLogin } = useSelector(state => ({
    content: state.getIn(['login','content']),
    autoLogin: state.getIn(['login','autoLogin']),

  }),shallowEqual);

  const isPhone = type.indexOf('phone') !== -1;
  const isRegister = type === 'phone-register';
  const isLogin = type === 'phone-login';

  // 表单数据收集
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <PhoneEmailWrapper type={type}>
      
      {/* 中间区域显示的内容 */}
      <Content>
        
        {/* username */}
        <Oinput>
          { isRegister ? <p>手机号:</p> : '' }
          <div className={`inputU ${type}-inputU`}>
            {
              isPhone ? (
                <select name="prefix">
                  <option value="+86">+86</option>
                  <option value="+852">+852</option>
                </select>
              ) : ''
            }
            {/* phone-login phone-register email */}
            <input type="text" placeholder={isPhone ? "请输入手机号" : "请输入账号"} ref={usernameRef}/>
          </div>
        </Oinput>
        
        {/* password */}
        <Oinput>
          { isRegister ? <p className="passwrodTitle">密码:</p> : '' }
          <div className={`inputP ${type}-inputP`}>
            <input type="password" placeholder="请输入密码" ref={passwordRef}/>
          </div>
        </Oinput>

        <Login>
          {
            isRegister ? '' : (
              // login email
              <div className="phone-login-email-top">
                <label htmlFor="auto-login">
                  <input type="checkbox" id="auto-login" defaultChecked={autoLogin} onChange={e => {
                    dispatch(isAutoLogin(e.target.checked));
                  }}/>
                  自动登录
                </label>
                <span onClick={e => { alert(`暂时不支持找回密码功能`); }}>忘记密码?</span>
              </div>
            )
          }
          {/* register login email*/}
          <div className="icon sprite_button2" onClick={ e => { dispatch(loginRequest(type,{
              username: usernameRef.current.value,
              password: passwordRef.current.value,
            })); } }>
            <i className="sprite_button2">{isRegister ? '下一步' : '登录'}</i> 
          </div>
        </Login>

      </Content>

      {/* 底部栏显示的内容 */}
      <PhoneEmailFooter>

        <span className={isRegister ? 'back-login' : 'other-way'} onClick={e => { dispatch(setContent(
          {
            type: 'other',
            title: '登录'
          }
        )); }}>{'<'}&nbsp;{isRegister ? '返回登录' : '其它登录方式'}</span>

        { 
          isLogin ? (
              <span className="free-register" onClick={e => { dispatch(setContent({
                type: 'phone-register',
                title: '手机号注册'
              })); }}>没有账号?&nbsp;免费注册&nbsp;{'>'}</span>
            ) : ''
        }

      </PhoneEmailFooter>

    </PhoneEmailWrapper>
  )
})
