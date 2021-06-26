import styled from 'styled-components';

export const DowloadWrapper = styled.div`
  background-color: #242424;
`;

export const DownloadHeader = styled.div`

  position: relative;
  text-align: right;
  
  .content {
    padding: 20px 0 112px;
    display: flex;
    justify-content: space-between;

  }

  .icon {
    display: inline-flex;
    align-items: center;
    // margin-top: 20px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    height: 60px;
    width: 170px;


    &:hover {
      opacity: 0.7;
    }

    .bottom-arrow {
      width: 20px;
      height: 20px;
      margin-right: 6px;
      background: url('~@assets/img/download/bottom-arrow.png') no-repeat;
      background-size: contain;
      vertical-align: text-bottom;
    }
  }

`;

