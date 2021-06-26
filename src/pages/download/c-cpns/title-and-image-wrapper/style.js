import styled from 'styled-components';

export const TilteAndImageWrapper = styled.div`

  .title-and-image-item {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 437px;
    border-bottom: 1px solid #e3e3e3;

    // 选择偶数的子元素
    &:nth-child(2n) {
      background-color: #f8f8f8;
    }
    // 奇数
    &:nth-child(2n + 1) {
      background-color: #fff;
    }

    h3 {
      font-size: 40px;
      font-weight: normal;
      padding: 45px 0 5px 0;
    }
    p {
      font-size: 18px;
      color: #666;
      line-height: 24px;
      em {
        color: #cc0000;
      }
    }
  }
  
`;