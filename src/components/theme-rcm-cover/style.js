import styled from 'styled-components';

export const ThemeCoverWrapper = styled.li`
  width: 140px;
  height: 195px;
  padding-bottom: 30px;
  padding-left: 42px;

  .piture {
    width: 140px;
    height: 140px;
    position: relative;

    .cover-bg {
      position: absolute;
      left: 0;
      top: 0;

      display: block;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      text-indent: -9999px;
    }

    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      /* width: 100%; */
      height: 27px;
      color: #ccc;
      background-position: 0 -537px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .left .icon-headset {
        display: inline-block;
        background-position: 0 -24px;
        width: 14px;
        height: 11px;
        margin: 0px 5px 0px 10px;
        
      }


      .icon-play {
        display: inline-block;
        text-indent: -9999px;
        background-position: 0 0;
        width: 16px;
        height: 17px;
        margin-right: 10px;

        &:hover {
          color: #333;
          text-decoration: underline;
          cursor: pointer;
          background-position: 0 -60px;
        }
      }

    }

  }
  .desc {
    margin: 8px 0 3px;

    white-space: pre-wrap;
    text-overflow: ellipsis;
    overflow: hidden;

    a {
      font-size: 13.5px;
      width: 100%;
      color: #000;
    }
  }

`;