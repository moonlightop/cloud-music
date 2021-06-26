import styled from 'styled-components';

export const RadioRankingWrapper = styled.div`
  margin-top: 35px;

  .ranking-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      margin: 0;
      display: flex;
      width: 435px;
      height: 120px;
      padding: 20px 0;
      border-bottom: 1px solid #e7e7e7;

      .title {
        margin-left: 20px;
        h3 {
          height: 64px;
          line-height: 64px;
          font-size: 18px;
          margin: 0;
        }
        p {
          color: #333;
          margin-bottom: 6px;
        }
      }
    } 


  }

`;