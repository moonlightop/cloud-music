import React, { memo } from 'react';

import { SetPitureSize } from '@utils/format-utils';

import {
  ZHArtistListItemWrapper
} from './style';

export default memo(function ZHArtistListItem(props) {
  const { info,index } = props;
  
  return (
    <ZHArtistListItemWrapper isImg={index < 10}>
      {
        index < 10 && (
          <img src={SetPitureSize(info.img1v1Url, 130)} alt="" className="image"/>
        )
      }
      <div className="info">
        <span className="name">{info.name}</span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ZHArtistListItemWrapper>
  );

})
