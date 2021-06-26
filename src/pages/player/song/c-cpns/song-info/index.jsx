import React, { memo, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { SetPitureSize } from '@utils/format-utils';
import ZHControl from '@components/control';

import {
  SongInfoWrapper,
  SongInfoLeft,
  SongInfoRight
} from './style';


export default memo(function ZHSongInfo(props) {

  const { currentSong,lyrics } = useSelector(state => ({
    currentSong: state.getIn(['player','currentSong']),
    lyrics: state.getIn(['player','lyrics'])

  }),shallowEqual);

  const [ isOpen,setIsOpen ] = useState(false);

  const picUrl = currentSong.al && SetPitureSize(currentSong.al.picUrl,130);
  const songName = currentSong.al && currentSong.al.name;


  return (
    <SongInfoWrapper>
      <SongInfoLeft>
        <div className="left-picture">
          { picUrl && <img src={picUrl} alt={songName}/> }
          <span className="song-cover sprite_cover"></span>
        </div>
        <div className="link-player">
          <i className="sprite_icon2"></i>
          <a href="##" onClick={e => e.preventDefault()}>生成外链播放器</a>
        </div>
      </SongInfoLeft>

      <SongInfoRight>
        <div className="song-name">
          <i className="icon-song-type sprite_icon2"></i>
          <span>{songName}</span>
        </div>
        <div className="song-desc">
          <p>
            歌手：
            {
              currentSong.ar && currentSong.ar.map((author,index) => {
                return (
                  <span key={author.id}>{author.name} {index === (currentSong.ar.length - 1) ? '' : '/'}</span>
                );
              })  
            }
          </p>
          <p>所属专辑： <span>{songName}</span></p>
        </div>

        <ZHControl info={['播放','收藏','分享','下载',`评论`]} songId={currentSong.id}/>

        <div className="lyrics">
          {
            lyrics && lyrics.slice(0,13).map(lyric => {
              return (
                <p key={lyric.time}>{lyric.content}</p>
              );
            })
          }
          {
            isOpen && lyrics.slice(13,).map(lyric => {
              return (
                <p key={lyric.time}>{lyric.content}</p>
              );
            })
          }
          <span className="open" onClick={e => setIsOpen(!isOpen)}>
            { isOpen ? '收起' : '展开' }
            <i className={`sprite_icon2 ${isOpen ? 'icon-top-arrow' : 'icon-bottom-arrow'}`}></i>
          </span>
        </div>
        <p className="error" onClick={e => e.preventDefault()}>报错</p>
      </SongInfoRight>

    </SongInfoWrapper>
  );

})
