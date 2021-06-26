
import styled from 'styled-components';

export const AppFooterWrapper = styled.div`
  border-top: 1px solid #d3d3d3;
  height: 172px;

  .content {
    display: flex;
    justify-content: space-between;
  }

`;

export const LeftContent = styled.div`
  width: 520px;
  padding-top: 15px;
  line-height: 24px;

  .titles a {
    color: #999;
    cursor: pointer;
  }
  .line {
    margin: 0 8px 0 10px;
    color: #c2c2c2;
  }

  .gap {
    margin-right: 14px;
    color: #666;
  }

  .police-logo {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 2px;
    vertical-align: -2px;
    background: url(${require("@assets/img/app-footer/police.png").default}) no-repeat;
    background-size: cover;
  }
`;

export const RightContent = styled.ul`
  display: flex;
  margin-top: 33px;
  height: 70px;


  .item {
    margin-right: 30px;
    width: 60px;

    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;

    &:last-child {
      margin-right: 0;
    }

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${require("@assets/img/app-footer/foot_enter_new.png").default});
      background-size: 110px 552px;
      text-indent: -9999px;
    }

    &:nth-child(1) .link {
      background-position: -60px -456.5px;
    }
    &:nth-child(2) .link {
      background-position: -60px -101px;
    }
    &:nth-child(3) .link {
      background-position: 0 0;
    }
    &:nth-child(4) .link {
      background-position: -60px -50px;
    }
    &:nth-child(5) .link {
      background-position:  0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@assets/img/app-footer/foot_enter_tt.png").default});
      background-size: 180px 139px;
    }

    &:nth-child(1) .title {
      background-position: 0px -108px;
      width: 72px;
      margin-left: -6px;
    }
    &:nth-child(2) .title {
      background-position: -1px -91px;
      margin-top: 7px;
    }
    &:nth-child(3) .title {
      background-position: 0 0px;
      margin-top: 6px;
    }
    &:nth-child(4) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }
    &:nth-child(5) .title {
      background-position: -1px -72px;
    }

  }

`;