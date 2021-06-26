import styled from 'styled-components';

export const NoLoginPageWrapper = styled.div`

  min-height: 645px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  // 公共样式
  .friend-bg,.my-bg {
    margin: 0 auto;

    .title {
      line-height: 23px;
      color: #666;
      font-size: 14px;
    }

    .btn {
      display: block;
      text-indent: -9999px;
    }
  }

  /* 独立样式 */
  .friend-bg {
    background: url(${require('../../assets/img/no-login-page/friend_sprite.jpg').default}) no-repeat center 0;
    background-position: 0 70px;
    padding-top: 70px;
    width: 902px;
    height: 430px;
    // 两个按钮重叠显示
    .btn {
      width: 157px;
      height: 48px;
      margin: 36px 0 0 535px;
      background: url(${require('../../assets/img/no-login-page/friend_sprite.jpg').default}) no-repeat 0 9999px;
      &:hover {
        background-position: 0 -430px;
      }
    }
    .title {
      padding: 178px 0 0 535px;
    }
  }

  .my-bg {
    
    background: url(${require('../../assets/img/no-login-page/mine_sprite.png').default}) no-repeat center 0;
    background-position: 0 104px;
    padding-top: 104px;
    width: 807px;
    height: 270px;
    
    .title {
      height: 100px;
      text-indent: -9999px;
    }
    
    .btn {
      width: 167px;
      height: 45px;
      margin: 102px 0 0 482px;
      background: url(${require('../../assets/img/no-login-page/mine_sprite.png').default}) no-repeat 0 9999px;
      &:hover {
        background-position: 0 -278px;
        text-decoration: none;
      }
    }

  }

`;