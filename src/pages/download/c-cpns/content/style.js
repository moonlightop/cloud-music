
import styled from 'styled-components';

export const ContentWrapper = styled.div`
    
  .content-right,.content-left {
    width: 556px;
    height: 100%;
    text-align: center;
    .title {
      margin-bottom: 23px;
      font-size: 22px;
      opacity: 0.8;
      color:#FFFFFF;
    }
    .computer {
      width: 464px;
      height: 273px;
      margin: 0 auto 3px;
    }
    .phone {
      width: 246px;
      height: 273px;
    }
    .platform {
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: center;

      .mac,.phone-mac  {
        // display: inline-block;
        width: 154px;
        height: 44px;
        line-height: 44px;
        background: url(${require('@assets/img/download/mac.png').default}) no-repeat;
        background-size: contain;
        margin-right: 11px;
      }
      .phone-mac {
        background-image: url(${require('@assets/img/download/phone-mac.png').default});
      }
      
      .windows,.android  {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        font-size: 19px;
        color: #eee;
        padding-left: 33px;
        i {
          width: 24px;
          height: 24px;
          margin-right: 5px;
          background: url(${require('@assets/img/download/windows.png').default}) no-repeat;
          background-size: contain;
        }
      }
      .android {
        i {
          background-image: url(${require('@assets/img/download/android.png').default});
        }
      }
    }
    .btn {
      box-sizing: border-box;
      width: 300px;
      height: 65px;
      line-height: 65px;
      text-align: center;
              
      font-size: 22px;
      margin: 0 auto;
      border-radius: 65px;
      background-color: #fff;
      color: #D10000;

      cursor: pointer;

      a {
        color: #D10000;
      }

      &:hover {
        opacity: 0.7;
        a {
          text-decoration: none;
        }
      }

      i {
        display: inline-block;
        background: url(${require('@assets/img/download/QR.png').default}) no-repeat;
        width: 21px;
        height: 21px;
        background-size: contain;
        vertical-align: -3px;
        margin-right: 3px;
      }
    }

  }

  .content-right {
    width: 300px;
  }

`;
