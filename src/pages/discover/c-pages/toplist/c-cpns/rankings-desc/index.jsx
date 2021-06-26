import React, { Fragment, memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCurRankingUpdateFrequency, getPlayListDetail } from '@redux/actions/discover/toplist';

import ZHNavLink from '@components/navlink';
import { SetPitureSize } from '@utils/format-utils';

import {
  RankingsDescWrapper
} from './style';


const ZHRankingsDesc = memo(function(props) {
  const { rankingsTheme,rankingsInfo } = props;
  const [ showIndex,setShowIndex ] = useState(-1);
  // 获取飙升榜的更新频率
  const updateFrequency = rankingsInfo[0][0] && rankingsInfo[0][0].updateFrequency;

  const dispatch = useDispatch();
  useEffect(() => {
    if(rankingsTheme[0] === '云音乐特色榜' && updateFrequency)
      dispatch(changeCurRankingUpdateFrequency(updateFrequency));
      
  },[dispatch,rankingsTheme,updateFrequency])


  return (
    <RankingsDescWrapper>
      {
        rankingsTheme.map((theme,index) => {
          return (
            <Fragment key={theme}>
              <p className="theme-name">{theme}</p>
              <div className="list">
                {
                  rankingsInfo[index].map((ranking) => {
                    return (
                      <ZHNavLink 
                        to={`/discover/toplist?id=${ranking.id}`} 
                        key={ranking.id} 
                        onClick={e => {
                          setShowIndex(ranking.id);
                          dispatch(getPlayListDetail(ranking.id));
                          dispatch(changeCurRankingUpdateFrequency(ranking.updateFrequency));
                        }}
                        className={showIndex === ranking.id ? 'actived-toplist' : ''}
                      >

                        <img className="pic" src={SetPitureSize(ranking.coverImgUrl,40)} alt={ranking.description}/>
                        <div className="title">
                          <p className="ranking-name">{ranking.name}</p>
                          <p className="update-time">{ranking.updateFrequency}</p>
                        </div>
                      </ZHNavLink>
                    );
                  })
                }
              </div>
            </Fragment>
          );
        })
      }
    </RankingsDescWrapper>
  );

})

ZHRankingsDesc.propTypes = {
  rankingsTheme: PropTypes.array.isRequired,
  rankingsInfo: PropTypes.array.isRequired
}
ZHRankingsDesc.defaultProps = {
  rankingsTheme: [],
  rankingsInfo: []
}

export default ZHRankingsDesc;