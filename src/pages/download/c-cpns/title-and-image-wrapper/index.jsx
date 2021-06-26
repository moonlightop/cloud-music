import React, { memo } from 'react';
import {
  TilteAndImageWrapper
} from './style.js';

export default memo(function ZHTitleAndImageWrapper(props) {
  const { TitleAndImage } = props;

  return (
    <TilteAndImageWrapper>
      {
        TitleAndImage.map((item,index) => {
          const { h3Title,pTitle,imgSrc } = item;

          return (
            <div className="title-and-image-item" key={h3Title}>
              {/* 偶数index，图片在右边；奇数index，图片在左边 */}
              { 
                index % 2 !== 0 ? (
                  <img src={imgSrc} alt={h3Title}/>
                ) : ''
              }

              {/* 用dangerouslySetInnerHTML来解决字符串中函数标签！ */}
              <div className="title">
                <h3 dangerouslySetInnerHTML={{__html:h3Title}}></h3>
                <p dangerouslySetInnerHTML={{__html: pTitle}}>
                </p>
              </div>
              { 
                index % 2 === 0 ? (
                  <img src={imgSrc} alt={h3Title}/>
                ) : ''
              }
            </div>
          );
        }) 
      }
    </TilteAndImageWrapper>
  )
})
