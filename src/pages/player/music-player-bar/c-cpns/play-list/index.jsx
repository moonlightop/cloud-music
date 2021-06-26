import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeIsPlay, changePlayList, getCurrentSong, delSong } from '@redux/actions/player';

import ZHNavLink from '@components/navlink';

import {
  PlayListWrapper,
  PlayListHeader,
  PlayListContent,
  PlayListLeftContent,
  PlayListRightContent
} from './style';
import { formatMinuteSecond, getPlayUrl } from '@utils/format-utils';

export default memo(function ZHPlayList(props) {
  const { setShowPlayList } = props;

  const dispatch = useDispatch();
  const { playList,lyrics,currentSong,currentLyricIndex } = useSelector(state => ({
    playList: state.getIn(['player','playList']),
    lyrics: state.getIn(['player','lyrics']),
    currentSong: state.getIn(['player','currentSong']),
    currentLyricIndex: state.getIn(['player','currentLyricIndex'])

  }), shallowEqual);

  const play = useCallback((id,type="play") => {
    dispatch(getCurrentSong(id,type));
    dispatch(changeIsPlay(true));
    
  },[dispatch]);

  const delSongById = useCallback((e,id) => {
    e.stopPropagation(); 
    dispatch(delSong(id));

  },[dispatch]);

  /*
    通过isSlideringRef.current来存储当前滚动条是否在滚动的状态，
      滚动过程则为true
      如果没有滚动的情况下（false）
        则根据currentLyricIndex更新lyricTempRef.current，然后设置相应的top
  */ 
  const isSlideringRef = useRef(false);
  const lyricTempRef = useRef(currentLyricIndex);
  
  const sliderControlRef = useRef();
  const lyricContentRef = useRef();
  const contentRef = useRef();
  
  const downUpdateTop = useCallback(e => {
    // 不需要阻止冒泡事件，因为content没有绑定了mousedown事件
    // e.stopPropagation();
    isSlideringRef.current = true;
    // 将[0,260]区间的数映射到[0,playList.length]
    const bottom = 260 - (260 / lyrics.length) - 2;
    let newTop = e.nativeEvent.offsetY;
    newTop = newTop < 1 ? 1 : (newTop > bottom ?  bottom : newTop);
    sliderControlRef.current.style.top = newTop + 'px';
    
    // 第四句歌词准备滚动，第五句滚 * 1：[0,lyrics.length - 4]
    const curLyricIndex = Math.ceil((newTop / bottom) * lyrics.length) - 4;
    if(curLyricIndex >= 0)
      lyricContentRef.current.style.top = -32 * curLyricIndex + 'px';

    // console.log(curLyricIndex);

  },[lyrics]);

  const sliderTop = useCallback(e => {
    e.stopPropagation();
    sliderControlRef.current.style.transition = 'none';
    lyricContentRef.current.style.transition = 'none';
    isSlideringRef.current = true;
    
    contentRef.current.onmousemove = (event) => {

      const bottom = 260 - (260 / lyrics.length) - 2; // 效果看起刚刚对齐
      let newTop = parseInt(sliderControlRef.current.style.top) + event.movementY;
      newTop = newTop < 1 ? 1 : (newTop > bottom ?  bottom : newTop);
      sliderControlRef.current.style.top = newTop + 'px';

      // 第四句歌词开始滚动，第五句滚 * 1：[0,lyrics.length - 4]
      const curLyricIndex = Math.ceil((newTop / bottom) * lyrics.length) - 4;
      if(curLyricIndex >= 0)
        lyricContentRef.current.style.top = -32 * curLyricIndex+ 'px';
  
      // console.log(curLyricIndex);

    }

    function sliderTopCallback(event) {
      event.stopPropagation();
      sliderControlRef.current.style.transition = 'top .5s ease-in-out';
      lyricContentRef.current.style.transition = 'top 0.5s linear';
      isSlideringRef.current = false;
      contentRef.current.onmousemove = null;
    }

    contentRef.current.onmouseup = sliderTopCallback;


  },[lyrics]);

  if(!isSlideringRef.current) {
    lyricTempRef.current = currentLyricIndex;
  }
  // console.log(isSlideringRef.current,lyricTempRef.current)

  /*
    左侧播放列表的滚动条
  */
  const [ showScroll,setShowScroll ] = useState(false); // 控制左侧播放列表滚动条的显隐
  const scrolRef = useRef();
  const songListRef = useRef();

  const blineDownUpdate = useCallback(e => {
    e.stopPropagation();
    // 将[0,260]区间的数映射到[0,playList.length], -1是为了更美观
    const bottom = 260 - Math.floor(260 / playList.length) - 2;
    let newTop = e.nativeEvent.offsetY;
    newTop = newTop < 1 ? 1 : (newTop > bottom ?  bottom : newTop);
    scrolRef.current.style.top = newTop + 'px';

    let index = Math.floor(playList.length * (newTop / 260));
    index = index === playList.length ? index - 1 : index; 
    songListRef.current.style.top = -28 * index + 'px';

  },[playList]);

  const scrolDownUpdate = useCallback(e => {
    e.stopPropagation();

    contentRef.current.onmousemove = (event) => {

      const bottom = 260 - Math.floor((260 / playList.length)) - 2; // 效果看起刚刚对齐
      let newTop = parseInt(scrolRef.current.style.top) + event.movementY;
      newTop = newTop < 1 ? 1 : (newTop > bottom ?  bottom : newTop);
      scrolRef.current.style.top = newTop + 'px';

      // 每个li是 28px：[0 ~ playList.length]
      let index = Math.floor(playList.length * (newTop / 260));
      index = index === playList.length ? index - 1 : index; 
      songListRef.current.style.top = -28 * index + 'px';
      
    }    
    contentRef.current.onmouseup = () => {
      e.stopPropagation();
      contentRef.current.onmousemove = null;
    }

  },[playList])

  useEffect(() => {
    if(playList.length > (260 / 28)) {
      setShowScroll(true);
    }else {
      setShowScroll(false);
    }

  },[playList])


  return (
    <PlayListWrapper>
      <PlayListHeader className="sprite_player_list_bg">

        <div className="left">
          <h3>播放列表({playList.length})</h3>
          <div className="other-utils">
            <span title="收藏全部" onClick={e => alert('暂未实现')}>
              <i className="fac sprite_playlist_icon"></i>
              收藏全部
            </span>
            <span className="divide"></span>
            <span title="清除" onClick={e => dispatch(changePlayList([]))}>
              <i className="clear sprite_playlist_icon"></i>
              清除
            </span>
          </div>
        </div>
        
        <div className="right">
          <span className="song-name">{currentSong.name}</span>
          <i className="icon-close sprite_playlist_icon" onMouseDown={e => setShowPlayList(false)}></i>
        </div>
      
      </PlayListHeader>
    
      <PlayListContent className="sprite_player_list_bg" ref={contentRef}>
        {/* //music.163.com/api/img/blur/109951165834970489 */}
        { currentSong.al && <img className="blur_bg" src={`https://music.163.com/api/img/blur/${currentSong.al.pic_str}`} alt=''/> }
        <div className="left-mask"></div>
        <PlayListLeftContent>
          {
            playList.length === 0 && (
              <div className="nocnt">
                <i className="icon-listen sprite_playlist_icon"></i>你还没有添加任何歌曲<br/>去首页
                <ZHNavLink to="/discover" className="f-tdu">发现音乐</ZHNavLink>，或在
                <ZHNavLink to="/my" className="f-tdu">我的音乐</ZHNavLink>收听自己收藏的歌单。
              </div>
            )
          }
          <ul className="song-list" ref={songListRef}>
            {
              playList.length > 0 && 
              playList.map(song => {
                return (
                  <li 
                    key={song.id} 
                    className={currentSong.id === song.id ? 'actived' : ''}
                    onClick={e => play(song.id)}
                  >
                    <div className="song-name">
                      <i 
                        className="icon-play sprite_playlist_icon" 
                        style={{ visibility: currentSong.id === song.id ? 'visible' : 'hidden' }}
                      ></i>
                      <span>{song.name}</span>
                    </div>
                    <div>
                      <div className="icns">
                        <i 
                          title="删除" 
                          className="icon-delete sprite_playlist_icon" 
                          onClick={e => delSongById(e,song.id) }
                        >删除</i>
                        <a href={getPlayUrl(song.id)} target="_blank" rel="noreferrer">
                          <i title="下载" className="icon-download sprite_playlist_icon">下载</i>
                        </a>
                        <i title="分享" className="icon-share sprite_playlist_icon">分享</i>
                        <i title="收藏" className="icon-fac sprite_playlist_icon">收藏</i>
                      </div>
                      <span title={song.ar[0].name} className="author">
                        <ZHNavLink to={`/artist?id=${song.ar[0].id}`}>{song.ar[0].name}</ZHNavLink>
                      </span>
                      <span className="alltime">{formatMinuteSecond(song.dt)}</span>
                      <i title="来自榜单" className="origin sprite_playlist_icon">来源</i>
                    </div>
                  </li>
                );
              })

            }
          </ul>
        </PlayListLeftContent>

        {/* 
            1. 需要一个状态控制它的显示与隐藏
            2. 鼠标点击btn进行移动
            3. 鼠标点击btn，mousemove 、mouseup 
              - 每个li高度为 28px
        */}
        {
          showScroll && (
            <div 
              className="bline"
              onMouseDown={blineDownUpdate}
              onMouseUp={e => e.stopPropagation()}
            >
              <span 
                className="scrol"
                style={{
                  height: 260 / playList.length + 'px', 
                  display: 'block',
                  top: '0px'
                }}
                ref={scrolRef}
                onMouseDown={scrolDownUpdate}
              ></span>
            </div>
          )
        }

        <div className="divide-line"></div>
        
        <div className="right-mask"></div>
        <PlayListRightContent>
          {/* 第四句歌词开始滚动，这样可以歌词居中显示 */}
          <div 
            className="lyric-content" 
            ref={lyricContentRef}
            style={{ 
              top: lyricTempRef.current >=3 ? ((lyricTempRef.current - 3) * -32 + 'px') : '0px' 
            }}
          >
            {
              lyrics.map((line,index) => {
                return (
                  <p 
                    key={line.time + line.content} 
                    data-time={line.time}
                    className={currentLyricIndex === index ? 'play-line' : ''}
                  >{line.content}</p>
                );
              })
            }
          </div>
        </PlayListRightContent>
        <div className="icon-help sprite_playlist_icon"></div>
        <div className="slider" 
          onMouseDown={downUpdateTop}
          onMouseUp={e => {
            // 需要阻止冒泡事件，因为content也绑定了mouseup事件
            e.stopPropagation();
            isSlideringRef.current = false; 
          }}
        >
          {/*  
              控制条高度跟 歌词条数成正比
              每行歌词占据的滚动条top = 260(高度) / 歌词条数
          */}
          <span 
            onMouseDown={sliderTop}
            ref={sliderControlRef}
            className="slider-control" 
            style={{
              height: (260 / lyrics.length) + 'px',
              top: lyricTempRef.current * (260 / lyrics.length) + 'px',
              display: 'block'
            }}
          ></span>
        </div>
      </PlayListContent>

    </PlayListWrapper>
  )
})
