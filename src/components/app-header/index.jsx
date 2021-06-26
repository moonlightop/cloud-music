
import React, { memo, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { navgatorList } from '@common/local-data/app-header-navgator-list';
import { isHideModal } from '@redux/actions/login';

import ZHNavLink from '@components/navlink';
import ZHLogin from '@components/login';
import ZHDiscoverNav from './c-cpns/discover-nav';

import {
  AppHeaderWrapper,
  AppHeader,
  LeftContent,
  RightContent,
  SubNavUp
} from './style.js';


export default withRouter(memo(function ZHAppHeader(props) {
  const { pathname } = props.location;

  // 控制输入框label显示
  const [hideTitle,setHideTitle] = useState(false);

  // 控制活跃路由添加类 active-nav
  let [currentPath,setCurrentPath] = useState(pathname);
  if(currentPath !== pathname) {
    currentPath = pathname;
  }

  // 通过hooks获取redux中登录框的状态（用visibility控制）
  const dispatch = useDispatch();
  const { hideModal } = useSelector(state => ({
    hideModal: state.getIn(['login','hideModal']),

  }), shallowEqual);

  // console.log( currentPath === '/' || currentPath.indexOf('/discover'));

  return (
    <>
      { /* 
        网易云音乐的顶部宽度随浏览器宽度变化而变化 
        此处用flex做布局！
      */}
      <AppHeaderWrapper>
        <AppHeader>
          <div className="wrapper wrap-v1">

            <LeftContent>
              <h1 className="logo topbar_sprite">
                <a href="#/" className="title">网易云音乐</a>
              </h1>
              {
                navgatorList.map((navItem,index) => {
                  const { title,key,to } = navItem;

                  if (index === 3 || index === 4) {
                    return (
                      <span key={'-' + key} className="selected-item">
                        <a target="_blank" rel="noopener noreferrer" href={to}>{title}</a>  
                      </span>  
                    )
                  }
                  return (
                    <span key={'-' + key} className="selected-item">
                      <ZHNavLink 
                        key={key} to={to} 
                        // 动态添加类名
                        activeClassName={ currentPath === to ? 'active-nav' : '' }
                        className={ to === '/' && currentPath.indexOf('/discover') !== -1 ? 'active-nav' : '' } // 特殊情况
                        onClick={ e => { setCurrentPath(to); } }
                      >
                        <em>{title}</em>
                        <sub className="topbar_sprite icon"></sub>
                      </ZHNavLink>  
                    </span>  
                  )
                })
              }
            </LeftContent>
            
            <RightContent>
              <div className="searchBg topbar_sprite">
                <span className="sparent">
                  <input id="searchInput" type="text" className="search" onFocus={e => {setHideTitle(true);}} onBlur={e => setHideTitle(false)}/>
                  <label htmlFor="searchInput" className="search-title" style={{display: hideTitle ? 'none' : '',}} 
                        >音乐/视频/电台/用户</label>
                </span>
              </div>
              <a className="center" target="_blank" rel="nooperer noreferrer" href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter">创作者中心</a>
              <a className="login" rel="nooperer noreferrer" href="##" 
                  onClick={  e => { 
                  e.preventDefault();
                  // 显示登录框
                  if(hideModal) dispatch(isHideModal(false));
                }}
              >登录</a>
            </RightContent>
          
          </div>
        </AppHeader>
        {/* 新版网易云将它去除掉了 */}
        { 
          currentPath === '/' || currentPath.indexOf('/discover') !== -1 ? 
            <ZHDiscoverNav /> : <SubNavUp className="subnav-up"></SubNavUp> 
        }
      </AppHeaderWrapper>
      {/* login组件的渲染 */}
      { hideModal ? '' : <ZHLogin/>}
    </>
  );
  
}))
