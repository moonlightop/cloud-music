import styled from 'styled-components';


export const BannersWrapper = styled.div`
  width: 100%;
  height: 285px;
`;

// 高斯模糊背景图
export const Bg = styled.div`
  width: 100%;
  height: 285px;
  background-repeat: no-repeat;
  background-size: 6000px;
  background-position: center center;

`;

// 轮播图容器
export const Banners = styled.div`
  height: 285px;
  position: relative;

  /* 箭头 */
  .left-arrow,.right-arrow {
    display: block;
    height: 63px;
    width: 37px;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

  }
  .left-arrow {
    left: -10%;
    background-position: 0 -360px;
    
    &:hover {
      background-position: 0 -430px;
    }

  }
  .right-arrow {
    right: -10%;
    background-position: 0 -508px;

    &:hover {
      background-position: 0 -578px;
    }

  }

`;


// 图片
export const Piture = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  
  width: 730px;
  overflow: hidden;

  /* 每张图片宽度 */
  .piture-item img {
    width: 730px;
  }  

`;


// 圆点
export const Circle = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(calc(-50% - 127px));
  height: 28px;
  width: 730px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  .circle-item {
    display: block;
    width: 20px;
    height: 20px;
    margin-left: 3px;
    cursor: pointer;

    background-position: 3px -343px;
  
    &:hover {
      background-position: -16px -343px;
    }

  }

  .actived {
    background-position: -16px -343px;
  }

`;


// 下载界面
export const Download = styled.div`
  position: absolute;
  right: 0px;
  top: 0;

  width: 250px;
  height: 285px;

  background: url(${require('@assets/img/recommend/download.png').default}) no-repeat 0 0;

  a {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
    background: url(${require('@assets/img/recommend/download.png').default}) no-repeat 0 9999px;
    
    &:hover {
      background-position: 0 -290px;

    }

  }

  p {
    margin: 11px auto;
    text-align: center;
    color: #8d8d8d;
  }

  /* 左右阴影 */
  span {
    display: block;
    width: 20px;
    height: 285px;
    position: absolute;
    top: 0;

  }

  .shadowl {
    background-position: -1px 0;
    left: -20px;

  }

  .shadowr {
    background-position: -20px 0;
    right: -20px;
  
  }

`;