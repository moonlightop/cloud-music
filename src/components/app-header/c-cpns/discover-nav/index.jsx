
import React, { memo, useState } from 'react';
import { withRouter } from 'react-router-dom';

import ZHNavLink from '@components/navlink';
import { DiscoverNavData } from '@common/local-data/discover-nav';

import { 
  DiscoverNavWrapper,
  DiscoverNav 
} from './style.js';

export default withRouter(memo(function ZHDiscoverNav(props) {
  const { pathname } = props.location;
  // 控制活跃路由添加类 active-sub-nav
  let [currentPath,setCurrentPath] = useState(pathname);
  if(currentPath !== pathname) {
    currentPath = pathname;
  }

  return (
    <DiscoverNavWrapper>
      <div className="discover-nav-wrapper wrap-v1">
      <DiscoverNav>
        {
          DiscoverNavData.map(nav => {
            const { title,to } = nav;
            return (
              <ZHNavLink 
                to={to} key={to} 
                // 动态添加类名
                activeClassName={ currentPath === to ? "active-sub-nav" : ""  }
                className={ currentPath === '/' && to === '/discover' ? "active-sub-nav" : "" }  // 特殊情况
                onClick={ e => { setCurrentPath(to); } }
              >{title}</ZHNavLink>
            );
          })
        }
      </DiscoverNav>
      </div>
    </DiscoverNavWrapper>
  );

}))
