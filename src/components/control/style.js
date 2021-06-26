import styled from 'styled-components';

export const ControlWrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    height: 31px;
    line-height: 31px;
    min-width: 23px;
    text-align: center;
    cursor: pointer;
    margin-right: 6px;

    padding-right: 4px; // 放按钮的右小部分

    /* 白色按钮 */
    background-position: right -1020px;

    &:active {
      user-select: none;
    }
    
    &:hover {
      background-position: right -1106px;
      .btn {
        background-position: 0 -1063px;
      }
    }

    .btn {
      display: inline-block;
      height: 31px;
      /* 用于放图标 */
      padding-right: 2px;
      padding-left: 28px;
      min-width: 23px;

      em {
        display: inline-block;
        width: 20px;
        height: 18px;
        margin: 6px 2px 2px 0;
        vertical-align: top;
      }
    }

  }

  /* 播放歌曲 - 蓝色按钮 */
  .icon0 {

    margin-right: 0;
    background-position: right -428px;
    color: #fff;

    &:hover {
      background-position: right -510px;
      .btn{
        background-position: 0 -469px;
      }
      .btn em {
        background-position: -28px -1622px;
      }
    }
    &:active {
      background-position: right -592px;
      .btn {
        background-position: 0 -551px;
      }
      .btn em {
        background-position: -56px -1622px;
      }
    }

    .btn {
      padding-left: 8px;
      padding-right: 7px;
      background-position: 0 -387px;

      em {
        background-position: 0 -1622px;
      }

    }

  }
  /* 添加到播放列表 - 蓝色按钮*/
  .icon-plus {

    width: 31px;
    margin-left: -5px; 
    padding-right: 0px;

    background-position: 0 -1588px;

    &:hover {
      background-position: -40px -1588px;
    }
    &:active {
      background-position: -80px -1588px;
    }

  }
  
  .icon1 {
    .btn {
      background-position: 0 -977px;
    }
    &:hover .btn {
      background-position: 0 -1063px;
    }
  }

  .icon2 {
    .btn {
      background-position: 0 -1225px;
    }
    &:hover .btn{
      background-position: 0 -1268px;
    }
  }

  .icon3 {
    .btn {
      background-position: 0 -2761px;
    }
    &:hover .btn {
      background-position: 0 -2805px
    }
  }

  .icon4 {
    .btn {
      background-position: 0 -1465px;
      font-size: 11px;
    }
    &:hover .btn{
      background-position: 0 -1508px;
    }
  }

`;