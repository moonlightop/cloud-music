import styled from 'styled-components';

export const SongListWrapper = styled.div`

  .download {
    width: 100%;
    height: 66px;
    margin-top: 30px;
    margin-bottom: -10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 14px;
      color: #333333;
    }
    .btn-bg {
      color: #fff;
      display: inline-block;
      width: 120px;
      height: 30px;
      line-height: 30px;
      border-radius: 18px;
      background-image: linear-gradient(90deg,#ff5a4c 0%,#ff1d12 100%);
      text-align: center;
      &:hover {
        text-decoration: none;
      }
    }
    
  }

`;

export const SongListContent = styled.table`
  width: 100%;
  border: 1px solid #d9d9d9;
  table-layout: fixed; // 放置表格拉伸
  border-spacing: 0;
  border-collapse: collapse;

  thead tr {
    th {
      height: 38px;
      background-color: #f7f7f7;
      color: #666;
      text-align: left;
      font-weight: normal;
      background-position: 0 0;
      background-repeat: repeat-x;
      
      div {
        height: 18px;
        line-height: 18px;
        padding: 8px 10px;
        background-position: 0 -56px;
      }
    }
    th:nth-child(1) {
      width: 77px;
    }
    th:nth-child(2) {
      
    }
    th:nth-child(3) {
      width: 91px;
    }
    th:nth-child(4) {
      width: 26%;
    }
  }

  tbody {

    tr:nth-child(2n+1) {
      background-color: #f7f7f7;
    }
    tr:nth-child(2n + 2) {
      background-color: #fff;
    }
  
    tr td {
      text-align: left;
      padding: 13px 5px;
      color: #666;
    }

    tr td:nth-child(1) {
      width: 77px;
      line-height: 17px;
      .index {
        display: inline-block;
        width: 25px;
        height: 17px;
        text-align: center;
        color: #999;
      }
      .icon-new-or-arrow {
        vertical-align: middle;
        display: inline-block;
        width: 32px;
        i {
          margin: 0 auto;
          display: block;
          width: 16px;
          height: 17px;
          background-position: -67px -283px;
        }
      }
    }
    tr td:nth-child(2) {
      display: flex;
      align-items: center;
      .pic img {
        margin-right: 14px;
        width: 50px;
        height: 50px;
      }
      .icon-play {
        display: inline-block;
        margin-right: 8px;
        width: 20px;
        height: 17px;
        cursor: pointer;
        
        background-position: 0 -103px;
        &:hover {
          background-position: 0 -128px;
        }
      }
      .song-name {
        display: inline-block;
        max-width: 58%; // 给与文字最大宽度，使得text-overflow样式能生效
        .alia {
          color: #aeaeae;
        }
      }
      .icon-mv {
        display: inline-block;
        margin-left: 2px;
        width: 23px;
        height: 17px;
        text-indent: -9999px;
        cursor: pointer;
        background-position: 0 -151px;
        &:hover {
          background-position: -30px -151px;
        }
      }
    }
    tr:hover td:nth-child(3) {
      .time { display: none; }
      .icns { display: block; }
    }
    tr td:nth-child(3) {
      width: 91px;
      .icns {
        display: none;
        i {
          width: 18px;
          height: 16px;
          display: inline-block;
          text-indent: -9999px;
          margin-left: 4px;
          cursor: pointer;
        }
        .icon-plus {
          background-position: 0 -700px;
          margin-left: 0;
          width: 13px;
          height: 13px;
          &:hover {
            background-position: -22px -700px;
          }
        }
        .icon-fac {
          background-position: 0 -174px;
          &:hover {
            background-position: -20px -174px;
          }
        }
        .icon-share {
          background-position: 0 -195px;
          &:hover {
            background-position: -20px -195px;
          }
        }
        .icon-download {
          background-position: -81px -174px;
          &:hover {
            background-position: -104px -174px;
          }
        }
      }
    }
    tr td:nth-child(4) {
      width: 26%;
    }

  }

`;