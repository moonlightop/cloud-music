import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import ZHCarousel from './c-cpns/carousel';
import ZHHotRecommend from './c-cpns/hot-recommend';
import ZHNewAlbum from './c-cpns/new-album';
import ZHRankingList from './c-cpns/ranking-list';
import ZHUserLogin from './c-cpns/user-login';
import ZHResidentSinger from './c-cpns/resident-singer';
import ZHHotAnchors from './c-cpns/hot-anchors';

import { 
  RecommendWrapper,
  RecommendContent
} from './style';


export default memo(function ZHRecommend(props) {

  return (
    <RecommendWrapper>
      {/* 轮播图 */}
      <ZHCarousel />
      <RecommendContent className="content wrap-v2">
        <div className="left-content">
          {/* 热门推荐 */}
          <ZHHotRecommend/>
          {/* 新碟上架 */}
          <ZHNewAlbum/>
          {/* 榜单 */}
          <ZHRankingList/>
        </div>
        <div className="right-content">
          <ZHUserLogin />
          <ZHResidentSinger />
          <ZHHotAnchors />
        </div>
      </RecommendContent>
      {/* 重定向no-found组件的子路由 */} 
      { renderRoutes(props.route.routes) }
    </RecommendWrapper>
  );

})
