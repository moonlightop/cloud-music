import React, { memo, useState } from 'react';

import ZHToolsTip from './c-cpns/tool-tip';
import ZHContent from './c-cpns/content';
import ZHTitleAndImageWrapper from './c-cpns/title-and-image-wrapper';

import { ToolsTip,Qr } from '@common/local-data/download-tool-tip';
import { LeftContent,RightContent,TitleAndImage } from '@common/local-data/download-content';

import {
  DowloadWrapper,
  DownloadHeader
} from './style.js';


export default memo(function ZHDownload() {
  const [isToolsTip,setToolsTip] = useState(false);
  const [isQR,setQR] = useState(false);

  return (
    <DowloadWrapper onClick={e => { 
      setToolsTip(false);
      setQR(false); 
    }}>

      {/* 头部内容 */}
      <DownloadHeader className="wrap-v1">

        {/* 头部图标+文字 */}
        <div className="icon" onClick={e => { e.stopPropagation();setToolsTip(!isToolsTip);setQR(false); }}>
          <i className="bottom-arrow"></i>
          其它操作系统客户端
        </div>

        {/* 点击其它操作系统客户端显示的组件 */}
        {isToolsTip ? <ZHToolsTip ToolsTip={ToolsTip}/> : ''}

        <div className="content">
          <ZHContent Content={LeftContent}/>
          <ZHContent setQR={setQR} isQR={isQR} setToolsTip={setToolsTip} Content={RightContent}/>
        </div>
     
        {/* 点击下载手机端的二维码 */}
        {isQR ? <ZHToolsTip Qr={Qr}/> : ''}

        {/* fixed布局的二维码 */}
        <ZHToolsTip Qr={Qr} layout="fixed"/>
        
      </DownloadHeader> 

      {/* 余下内容 */}
      <ZHTitleAndImageWrapper TitleAndImage={TitleAndImage}/>

    </DowloadWrapper>
  )
})
