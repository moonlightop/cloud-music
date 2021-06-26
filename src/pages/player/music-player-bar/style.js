import styled from 'styled-components';

export const MusicPlayerBarWrapper = styled.div`
  width: 100%;
  height: 53px;
  position: fixed;  
  bottom: -1px;
  left: 0;

  transition: bottom .3s;
  z-index: 100;

`;

export const MusicPlayerBarBg = styled.div`
  height: 52.5px;

  background-repeat: repeat-x;
  background-position: 0 0;

  /* 留位置加上右部的精灵图 */
  margin-right: 67px;

`;

export const MusicPlayerLock = styled.div`
  position: relative;

  .left {
    position: absolute;
    top: -67px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;

    .lock {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      background-position: -100px -380px;
      cursor: pointer;

      &:hover {
        background-position: -100px -400px;
      }
    }

    .open-lock {
      background-position: -80px -380px;
      &:hover {
        background-position: -80px -400px;
      }
    }

  }

  .right {
    position: absolute;
    top: -54px;
    right: 0;
    width: 15px;
    height: 54px;
    background-position: -52px -393px;
    pointer-events: none;

  }

`;

export const MusicPlayerControl = styled.div`
  
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  z-index: 10;
`;

export const ControlBtn = styled.div`
  /* 上一首 、播放 、下一首 */
  width: 137px;

  display: flex;
  justify-content: flex-start;
  align-items: flex;

  .prev,.play,.next  {
    display: block;
    text-indent: -9999px;
    margin-right: 8px;
    width: 28px;
    height: 28px;
    margin-top: 5px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin-top: 0;

    background-position: ${({isPlay}) => isPlay ? '0 -165px' : '0 -204px'};
    &:hover {
      background-position:  ${({isPlay}) => isPlay ?  '-40px -165px' : '-40px -204px'};
    }
  }

  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }

`;

export const CurrentSongPlay = styled.div`
  /* 中间图片 、进度条 */
  position: relative;
  display: flex;
    
  .song-piture {
    width: 34px;
    height: 34px;

  }

  .play-bar {
    width: 608px;
    margin-left: 15px;
    user-select: none;

    .desc {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 6px;

      .son-name,.song-author {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      } 

      .song-name {
        cursor: pointer;
        max-width: 300px;
        color: #fff;
      }
    
      .song-author {
        max-width: 220px;
        margin-left: 15px;
        
        a {
          color: #9b9b9b;
          cursor: pointer;
          text-shadow: 0 1px 0 #171717;
        }

      }

      .origin {
        cursor: pointer;
        display: inline-block;
        width: 14px;
        height: 15px;
        margin-left: 13px;
        text-indent: -9999px;

        background-position: -110px -103px;
        &:hover {
          background-position: -130px -103px;
        }
      }

    }

    .play-progress {
      width: 493px;
      position: relative;

      .progress {
        height: 9px;
        width: 493px;
        background-position: right 0;

        .download-progress {
          height: 9px;
          background-position: right -30px;
        }
        .cur-progress  {
          position: absolute;
          top: 0;
          left: 0;
          height: 9px;
          background-position: left -66px;
          
          .btn-progress {
            position: absolute;
            top: -7px;
            right: -13px;
            width: 22px;
            height: 24px;
            background-position: 0 -250px;
            cursor: pointer;
            &:hover {
              background-position: 0 -280px;
            }

            .loading-progress {
              visibility: hidden;
              position: absolute;
              left: 5px;
              top: 5px;
              width: 12px;
              height: 12px;
              background: url(${require('@assets/img/player/loading.gif').default});
            
            }
          }
        }

      }

      .time {
        position: absolute;
        top: -3px;
        right: -80px;
        color: #797979;
        text-shadow: 0 1px 0 #121212;         

      }

    }

  }

`;

export const OtherUtils = styled.div`
   /* 其它工具：收藏 、音量 ... */
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .left {
    width: 60px;
    margin-right: 13px;
    .fac,.share {
      display: inline-block;
      width: 25px;
      height: 25px;
      margin-right: 2px;
      text-indent: -9999px;
      cursor: pointer;

    }
    .fac {
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px
      }
    }

  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .voice-control-wrapper {
      position: absolute;
      width: 32px;
      height: 113px;
      left: -5px;
      top: -118px;

      user-select: none;

      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 113px;
        background-position: 0 -503px;

      }

      .size {
        position: absolute;
        left: 14px;
        top: 7px;
        margin: 4px 0;
        height: 93px;
        width: 4px;

        .cur {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 4px;
          background-position: -40px bottom; 
        }
        .btn {
          display: block;
          width: 18px;
          height: 20px;
          background-position: -40px -250px;
          cursor: pointer;

          position: absolute;
          left: -7px;
          top: -4px;

          &:hover {
            background-position: -40px -280px;
          }
        }

      }

    }
    
    .icon-voice,.icon-loop,.icon-list {
      display: inline-block;
      width: 25px;
      height: 25px;
      margin-right: 2px;
      text-indent: -9999px;
      cursor: pointer;
    }

    .icon-voice {
      background-position: ${({currentVolume}) => {
        return currentVolume === 0 ? '-104px -69px' : '-2px -248px';
      }};  

      &:hover {
        background-position: ${({currentVolume}) => {
          return currentVolume === 0 ? '-126px -69px' : '-31px -248px'; 
        }};
      }

    }

    .icon-loop {
      background-position: ${({ playWay }) => {
        switch(playWay) {
          case '顺序':
            return '-3px -344px';
          case '随机':
            return '-66px -248px';
          default: 
            // 单曲循环
            return '-66px -344px';
        }
      }};

      &:hover {
        background-position: ${({ playWay }) => {
          switch(playWay) {
            case '顺序':
              return '-33px -344px';
            case '随机':
              return '-93px -248px';
            default:
              // 单曲循环 
              return '-93px -344px';
          }
        }};
      }

    }


    .play-list {
      display: inline-block;
      width: 59px;
      height: 36px;
      line-height: 36px;

      user-select: none;

      .icon-list {
        display: inline-block;
        width: 38px;
        padding-left: 21px;
        line-height: 27px;
        text-align: center;
        color: #666;
        text-indent: 0;
        text-decoration: none;
        text-shadow: 0 1px 0 #080707;
        background-position: -42px -68px;
      
        &:hover {
          background-position: -42px -98px;
        }
      }

    }

    .operator-tip  {
      display: block;
      width: 152px;
      height: 49px;
      line-height: 37px;
      text-align: center;
      color: #fff;
      

      position: absolute;
      top: -57px;
      left: -12px;
      background-position: 0 -287px;

    }

    .tip {
      position: absolute;
      top: -38px;
      left: 0;

      display: none;
      width: 81px;
      height: 39px;
      line-height: 34px;
      background-position: 0 -457px;
      color: #fff;
      text-align: center;

    }


  }

`;
