import styled from 'styled-components';

export const LoginWrapper = styled.div`

  width: 530px;
  max-height: 372px;

  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.8);
  border: none;
  z-index: 9998;
  // 居中定位
  position: fixed;
  // left: 50%;
  // top: 50%;
  transform: translate(-50%,-50%);

`;

export const LoginHeader = styled.div`

  cursor: move; // 头部可以移动
  user-select: none;

  background: #2d2d2d;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #191919;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .title {
    display: block;
    height: 38px;
    line-height: 38px;

    border-radius: 3px 3px 0 0;
    font-weight: bold;
    font-size: 16px;
    color: #fff;

    padding-left: 18px;
  }
  .icon {
    display: block;
    height: 38px;
    width: 45px;
    background: url(${require('../../assets/img/login/layer.png').default});
    background-position: 18px 110%;
    cursor: pointer;
  }

`;