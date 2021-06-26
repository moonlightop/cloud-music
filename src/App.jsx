
// 导入第三方包
import React,{ memo, Suspense, Fragment } from 'react';
import { renderRoutes } from "react-router-config";

// 导入工具类：网络请求，util...
import { routes } from './routes';

// 导入组件
import ZHAppHeader from '@components/app-header';
import ZHAppFooter from '@components/app-footer';
import ZHBackTop from '@components/back-top';
import ZHNavNProgress from '@components/lazy-nprogress';
import ZHLoading from '@components/loading';
import ZHMusicPlayerBar from '@pages/player/music-player-bar';


export default memo(function App(props) {

  return (
    <Fragment>
      <ZHAppHeader/>
      <Suspense fallback={ <> <ZHNavNProgress/> <ZHLoading/></> }>
        {/* 
          父路由注册,需要继续在子路由注册,
          并且渲染到的子路由props徐行中添加route属性 
        */}
        { renderRoutes(routes) }
      </Suspense>
      <ZHAppFooter/>
      <ZHMusicPlayerBar/>
      <ZHBackTop/>
    </Fragment>
  );

})
