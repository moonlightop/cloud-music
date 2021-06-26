import styled from 'styled-components';

export const HotAnchorsWrapper = styled.div`
  margin-top: 30px;

  .hot-anchor-header {
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    height: 23px;

  }

  .hot-anchor-list {
    margin: 20px 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 210px;
      height: 50px;
      
      .piture {
        margin-right: 10px;
      }

      .title {
        width: 160px;
        line-height: 21px;

        .anchor-name {
          color: #000;
          margin-bottom: 8px;
        }
        .anchor-desc {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #666;
        }

      }

    }

  }

`;