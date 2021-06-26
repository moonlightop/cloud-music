import React, { memo } from 'react';
import {
  ContentWrapper
} from './style.js';

export default memo(function ZHContent(props) {
  const { title,src,imgClassName,downloadHref, mac,windows,phoneMac,android } = props.Content;
  const isComputer = imgClassName === 'computer';
  const { setQR,isQR,setToolsTip } = props;

  return (
    <ContentWrapper>
      <div className={isComputer ? "content-left" : "content-right"}>
        <p className="title">{title}</p>
        {/* require导入的只能是字符串路径，通过import配合变量来导入图片 */}
        <img src={src} alt={title} className={imgClassName}/>
        <div className="platform">
          <span className={isComputer ? mac : phoneMac}></span>
          <span className={isComputer ? windows : android}>
            <i></i>
            { isComputer ? 'Windows' : 'Android'}
          </span>
        </div>
        {
          downloadHref ? (
            <div className="btn">
              <a target="_blank" rel="noreferrer" href={downloadHref}>下载电脑端</a>
            </div>
          ) : (
            <div className="btn" onClick={e => { e.stopPropagation();setQR(!isQR);setToolsTip(false); }}>
              <i></i>
              下载手机端
            </div>
          )
        }
      </div>
    </ContentWrapper>
  )
})
