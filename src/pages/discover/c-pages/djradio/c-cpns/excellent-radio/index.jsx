import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import ZHThemeHeader from '@components/theme-header';
import ZHExcellentRadioCover from '@components/excellent-radio-cover';

import {
  ExcellentRadioWrapper 
} from './style';


export default memo(function ZHExcellentRadio(props) {
  

  const { excellentRadios } = useSelector(state => ({
    excellentRadios: state.getIn(['djradio','excellentRadios']),

  }), shallowEqual)


  return (
    <ExcellentRadioWrapper>
      <ZHThemeHeader 
        themeName="优秀新电台" 
        isIcon={false}
        isComment={false}  
      />
      <ul className="excellent-content">
        {
          excellentRadios.length > 0 && excellentRadios.slice(0,5).map(radio => {
            return (
              <ZHExcellentRadioCover 
                radio={radio} 
                key={radio.id} 
                size="200px"
              />
            );
          })
        }
      </ul>
    </ExcellentRadioWrapper>
  );
})
