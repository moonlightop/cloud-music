import React, { Fragment, memo } from 'react';

import downloadPhoneQr from '@assets/img/download/download-phone-qr.png';
import {
  ToolTipWrapper
} from './style.js';

export default memo(function ZHToolsTip(props) {
  const { ToolsTip,Qr,layout } = props;
  // 二维码相对wrapper定位就行了！
  return (
    <ToolTipWrapper>
      <div className={ToolsTip ? "tool-tip" : (layout ? "tool-qr-layout" : "tool-qr")} 
         onClick={e => { e.stopPropagation() }}
    >
      { layout ? '' : <div className="arrow"></div> }
      <div className="inner">
        <div className="modal">
          {
            ToolsTip && ToolsTip.map(tool => {
              const { title,classname,href,showModal } = tool;
              return (
                <a target="_blank" rel="noreferrer" key={showModal ? '##' : href} href={showModal ? '##' : href} hidefocus="true"
                   className="btn"
                   onClick={e => { e.preventDefault(); }}
                >
                  <i className={ `${classname}`}></i>
                  <em>{title}</em>
                </a>
              );
            })
          }
          {
            Qr && Qr.map(qr => {
              return (
                <Fragment key={qr.title}>
                  <img src={downloadPhoneQr} alt={qr.alt} className="qr-image"/>
                  <p>{qr.title}</p>
                </Fragment>
              );
            })
          }

        </div>
      </div>
    
    </div>
    </ToolTipWrapper>
  )
})
