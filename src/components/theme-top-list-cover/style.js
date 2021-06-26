import styled from 'styled-components';

export const ThemeTopListCoverWrapper = styled.div`
  width: 230px;

`;

export const ThemeTopListCoverHeader = styled.header`
  height: 100px;
  padding: 20px 0 0 19px;
  display: flex;
  justify-content: flex-start;

  .piture {
    position: relative;
    cursor: pointer;
    width: 80px;
    height: 80px;
    margin-top: 1px;

    img {
      width: 80px;
      height: 80px;
    }

    .shadow {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-position: -145px -57px;
      text-indent: -9999px;

    }

    .icon-play {
      background-position: -267px -268px;
      &:hover {
        background-position: -267px -288px;
      }
    }
    .icon-fac {
      background-position: -297px -268px;  
      &:hover {
        background-position: -297px -288px;
      }
    }

  }

  .title {
    margin: 6px 0 0 10px;
    width: 116px;

    .name {
      display: block;
      font-size: 14px;
      cursor: pointer;
      margin-bottom: 10px;
    }

    .icon-play,.icon-fac {
      display: inline-block;
      width: 22px;
      height: 22px;
      margin-right: 10px;
      cursor: pointer;
    }
    .icon-play {
      background-position: -267px -205px;
      &:hover {
        background-position: -267px -235px;
      }
    }
    .icon-fac {
      background-position: -300px -205px;
      &:hover {
        background-position: -300px -235px;
      }
    }


  }

`;

export const ThemeTopListCoverFooter = styled.footer`
  text-align: right;
  margin-right: 32px;
  height: 32px;
  line-height: 32px;
  a {
    color: #000;
    cursor: pointer;
    font-size: 13px;
  }

`;

export const ThemeTopListCoverSongList = styled.ul`
  height: 319px;
  margin-left: 50px;
  line-height: 32px;

  li {
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* 取前三个,n从0开始 */
    &:nth-child(-n + 3) {
      color: #c10d0c;
    }


    &:hover .icon .icon-play,
    &:hover .icon .icon-fac,
    &:hover .icon .icon-add {
      display: inline-block;
    }

    .song-desc {

      .song-index {
        margin-left: -35px;
        display: inline-block;
        text-align: center;
        width: 35px;
        height: 32px;
        vertical-align: middle;
        font-size: 18px;
        
      }

      .song-name {
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 96px;
        color: #000;
        vertical-align: middle; // 文字以中线对齐

      }

    }

    .icon {
      display: flex;
      align-items: center;
      width: 90px;

      .icon-play,.icon-fac,.icon-add {
        display: none;
        width: 17px;
        height: 17px;
        margin-right: 10px;
        cursor: pointer;
      }

      .icon-play {
        background-position: -267px -268px;
        &:hover {
          background-position: -267px -288px;
        }
      }
      .icon-fac {
        background-position: -297px -268px;  
        &:hover {
          background-position: -297px -288px;
        }
      }
      .icon-add {
        margin: 2px 6px 0 0;
        background-position: 0 -700px;
        &:hover {
          background-position: -22px -700px;
        }
      }

    }

  }

`;
