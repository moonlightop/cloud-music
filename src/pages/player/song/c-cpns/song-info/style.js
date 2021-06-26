import styled from 'styled-components';

export const SongInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;

`;

export const SongInfoLeft = styled.div`
  width: 206px;
  height: 205px;


  .left-picture {
    position: relative;
    img {
      margin: 34px;
      height: 130px;
      width: 130px;
    }
  
    .song-cover {
      width: 206px;
      height: 205px;
      position: absolute;
      top: -4px;
      left: -4px;

      background-position: -140px -580px;
    }
  
  }

  .link-player {
    margin: 10px 45px;

    a {
      text-decoration: underline;
      color: #0c73c2;
      cursor: pointer;
    }

    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
      vertical-align: middle;
    }

  }

`;

export const SongInfoRight = styled.div`
  width: 414px;
  margin-left: 17px;

  .song-name {
    .icon-song-type,i {
      background-position: 0 -463px;
      display: inline-block;
      width: 54px;
      height: 24px;
      vertical-align: middle;
    }
    span {
      margin-left: 7px;
      vertical-align: middle;
      font-weight: 549;
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }
    margin-bottom: 40px;
  }

  .song-desc p {
    margin: 10px 0;
    color: #999;

    span {
      color: #0c73c2;
      cursor: pointer;
    }
  }

  .lyrics {
    margin-top: 13px;
    line-height: 23px;

    .open {
      margin-top: 13px;
      color: #999;
      cursor: pointer;

      i {
        display: inline-block;
        width: 11px;
        height: 8px;
      }
      .icon-bottom-arrow {
        background-position: -65px -520px;
      }
      .icon-top-arrow {
        background-position: -45px -520px;
      }

    }

  }

`;