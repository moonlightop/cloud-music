import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ZHNavLink from '@components/navlink';

import { SetPitureSize } from '@utils/format-utils';

import {
  RankingRadioCoverWrapper
} from './style';

const ZHRankingRadioCover = memo(function (props) {
  
  const { radio,size } = props;
  

  return (
    <RankingRadioCoverWrapper size={size}>
      <ZHNavLink to={"/djradio?id=" + radio.id} className="pic">
        <img src={SetPitureSize(radio.picUrl,size)} alt={radio.lastUpdateProgramName} />
      </ZHNavLink>
      <div className="title">
        <h3 className="text-nowrap">
          <ZHNavLink to={"/djradio?id=958007276" + radio.id}>{radio.name}</ZHNavLink>
        </h3>
        <p className="text-nowrap">
          <i className="icon-user sprite_icon2"></i>
          {radio.dj.nickname}
        </p>
        <p className="desc">
          <span className="phase">共{radio.programCount}期</span>
          <span className="subscribe">订阅{radio.subCount}次</span>
        </p>
      </div>
    </RankingRadioCoverWrapper>
  );

});

ZHRankingRadioCover.propTypes = {
  radio: PropTypes.object.isRequired,
  size: PropTypes.string

}
ZHRankingRadioCover.defaultProps = {
  radio: {},
  size: '120px'
}


export default ZHRankingRadioCover;
