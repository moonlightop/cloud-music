import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  position: absolute;
  bottom: 46px;
  left: 50%;
  transform: translateX(-50%);

  width: 986px;
  height: 301px;

  user-select: none;

`;

export const PlayListContent = styled.div`

  width: 976px;
  height: 260px;
  background-position: -1014px 0;
  background-repeat: repeat-y;

  padding: 0 5px;

  display: flex;
  justify-content: flex-start;

  position: relative;
  overflow: hidden;

  .blur_bg {
    width: 980px;
    height: auto;
    position: absolute;
    top: -360px;
    left: 2px;
    z-index: 1;
    opacity: .2;
    filter: Alpha(opacity=20);

  }
  .left-mask {
    /* 背景图的蒙版 */
    background: #121212;
    opacity: .5;

    position: absolute;
    left: 2px;
    top: 0;
    z-index: 2;
    width: 558px;
    height: 260px;
  }
  .bline {
    position: absolute;
    left: 555px;
    top: -1px;
    z-index: 3;
    width: 6px;
    height: 260px;
    background: #000;
    opacity: .5;

    .scrol {
      position: absolute;
      left: 0;
      width: 4px;
      border-radius: 5px;
      cursor: pointer;
      background: #868686;
      border: 1px solid #a6a6a6;
      opacity: .8;
    }
  }
  .divide-line {
    z-index: 2;
    width: 6px;
    height: 260px;
    background: #000;
    opacity: .5;
  }
  .right-mask {
    /* 背景图的蒙版 */
    background: #121212;
    opacity: .1;

    position: absolute;
    left: 560px;
    top: 0;
    z-index: 2;
    width: 420px;
    height: 260px;
  }
  .icon-help {
    position: absolute;
    right: 25px;
    top: 12px;

    cursor: pointer;
    z-index: 2;
    width: 21px;
    height: 21px;
    background-position: 0 -50px;

    &:hover {
      background-position: -24px -50px;
    }
  }
  .slider {
    position: absolute;
    top: -1px;
    right: 2px;
    z-index: 2;
    width: 10px;
    height: 260px;
    background: #000;
    opacity: .5;

    .slider-control {
      position: absolute;
      right: 0;
      width: 8px;

      border-radius: 5px;
      cursor: pointer;
      background: #868686;
      border: 1px solid #a6a6a6;
      opacity: .8;

      transition: top .5s ease-in-out;

    }
    
  }

`;

export const PlayListHeader = styled.div`
  background-position: 0 0;
  line-height: 41px;
  padding: 0 5px;

  display: flex;

  .left {
    width: 553px;
    display: flex;
    justify-content: space-between;

    h3 {
      color: #fff;
      margin-left: 25px;
    }

    .other-utils {

      span {
        margin-right: 8px;
        color: #ccc;
        cursor: pointer;
        display: inline-block;

        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 6px;
          vertical-align: middle;
        }

        &:hover {
          i { color: #fff; }
          .fac { background-position: -24px -20px; }
          .clear { background-position: -51px -20px; }
        }

        .fac {
          background-position: -24px 0;
        } 
        .clear {
          background-position: -51px 0;
        }

      }
      span:nth-child(3) {
        margin-right: 20px;
      }
      .divide {
        cursor: auto;
        height: 16px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
        vertical-align: middle;
      }

    }

  }

  .right {
    flex-grow: 1;
    text-align: center;
    height: 39px;
    position: relative;

    .song-name {
      color: #fff;
      font-size: 14px;
    }

    .icon-close {
      position: absolute;
      right: 8px;
      top: 6px;

      display: inline-block;
      width: 30px;
      height: 30px;
      cursor: pointer;
      background-position: -195px 9px;
      &:hover {
        background-position: -195px -21px;
      }
    }

  }

`;

export const PlayListLeftContent = styled.div`
  width: 550px;
  height: 260px;
  z-index: 2;
  overflow: hidden;

  .nocnt {
    color: #aaa;
    padding-top: 85px;
    text-align: center;
    line-height: 43px;

    .icon-listen {
      display: inline-block;
      width: 36px;
      height: 29px;
      margin-right: 3px;
      background-position: -138px 0;
      vertical-align: middle;
    }

    .f-tdu {
      cursor: pointer;
      color: #aaa;
      text-decoration: underline;
      font-size: 12px;
    }

  }

  .song-list {
    color: #ccc;
    position: relative;

    li:hover,.actived { 
      color: #fff;
      background-color: rgba(0,0,0,0.5);
      a { color: #fff; }
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 28px;
      cursor: pointer;

      .song-name .icon-play {
        display: inline-block;
        color: #fff;
        width: 10px;
        height: 13px;
        margin: 0 10px;
        vertical-align: middle;

        background-position: -182px 0;
      }      


      &:hover .icns {
        visibility: visible;
      }
      .icns { 
        display: inline-block;
        visibility: hidden;
      }
      .icns i { 
        display: inline-block;
        text-indent: -9999px; 
        height: 16px;
        width: 16px;
        margin-left: 6px;
        vertical-align: middle;
      }

      .icon-fac {
        background-position: -24px 0;
        &:hover {
          background-position: -24px -20px;
        }
      }
      .icon-share {
        background-position: 0 0;
        &:hover {
          background-position: 0 -20px;
        }
      }
      .icon-download {
        background-position: -57px -50px;
        &:hover {
          background-position: -80px -50px;
        }
      }
      .icon-delete {
        background-position: -51px 0;
        &:hover {
          background-position: -51px -20px;
        }
      }

      /* 固定大小 */
      .author {
        margin: 0 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;

        display: inline-block;
        width: 70px;
        text-align: left;
      }

      .alltime {
        margin-right: 35px;
      }

      .origin {
        display: inline-block;
        width: 14px;
        height: 16px;
        margin-right: 10px;
        text-indent: -9999px;
        vertical-align: middle;

        background-position: -80px 0px;
        &:hover {
          background-position: -80px -20px;
        }
      }

    }

  }

`;

export const PlayListRightContent = styled.div`
  width: 420px;
  height: 224px;
  z-index: 2;

  overflow: hidden;
  position: relative;

  margin: 18px 0;

  .lyric-content {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);

    width: 354px;
    text-align: center;
  
    transition: top 0.5s linear;
  }

  p {
    color: #989898;
    word-wrap: break-word;
    line-height: 32px;
    min-height: 32px;
    transition: color 0.7s linear;
  }

  .play-line {
    color: #fff;
    font-size: 14.5px;
  }

`;
