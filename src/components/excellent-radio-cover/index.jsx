import React, { memo } from 'react';
import PropTypes from 'prop-types';

import ZHNavLink from '@components/navlink';
import { SetPitureSize } from '@utils/format-utils';

import {
  DjRadioCoverWrapper
} from './style';

const ZHExcellentRadioCover = memo(function(props) {
  const { radio,size } = props;

  // console.log(radio)

  return (
    <DjRadioCoverWrapper size={size}>
      <ZHNavLink to={"/djradio?id=" + radio.id} className="pic">
        <img src={SetPitureSize(radio.picUrl,size)} alt={radio.lastUpdateProgramName} />
      </ZHNavLink>
      <div className="title">
        <h3 className="text-nowrap">
          <ZHNavLink to={"/djradio?id=958007276" + radio.id}>{radio.name}</ZHNavLink>
        </h3>
        <p className="text-nowrap">{radio.rcmdtext}</p>
      </div>
    </DjRadioCoverWrapper>
  );

})

ZHExcellentRadioCover.propTypes = {
  radio: PropTypes.object.isRequired,
  size: PropTypes.string
}
ZHExcellentRadioCover.defaultProps = {
  radio: {},
  size: '200px'
}


export default ZHExcellentRadioCover;