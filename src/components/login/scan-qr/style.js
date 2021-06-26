import styled from 'styled-components';

export const ScanQrContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  background: #fff;
  padding: 38px 0 20px;
`;

export const LeftContent = styled.div`

  width: 125px;
  height: 220px;
  background: url(${require('../../../assets/img/login/qr_guide.png').default});
  background-size: contain;

`;

export const RightContent = styled.div`

  position: relative;

  .qr-useless {
    position: absolute;
    left: 30px;
    top: 35px;

    background: rgba(255,255,255,0.9);
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 14px;
      color: rgba(0,0,0,0.8);
      font-weight: 500;
    }
    a {
      display: block;
      width: 75px;
      height: 26px;
      line-height: 24px;
      text-align: center;
      text-decoration: none;

      margin-top: 6px;
      border-radius: 4px;
      background: linear-gradient(180deg,#81DD81 0%,#55A055 100%);
      border: 1px solid #5BAF5B;
      box-shadow: inset 0 0 1px 1px rgb(185,230,185,0.31);
      color: #fff;
      font-size: 13px;
    }

  }

  
  .title-and-qr {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 21px;
      font-weight: 500;
      text-align: center;
    }
    img {
      width: 130px;
      height: 130px;
      margin: 13px 0;
    }

    p {
      font-size: 14px;
      line-height: 17px;
      color: rgba(0,0,0,0.4);
      
      a {
        color: #0c73c2;
        cursor: pointer;
        text-decoration: none;
      }
    }
  
  }

`;

export const ScanQrFooter = styled.div`

  background-color: #fff;
  height: 55px;

  span {
    display: block;
    width: 140px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  
    margin: 0 auto;
  
    font-size: 13px;
    color: rgba(0,0,0,0.8);
  
    border: 1px solid #979797;
    border-radius: 15px;
  
    cursor: pointer;
  }

`;