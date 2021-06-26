import styled from 'styled-components';


export const AppHeaderWrapper = styled.div`
  font-size: 14px;
  width: 100%;
  
  background-color: #242424;
  box-sizing: border-box;

`;

export const AppHeader = styled.div`
  height: 70px;
  line-height: 70px;
  font-size: 16px;
  border-bottom: 1px solid #000;

  width: 100%;

  .wrapper {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }

`;

export const LeftContent = styled.div`

  width: 695px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  
  .logo{
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    .title {
      display: block;
      width: 157px;
      height: 100%;
      padding-right: 20px;
      text-indent: -9999px; // 需要block才能使用
    }
  }

  .selected-item {
    position: relative;
    flex-grow: 1;
    text-align: center;

    a {
      display: block;
      color: #ccc;
      font-size: 14px;
      position: relative;

    }

    &:last-child {
      &::after {
        position: absolute;
        content: "";
        width: 28px;
        height: 19px;
        background-image: url(${require('../../assets/img/app-header/topbar.png').default});
        background-position: -190px 0;
        top: 21px;
        left: 100px;
      }
    }

    .active-nav .icon {
      display: block;
      position: absolute;
      left: 50%;
      top: 64px;

      width: 12px;
      height: 7px;
      margin-left: -6px;
      background-image: url(${require('../../assets/img/app-header/topbar.png').default});
      background-position: -226px 0;
    }

    &:hover a, .active-nav {
      color: #fff;
      text-decoration: none;
      height: 70px;
      background-color: #000;
    }

  }

`;
export const RightContent = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #ccc;
  font-size: 12px;

  .searchBg {
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;

    width: 158px;
    height: 32px;

    .sparent {
      display: block;
      position: relative;
      margin: 8px 0 0 30px;
      width: 128px;
      height: 16px;
      .search {
        color: #333;
        line-height: 16px;
        position: absolute;
        width: 95%;
        margin: 0;
        padding: 0;
        background: transparent;
      }
      .search-title {
        display: block;
        position: absolute;
        top: -26px;
        left: 3px;
        width: 90%;
        color: #9b9b9b;
        cursor: text;
      }
    }

  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 33px;
    margin: 19px 13px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4F4F4F;
    color: #ccc;
    border-radius: 20px;
    
    &:hover {
      text-decoration: none;
      border: 1px solid #ccc;
      color: #fff;
    }
  }

  .login {
    display: block;
    width: 28px;
    margin-top: 7px;
    &:hover {
      color: #a89d9d;
    }
  }

`;


export const SubNavUp = styled.div`
  height: 5px;
  box-sizing: border-box;
  background-color: #C20C0C;
  margin: 0 auto;
`;