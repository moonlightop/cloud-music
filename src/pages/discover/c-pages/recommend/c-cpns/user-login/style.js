import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;

  .info-desc {
    margin: 0 auto;
    width: 205px;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
    font-size: 13.5px;
  }

  .user-login {
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    margin: 0 auto;


    text-shadow: 0 1px 0 #8a060b;
    cursor: pointer;
    background-position: 0 -195px;
  
    &:hover {
      background-position: -110px -195px;
    }
  }

`;