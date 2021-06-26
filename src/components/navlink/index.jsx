import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

export default memo(function ZHNavLink(props) {
  /**
   * NavLink
   *    activeClassName: 默认active
   *    exact: 默认为false，/会匹配所有子路由！
   *    strict: 默认为false，匹配路径后/
   *    isActive: 默认空函数 激活连接后的处理，(match, location) => { ...其它逻辑 }
   */

  return (
    <NavLink {...props}></NavLink>
  );

})
