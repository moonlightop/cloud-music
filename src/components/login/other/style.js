import styled from 'styled-components';

export const OtherContent = styled.div`

  padding: 40px 0 39px;
  background-color: #fff;
  max-height: 332px;
  box-sizing: border-box;
  border: 1px solid #878787;
  border-radius: 0 0 4px 4px;
  border-width: 0 1px 1px;

`;

export const OtherFooter = styled.div`

  position: relative;
  top: -52px;
  left: 478px;

  background-image: url(${require('../../../assets/img/login/qr_login_icon.png').default});
  background-size: contain;
  cursor: pointer;
  display: block;
  width: 52px;
  height: 52px;
  text-align: right;

`;

export const OtherLeftContent = styled.div`

  width: 224px;
  padding: 0 35px 3px 40px;
  border-right: 1px dotted #ccc;
  display: inline-block;
  box-sizing: content-box;

  .bg-computer {
    height: 120px;
    background: url(${require('../../../assets/img/login/platform.png').default}) no-repeat 13px 0;
  }

  // 公共样式
  .btn-phone-login,.btn-register {
    
    padding: 0 5px 0 0;
    height: 31px;
    line-height: 31px;
    width: 219px;
    
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    vertical-align: top;
    cursor: pointer;
    margin-top: 10px;

    i {
      padding: 0 15px 0 20px;
      display: block;
      width: 185px;
      box-sizing: content-box;
    }
  }

  .btn-phone-login {
    
    background-position: right -428.3px;

    &:hover {
      background-position: right -510.3px;
    }
    &:active {
      background-position: right -592.3px;
    }

    i {
      color: #fff;
      background-position: 0 -387px;

      &:hover {
        background-position: 0 -468.5px;
      }
      &:active {
        background-position: 0 -551.5px;
      }

    }
  }

  .btn-register {
    background-position: right -100px;

    &:hover {
      background-position: right -182px;
    }
    &:active {
      background-position: right -264px;
    }

    i {
      background-position: 0 -59px;
      color: #333;
      
      &:hover {
        background-position: 0 -141px;
      }
      &:active {
        background-position: 0 -223px;
      }

    }
  }

`;

export const OtherRightContent = styled.ul`

  display: inline-block;
  padding: 3px 0 3px 39px;

  li {
    // 公共样式,每个导入的图标不同
    margin-top: 15px;

    a {
      font-size: 12px;
      color: #333;
      cursor: pointer;

      display: flex;
      align-items: center;

      .icon {
        display: inline-block;
        margin-right: 14px;
        width: 38px;
        height: 38px;

      }

    }

    &:nth-child(1) a .icon {
      background-position: -150px -670px;
    }
    &:nth-child(2) a .icon {
      background-position: -190px -670px;
    }
    &:nth-child(3) a .icon {
      background-position: -231px -670px;
    }
    &:nth-child(4) a .icon {
      background-position: -271px -670px;
    }

  }

`;

export const OtherPro = styled.div`
  
  margin-left: 40px;
  margin-top: 30px;
  font-family: 'NotoSansHans-Regular';
  color: rgba(0,0,0,0.40);
  line-height: 15px;

  label {
    margin-left: 2px;
  }
  a,label {
    font-size: 13px;
  }

`;
