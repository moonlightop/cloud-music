import styled from 'styled-components';

export const ToolTipWrapper = styled.div`

  // 相对浏览器进行绝对定位
  .tool-tip,.tool-qr,.tool-qr-layout{
    position: absolute;
    line-height: 1.5;
    padding: 1px;
    z-index: 1070;

    // border画三角形
    .arrow {
      position: absolute;
      border-style: solid;
      border-width: 0 10px 10px;
      border-color: transparent;
      border-bottom-color: #fff;
    }
    .inner {
      color: #333333;
      text-align: left;
      // 整个对话框
      .modal {
        background-color: #fff;
        box-shadow: 0 0 10px 0 rgba(0,0,0,50%);
        border-radius: 12px;
        box-sizing: border-box;

        // 很头疼的一点，就是如何用flex布局交叉轴间隙一样！
        display: flex;
        justify-content: space-evenly;
        align-items: stretch;
        flex-wrap: wrap;

        // 包含图标和文字的容器
        .btn {
          display: flex;
          align-items: center;
          
          width: 113px;
          height: 45px;
          line-height: 45px;
          font-family: 'PingFangSC-Regular';
          background: rgba(0, 0, 0, 0.08);
          text-decoration: none;

          font-size: 12px;
          color: #333333;

          &:nth-child(1),&:nth-child(2) {
            margin-top: 13px;
          }

          // 图标公共样式
          i {
            display: inline-block;
            width: 26px;
            height: 26px;
            margin: 0 10px;
            cursor: pointer;
            background-size: contain;
            background-repeat: no-repeat;
          }
          // 图标独立样式
          .aos {
            background-image: url(${require('@assets/img/download/aos.png').default});
          }
          .iphone,.ipad {
            background-image: url(${require('@assets/img/download/apple.png').default}) ;
          }
          .mac {
            background-image: url(${require('@assets/img/download/download-mac.png').default}) ;
          }
          .pc {
            background-image: url(${require('@assets/img/download/download-windows.png').default}) ;
          }
          .linux {
            background-image: url(${require('@assets/img/download/linux.png').default}) ;
          }

        }

        // 通过顶部和底部添加伪元素来实现align-items: space-evenly
        // &:before,
        // &:after {
        //     content: '';
        //     display: block;
        // }

      }
    }
  }

  div.tool-tip {
    top: 50px;
    right: 0px; 
    .arrow {
      top: -8px;
      right: 15%;
    }
    .modal {
      width: 276px;
      height: 250px;
    }
  }
  div.tool-qr {
    top: 233px;
    right: 45px; 
    .arrow {
      bottom: -9px;
      left: 50%;
      border-width: 10px 10px 0;
      border-top-color: #fff;
    }
    .modal {
      width: 204px;
      height: 224px;
      
      .qr-image {
        padding-top: 20px;
        width: 164px;
        height: 164px;
      }
      p {
        // margin-top: 7px;
        width: 100%;
        font-size: 14px;
        color: #333333;
        text-align: center;
      }
    }
  }
  div.tool-qr-layout  {
    position: fixed;
    top: 483px;
    right: 47px;
    z-index: 1100;
    padding: 16px 18px 9px;
    border-radius: 10px;
    color: #333;
    font-size: 12px;
    text-align: center;

    .modal {
      width: 136px;
      height: 151px;
      .qr-image {
        padding-top: 15px;
        width: 100px;
        height: 100px;
      }
    } 

  }
`;