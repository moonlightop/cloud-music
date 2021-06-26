import React, { memo } from 'react';

import ZHSubThemeHeader from '../sub-theme-header';

import { DownloadAppWrapper } from './style';

export default memo(function ZHDownloadApp(props) {
  const { songId } = props; 
  
  return (
    <DownloadAppWrapper>
      <ZHSubThemeHeader SubThemeName="网易云音乐多端下载"/>
      <ul className="bg sprite_download_icon">
        <li><a href="https://itunes.apple.com/cn/app/id590338362" className="ios sprite_download_icon" rel="noreferrer" target="_blank">iPhone</a></li>
        <li><a href="https://music.163.com/api/pc/download/latest" className="pc sprite_download_icon" rel="noreferrer" target="_blank">PC</a></li>
        <li><a href="https://music.163.com/api/android/download/latest2" className="aos sprite_download_icon" rel="noreferrer" target="_blank">Android</a></li>
      </ul>
      <p className="desc">同步歌单，随时畅听320k好音乐</p>
      <a href={`/#/wiki/song?songId=${songId}`} rel="noreferrer" target="_blank">补充或修改歌曲资料&gt;</a>
    </DownloadAppWrapper>
  );

})
