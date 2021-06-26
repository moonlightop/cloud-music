import styled from 'styled-components';

export const RankingsDescWrapper = styled.div`
  margin-top: 40px;
  width: 240px;
  
  .theme-name {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
  }

  .list {
    margin-bottom: 20px;

    .actived-toplist {
      background-color: #e6e6e6;
    }
    a {
      display: block;
      cursor: pointer;
      height: 42px;
      padding: 10px 0 10px 20px;

      &:hover {
        background-color: #e6e6e6;
      }

      .pic {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        vertical-align: top;
      }
      .title {
        display: inline-block;
        .ranking-name {
          margin-top: 2px;
          margin-bottom: 8px;
          color: #000;
        }
        .update-time {
          color: #999;
        }
      }
    }

  }

`;