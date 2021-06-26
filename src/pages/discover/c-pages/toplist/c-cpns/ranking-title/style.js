import styled from 'styled-components';

export const RankingTitleWrapper = styled.div`

  padding-bottom: 40px;
  display: flex;

  .pic {
    width: 150px;
    height: 150px;
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;

    .mask {
      background-position: -230px -380px;
      width: 150px;
      height: 150px;
      position: absolute;
      top: 0;
      left: 0;
    
    }

  }

  .desc {
    margin-left: 29px;
    .toplist-name {
      margin-top: 16px;
      margin-bottom: 4px;
      font-size: 20px;
      line-height: 24px;
      font-weight: normal;
    }
    .update-time {
      margin: 4px 0 20px 0;
      .icon-clock {
        display: inline-block;
        margin-top: 9px;
        margin-left: 3px;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
      }
      span:nth-child(2) {
        margin-left: 5px;
        color: #666;
      }
      span:nth-child(3) {
        color: #999;
      }
    }

  }

`;