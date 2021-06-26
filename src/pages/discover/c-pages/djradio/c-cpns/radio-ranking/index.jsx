import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRadioRanking } from '@redux/actions/discover/djradio';

import ZHThemeHeader from '@components/theme-header';
import ZHRankingRadioCover from '@components/ranking-radio-cover';
import ZHPagination from '@components/pagination';

import {
  RadioRankingWrapper 
} from './style';


export default memo(function ZHRadioRanking(props) {
  
  const dispatch = useDispatch();
  const { curRadioType,radioRanking } = useSelector(state => ({
    curRadioType: state.getIn(['djradio','curRadioType']),
    radioRanking: state.getIn(['djradio','radioRanking'])

  }), shallowEqual);

  useEffect(() => {
    if (curRadioType !== -1) {
      dispatch(getRadioRanking({ cateId: curRadioType,offset: 0, limit: 35 }));
    }

  },[dispatch,curRadioType])

// console.log(radioRanking.djRadios)

  return (
    <RadioRankingWrapper>
       <ZHThemeHeader 
        themeName="电台排行榜" 
        isIcon={false} 
        themeRoute={'/discover/djradio/recommend'}
      />
      <ul className="ranking-content">
        {
          radioRanking.hasMore && radioRanking.djRadios.map(radio => {
            return (
              <ZHRankingRadioCover
                radio={radio} 
                key={radio.id} 
                size="120px"
              />
            );
          }) 
        }
      </ul>
      { radioRanking.hasMore && <ZHPagination total={radioRanking.count} pageNum={34}/> }
    </RadioRankingWrapper>
  );
})
