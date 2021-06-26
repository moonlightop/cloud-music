import React, { memo, useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { 
  changeCurrentLyricIndex, 
  changeIsPlay, 
  getCurrentSong, 
  getNextSong, 
  changeOperatorTip
} from '@redux/actions/player';

import ZHNavLink from '@components/navlink';
import ZHShowLyric from './c-cpns/show-lyric';
import ZHPlayList from './c-cpns/play-list';

import { getPlayUrl, SetPitureSize, formatMinuteSecond} from '@utils/format-utils';
import { debounce } from '@utils/throttle-utils';

import { 
  MusicPlayerBarWrapper,
  MusicPlayerBarBg,
  MusicPlayerControl,
  ControlBtn,
  CurrentSongPlay,
  OtherUtils,
  MusicPlayerLock
  
} from './style';


export default memo(function ZHMusicPlayerBar(props) {

  const dispatch = useDispatch();
  const { 
    currentSong,
    playList,
    lyrics,
    currentLyricIndex,
    isPlay,
    operatorTip

  } = useSelector(state => ({
    isPlay: state.getIn(['player','isPlay']),
    operatorTip: state.getIn(['player','operatorTip']),
    currentSong: state.getIn(['player','currentSong']),
    playList: state.getIn(['player','playList']),
    lyrics: state.getIn(['player','lyrics']),
    currentLyricIndex: state.getIn(['player','currentLyricIndex'])

  }), shallowEqual);

  useEffect(() => {
    dispatch(getCurrentSong(1833792929));

  },[dispatch]);


/*
  1. 播放当前歌曲，下载进度
  2. 播放\暂停（play\pause）
  3. 播放进度（currentTime 、onUpdateTime）- width
       播放按钮（onMouseDown onMousemove onMouseUp）
       红色进度条（onMouseDown）
  4. 单曲循环 、顺序 、随机
*/
  const [ playWay,setPlayWay ] = useState('顺序');

  const [ isLoading,setIsLoading ] = useState(false); // 是否正在加载音频中
  const [ downloadProgress,setDownloadProgress ] = useState(0); // 百分比，样式后面再加%
  const [ currentTime,setCurrentTime ] = useState(0); // 毫秒形式
  
  const audioRef = useRef(); 
  const curProgressRef = useRef();    // 红色进度条的ref
  const dragProgressRef = useRef();   // 拖动进度条的绑定的mousemove的vdom
  const isChangingRef = useRef(false); // 是否正在改变时间
  
  
  const allTime = currentSong.dt; // 毫秒形式
  const imgUrl = currentSong.al && SetPitureSize(currentSong.al.picUrl,34);
  const songName = currentSong.name;


  const PlayOrPause = useCallback(() => {
    isPlay ? audioRef.current.pause() : audioRef.current.play();
    dispatch(changeIsPlay(!isPlay));

  },[isPlay,dispatch]);
  
  useEffect(() => {
    if (isPlay && audioRef.current.paused) {
      audioRef.current.play();
    }
  }, [isPlay])

  
  const Progress = useCallback(e => {
    // 最后一个缓冲区 / 总时长(秒) - 设置下载进度条的宽度百分比
    if(downloadProgress !== 100 && e.target.buffered.length > 0) {
      // console.log('Progress');
      setDownloadProgress((e.target.buffered.end(e.target.buffered.length - 1) / e.target.duration) * 100);
    }

  },[downloadProgress])

  const updateTime = useCallback((e) => {
    const curTime = e.target.currentTime; // 秒形式
    if(!isChangingRef.current) {
      setCurrentTime(curTime * 1000);// 毫秒形式
    } 

    // 更新当前显示的歌词
    const lyricsLen = lyrics.length;
    let curLyricIndex = -1;
    // 注意播放到最后一行歌词
    for(let i = 1; i < lyricsLen; i ++) {
      if(lyrics[i].time > curTime * 1000 ) {
        curLyricIndex = i - 1;
        break;
      }else if(i === lyricsLen - 1 && curTime * 1000 > lyrics[i].time) {
        curLyricIndex = i;
      }
    }

    if(curLyricIndex >= 0 && curLyricIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndex(curLyricIndex));
    } 

  },[dispatch,lyrics,currentLyricIndex]);

  const changeProgress = useCallback((e) => {
    e.stopPropagation();
    playBarRef.current.onmouseup = null; // 取消它的鼠标抬起事件!!!!

    isChangingRef.current = true; // 改变完后变为false
    const newWidth = e.nativeEvent.offsetX <= 0 ? 0 : (e.nativeEvent.offsetX >= 493) ? 493 : e.nativeEvent.offsetX; // 因为红色进度条的左上角永远保持不变
    const newTime = (newWidth / 493) * allTime;
    // console.log('changeProgress',e.nativeEvent.offsetX,newTime);
    audioRef.current.currentTime = newTime / 1000; // 秒为单位
    setCurrentTime(newTime); // 毫秒为单位
    
    if(!isPlay) {
      audioRef.current.play();
      dispatch(changeIsPlay(!isPlay));
    }

  },[allTime,isPlay,dispatch])

  // 用movementX有点小问题 - 猜测是因为触发事件源不同导致的 movement有所差异(暂时没想到解决办法)
  const dragPlayBtn = useCallback(e => {
    e.stopPropagation();

    // 鼠标拖动过程仅，改变进度而不改变歌曲播放进度，当鼠标抬起时才改变歌曲的播放进度
    dragProgressRef.current.onmousemove = (event) => {
      isChangingRef.current = true;
      // 新的宽度(px) = 宽度(px) + 变化的宽度(px)
      let newWidth = parseInt(curProgressRef.current.style.width) + event.movementX;
      newWidth = newWidth < 0 ? 0 : (newWidth > 493 ? 493 : newWidth);
      curProgressRef.current.style.width = newWidth + 'px'; // 红色进度条
      const newTime = (newWidth / 493) * allTime;
      setCurrentTime(newTime); // 毫秒形式

    }

    function cancelCallback(event) {
      let newWidth = parseInt(curProgressRef.current.style.width);
      newWidth =  newWidth <= 0 ? 0 : (newWidth >= 493) ? 493 : newWidth; // 因为红色进度条的左上角永远保持不变
      const newTime = (newWidth / 493) * allTime;
      audioRef.current.currentTime = newTime / 1000;// 秒形式

      if(!isPlay) {
        audioRef.current.play();
        dispatch(changeIsPlay(true));
      }
      dragProgressRef.current.onmousemove = null;
      isChangingRef.current = false;

      // console.log('mouseup-cancelCallback',event.target);

    }

    // 抬起获取离开根据宽度设置时间
    playBarRef.current.onmouseup = cancelCallback;

  },[allTime,isPlay,dispatch])


  /* 
    声音的控制同理
  */
  const [ showVolumeBar,setShowVolumeBar ] = useState(false);
  const [ currentVolume,setCurrentVolume ] = useState(1);
  const dragVolumeRef = useRef();
  const volumeBtnRef = useRef();

  const changeVolume = useCallback((e) => {
    // 因为左上角位置会随着变化，所以高度的变化是每次减去它的高度，触发源不同了
    let newHeight;
    if(e.target.style.height === '') {
      // size：直接offsetY
      newHeight = 93 - e.nativeEvent.offsetY;
    } else {
      /* 
        红色进度条(初始height为：100%)
        新的高度 = 以前的高度 - 变换的距离
      */
      newHeight = (parseInt(e.target.style.height)/100)*93 - e.nativeEvent.offsetY;
    }

    // 0 ~ 1
    let newVolume = (newHeight > 93 ? 93 : (newHeight < 0 ? 0 : newHeight)) / 100;
    audioRef.current.volume = newVolume;
    setCurrentVolume(newVolume);

  },[]);

  // 用movementX有点小问题 - 猜测是因为触发事件源不同导致的 movement有所差异(暂时没想到解决办法)
  const dragVolumeBtn = useCallback(e => {
    e.stopPropagation();
    dragVolumeRef.current.onmousemove = (event) => {
      /* 78px ~ -4px（0 ~ 1） */
      // 原来的top + 两次鼠标移动的距离
      let newTop = parseInt(volumeBtnRef.current.style.top) + event.movementY;
      newTop = newTop < -4 ? -4 : (newTop > 78 ? 78 : newTop);
      volumeBtnRef.current.style.top = newTop + 'px';
      // 新的音量 = 原来的音量 - 变化的音量
      let newVolume = audioRef.current.volume - event.movementY / 82;
      newVolume = newVolume < 0 ? 0 : ((newVolume > 1) ? 1 : newVolume);
      audioRef.current.volume = newVolume;
      // 修改红色进度条
      // console.log(newVolume)
      setCurrentVolume(newVolume);

    }

    dragVolumeRef.current.onmouseup = () => {
      dragVolumeRef.current.onmousemove = null;
    }
    dragVolumeRef.current.onmouseleave = () => {
      dragVolumeRef.current.onmousemove = null;
    }

  },[])


  /*
    锁的控制
  */
  const [ isLock,setIsLock ] = useState(true);
  const playBarRef = useRef();
  
  const showBar = useCallback((e) => {
    if(!isLock) {
      playBarRef.current.style.bottom = '-1px';
    }
  },[isLock])

  const hideBar = useCallback((e) => {
    if(!isLock) {
      // 鼠标离开设置定时器1s后自动隐藏
      setTimeout(() => {
        playBarRef.current.style.bottom = '-47px';
      },800)

    }
  },[isLock])

  useEffect(() => {
    hideBar();
  },[hideBar])


  /*
    播放方式改变，展示的toast
  */
  const playWayToastRef = useRef();

  const hideToast = useMemo(() => {
    return debounce(() => {
      playWayToastRef.current.style.display = 'none';
    },2000)

  },[]);
  const changePlayWay = useCallback(() => {
    playWayToastRef.current.style.display = 'block';
    hideToast();

    // 顺序 -> 随机 -> 单曲循环
    switch(playWay) {
      case '顺序':
        setPlayWay('随机');
        break;
      case '随机':
        setPlayWay('单曲循环');
        break;
      default:
        setPlayWay('顺序');
    }

  },[hideToast,playWay])

  const playEnd = useCallback((e) => {
    if(playList.length < 2 || playWay === '单曲循环') {
      audioRef.current.play()
        .then(res => dispatch(changeIsPlay(true))).catch(err => dispatch(changeIsPlay(false)));
      dispatch(changeCurrentLyricIndex(0));
    
    }else {
      dispatch(getNextSong(1,playWay));
    }

  },[playWay,dispatch,playList])

  // 播放的歌曲更新后重新进行播放
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current.play().then(res => {
      dispatch(changeOperatorTip('play'));// play | addToPlayList
      dispatch(changeIsPlay(true));
    }).catch(err => {
      // google浏览器禁止页面加载完后进行音乐播放，因此需要捕获错误
      dispatch(changeIsPlay(false));
    });

  },[currentSong,dispatch])

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeOperatorTip(''));
    },1500)
  },[operatorTip,dispatch])

  const [ showPlayList,setShowPlayList ] = useState(false); // 控制播放列表的显隐



  return (
    <MusicPlayerBarWrapper 
      onContextMenu={e => e.preventDefault()}
      ref={playBarRef}
      onMouseEnter={showBar}
      onMouseLeave={hideBar}
      onMouse
    >

      <MusicPlayerBarBg className="sprite_playbar" />
      <MusicPlayerLock>
        <div className="left sprite_playbar">
          <button 
            className={"lock sprite_playbar " + (isLock ? '' : 'open-lock')}
            onClick={e => setIsLock(!isLock)}
          ></button>
        </div>
        <div className="right sprite_playbar"></div>
      </MusicPlayerLock>

      <MusicPlayerControl className="wrap-v2">
        <ControlBtn isPlay={isPlay}>
          <span className="sprite_playbar prev" onClick={e => dispatch(getNextSong(-1,playWay))}>上一首</span>
          <span className="sprite_playbar play" onClick={e => PlayOrPause()}>播放/暂停</span>
          <span className="sprite_playbar next" onClick={e => dispatch(getNextSong(1,playWay))}>下一首</span>
        </ControlBtn>
        <CurrentSongPlay>

          <div className="song-piture">
            <ZHNavLink to={`/song?id=${currentSong.id}`}>
              { imgUrl && <img src={imgUrl} alt={songName} /> }
            </ZHNavLink>
          </div>   
          <div className="play-bar">
            <div className="desc">
              <ZHNavLink to={`/song?id=${currentSong.id}`} className="song-name" >{songName}</ZHNavLink>
              <span className="song-author" >
                {
                  currentSong.ar && currentSong.ar.map((author,index) => {
                    return (
                      <ZHNavLink key={author.id} to={`/artist?id=${author.id}`}>{author.name}{(index + 1) !== currentSong.ar.length ? ' / ' : ''}</ZHNavLink> 
                    );
                  })
                }
              </span>
              <span className="sprite_playbar origin" title="来自歌单" >来自歌单</span>
            </div>
            
            <div className="play-progress" ref={dragProgressRef}>
              <div className="progress sprite_statbar"  
                   onMouseDown={changeProgress} 
                   onMouseUp={e => isChangingRef.current = false}
              > 
                <div className="download-progress sprite_statbar" style={{ width: `${downloadProgress}%` }}></div>
                <div className="cur-progress sprite_statbar" 
                  style={{ width: `${(currentTime / allTime) * 493}px` }} 
                  ref={curProgressRef}
                >
                  <span className="btn-progress sprite_iconall" onMouseDown={dragPlayBtn}>
                    <i className="loading-progress" style={{ visibility: isLoading ? 'visible' : 'hidden'}}></i>
                  </span>
                </div>
              </div>
              <span className="time"><em>{formatMinuteSecond(currentTime)}</em>/{formatMinuteSecond(allTime)}</span>
            </div>

          </div>

        </CurrentSongPlay>
        <OtherUtils currentVolume={currentVolume} playWay={playWay}>

          <div className="left">
            <i className="fac sprite_playbar" title="收藏">收藏</i>
            <i className="share sprite_playbar" title="分享">分享</i>
          </div>
          <div className="right">

            <div className="voice-control-wrapper" 
              style={{visibility: showVolumeBar ? 'visible' : 'hidden'}} 
              ref={dragVolumeRef}  
            >
              <div className="bg sprite_playbar"></div>
              <div className="size" onMouseDown={changeVolume}>
                <div className="cur sprite_playbar" 
                  style={{ height: `${currentVolume * 100}%` }} 
                ></div>
                {/* 78px ~ -4px（0 ~ 1） */}
                <span 
                  className="btn sprite_iconall" 
                  onMouseDown={dragVolumeBtn} 
                  ref={volumeBtnRef}
                  style={{ top: `${(1 - currentVolume) * 82 - 4}px`}}         
                ></span>
              </div>
            </div>

            <span className="icon-voice sprite_playbar" onClick={e => setShowVolumeBar(!showVolumeBar)}></span>
            <span className="icon-loop sprite_playbar" title={playWay} onClick={e => changePlayWay() }></span>
            <div className="play-list" title="歌曲列表" onClick={e => setShowPlayList(!showPlayList)}>
              <i className="icon-list sprite_playbar">{playList.length}</i>
            </div>
            {/* 改变display 来显示和隐藏 */}
            <span 
              className="operator-tip sprite_playbar"
              style={{
                visibility: operatorTip ? 'visible' : 'hidden'
              }}
            >
              {
                operatorTip === 'addToPlayList' ? '已添加到播放列表' : 
                  ( operatorTip === 'play' ? '已开始播放' : '')
              }
            </span>
            <span className="tip sprite_playbar" ref={playWayToastRef}>{playWay}</span>
          </div>
        
        </OtherUtils>
      </MusicPlayerControl>
      
      <audio 
        ref={audioRef} 
        onProgress={Progress}
        onCanPlay={e => setIsLoading(false) }
        onWaiting={e => setIsLoading(true) }
        onCanPlayThrough={e => setIsLoading(false) }
        onTimeUpdate={updateTime} 
        onEnded={playEnd} 
      
      ></audio>

      { !showPlayList && lyrics.length > 0 && <ZHShowLyric lyric={lyrics[currentLyricIndex].content} />}
      { showPlayList && <ZHPlayList setShowPlayList={setShowPlayList}/> } 

    </MusicPlayerBarWrapper>
  );

})
