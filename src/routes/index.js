
import { lazy } from 'react';
import { Redirect } from 'react-router';

//  0 - 发现音乐下的子导航栏
const ZHDiscover = lazy(() => import('@pages/discover'));

/**
 *  1 - 发现音乐
 *    1.1 - 推荐
 *    1.2 - 排行榜
 *    1.3 - 歌单
 *    1.4 - 主播电台
 *    1.5 - 歌手
 *    1.6 - 新歌上架  
 */
const ZHRecommend = lazy(() => import('@pages/discover/c-pages/recommend'));
const ZHTopList = lazy(() => import('@pages/discover/c-pages/toplist'));
const ZHPlayList = lazy(() => import('@pages/discover/c-pages/playlist'));
const ZHDjRadio = lazy(() => import('@pages/discover/c-pages/djradio'));
const ZHArtist = lazy(() => import('@pages/discover/c-pages/artist'));
const ZHAlbum = lazy(() => import('@pages/discover/c-pages/album'));

const ZHSong = lazy(() => import('@pages/player/song'));
/**
 *    2 - 我的音乐
 *    3 - 朋友
 *    4 - 下载客户端
 */
const ZHMy = lazy(() => import('@pages/my'));
const ZHFriend = lazy(() => import('@pages/friend'));
const ZHDownload = lazy(() => import('@pages/download'));


/* 

  没必要写
    1. react-router-config
        1.1   render函数体内代码 -> 跳转路由前 (知道需要切换路由前)
    2. 路由组件useEffect(func,[])
        2.1   func函数体内 -> 路由跳转后 (路由切换完成)
        2.2   func返回的函数体内 -> 路由组件卸载前 (知道需要切换路由时，才卸载当前路由)

  路由切换触发顺序, 2.2从一个路由切换到另一个路由时触发：
        1.1 -> [2.2] -> 2.1 （闭环循环触发）

*/

const ZHNoFound = lazy(() => import('@components/404-No-Found'));
// const hashPath = window.location.hash.slice(1);
// 或者源码做一个404处理，不然只能这样解决了

export const routes = [
  {
    path: '/',
    exact: true,
    component: ZHDiscover,
    routes: [
      {
        path: '/',
        exact: true,
        component: ZHRecommend,
      }
    ],
  },
  {
    path: '/discover',
    component: ZHDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        component: ZHRecommend,
      },
      {
        path: '/discover/toplist',
        component: ZHTopList,
        routes: [
          {
            render: () => <Redirect to="/discover/toplist"/>,
          }
        ]
      },
      {
        path: '/discover/playlist',
        component: ZHPlayList,
        routes: [
          {
            render: () => <Redirect to="/discover/playlist"/>,
          }
        ]
      },
      {
        path: '/discover/djradio',
        component: ZHDjRadio,
      },
      {
        path: '/discover/artist',
        component: ZHArtist,
        routes: [
          {
            render: () => <Redirect to="/discover/artist"/>,
          }
        ]
      },
      {
        path: '/discover/album',
        component: ZHAlbum,
        routes: [
          {
            render: () => <Redirect to="/discover/album"/>,
          }
        ]
      },
      {
        // 前面路由都没匹配到，404路由
        // <Route component={ZHNoFound}/>
        component: ZHNoFound,
      }
    ]
  },
  {
    path: '/my',
    component: ZHMy,
  },
  {
    path: '/friend',
    component: ZHFriend,
  },
  {
    path: '/download',
    component: ZHDownload,
  },
  {
    path: '/song',
    component: ZHSong,
  },
  {
    // 前面路由都没匹配到，404路由
    // <Route component={ZHNoFound}/>
    component: ZHNoFound,
  }
];