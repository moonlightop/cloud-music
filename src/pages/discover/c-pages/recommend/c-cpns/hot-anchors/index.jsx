import React, { memo } from 'react';

import { hotAnchors } from '@common/local-data/hot-anchors';

import { HotAnchorsWrapper } from './style';
import { SetPitureSize } from '@utils/format-utils';

export default memo(function ZHHotAnchors(props) {

  return (
    <HotAnchorsWrapper>
      <h3 className="hot-anchor-header">热门主播</h3>
      <ul className="hot-anchor-list">
        {
          hotAnchors.length > 0 && hotAnchors.map(anchor => {
            return (
              <li key={anchor.picUrl}>
                <a href={anchor.url} className="piture">
                  <img src={SetPitureSize(anchor.picUrl,40)} alt={anchor.name} />
                </a>
                <div className="title">
                  <a href={anchor.url} className="anchor-name">
                    <p>{anchor.name}</p>
                  </a>
                  <p className="anchor-desc">{anchor.position}</p>
                </div>
              </li>
            );

          })
        }
      </ul>
    </HotAnchorsWrapper>
  );

})
