import styled from 'styled-components';

export const PhoneEmailFooter = styled.div`

  padding: 0 19px;
  width: 100%;
  height: 49px;
  border-top: 1px solid #c6c6c6;
  border-radius: 0 0 4px 4px;
  line-height: 49px;
  background-color: #f7f7f7;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  .other-way,.back-login {
    color: #0c72c3;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
  }

  .free-register {
    color: #999;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
  }

`;

export const PhoneEmailWrapper = styled.div`

  background: #fff;
  width: 100%;
  min-height: ${( {type} ) => {
    return (type === 'phone-login' || type === 'email') ? 
      '286px' : '301px';
  }};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;

`;

export const Oinput = styled.div`

  /* 公用样式 */
  .inputU,.inputP {
    
    display: flex;   
    overflow: hidden;
    height: 32px;
    line-height: 32px;
    margin: 5px 0 6px;
    border: 1px solid #cdcdcd;
    border-radius: 2px;

    input,select {
      background-color: #fff;
      margin-left: 8px;
    }
    input {
      font-size: 13.5px;
    }
    select {
      border-right: 1px solid #cdcdcd;
      color: #333;
    }

  }

  .passwordTitle {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }

  // phone-register独立样式
  .phone-register-inputU,.phone-register-inputP {
    margin-top: 7px;
    margin-bottom: 7px;
  }

`;
export const Login = styled.div`

  text-align: center;

  .icon {
    display: inline-block;
    width: 215px;
    height: 31px;
    line-height: 31px;
    vertical-align: top;
    margin-bottom: 10px;
    cursor: pointer;
    color: #fff;
    padding-right: 5px;

    background-position: right -428.3px;

    &:hover {
      background-position: right -510.3px;
    }
    &:active {
      background-position: right -592.3px;
    }

    i {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-position: 0 -387px;
      // background-position: -40px -387px;

      &:hover {
        background-position: 0 -469px;
      }
      &:active {
        background-position: 0 -551px;
      }

    }

  }

  // phone-login、email独立样式
  .phone-login-email-top {

    font-size: 13.5px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0 20px;

    label,span {
      color: #666;
    }
    span {
      cursor: pointer;
    }
    label input {
      margin: 0 12px 0 0;
      vertical-align: middle;
    }

  }

`;