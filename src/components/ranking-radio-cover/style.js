import styled from 'styled-components';

export const RankingRadioCoverWrapper = styled.li`
  width: 150px;
  margin-left: 37px;
  
  .pic {
    display: block;
    width: ${props => props.size};
    height: ${props => props.size};
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    width: 295px;
    h3 {
      margin: 13px 0 6px;
      line-height: 16px;
      font-size: 14px;
      font-weight: normal;
      color: #000;
    }

    p {
      line-height: 18px;
      color: #999;

      .icon-user {
        display: inline-block;
        position: relative;
        top: 2px;
        width: 14px;
        height: 15px;
        margin-right: 2px;
        background-position: -50px -300px;
      }

    }

    .desc {
      margin-top: 5px;
      .phase {
        color: #999;
      }
      .subscribe {
        color: #999;
        margin-left: 10px;
      }
    }

  }

`;
