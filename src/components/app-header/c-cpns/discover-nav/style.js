
import styled from 'styled-components';

export const DiscoverNavWrapper= styled.div`
  height: 35px;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;
  box-sizing: border-box;

`;

export const DiscoverNav = styled.div`
  height: 100%;
  width: 519px;
  height: 34px;
  padding-left: 176px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    flex-grow: 1;

    height: 16px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    margin-left: 20px;
    padding: 2px 13px;

    font-size: 12.5px;
    cursor: pointer;
    border-radius: 20px;

  }

  a:hover,.active-sub-nav {
    background: #9B0909;
  }

  a:nth-of-type(3) {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 1px;
      background: url(${require('@assets/img/discover/white-r-icon@3x.png').default});
      background-size: cover;
      width: 8px;
      height: 8px;
    }
  }

`;