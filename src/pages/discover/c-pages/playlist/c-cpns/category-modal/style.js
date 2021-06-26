import styled from 'styled-components';

export const CategoryModalWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 75px;
  z-index: 5;

  width: 720px;
  padding: 0 10px;
  background-position: -720px 0;
  background-repeat: repeat-y;


  .tag-header {
    height: 32px;
    /* 左右10px给阴影显示 */
    padding: 0 10px;
    background-position: 0 0;
    background-repeat: no-repeat;

    position: relative;
    .tri {
      position: absolute;
      top: 2px;
      left: 132px;

      display: block;
      width: 24px;
      height: 11px;
      text-indent: -9999px;
      background-position: -48px 0;
    }
  }

  .tag-category {
    /* 左右10px给阴影显示 */
    padding: 0 10px;
    background-position: -720px 0;
    background-repeat: repeat-y;
  
    .all-style {
      font-weight: normal;
      border-bottom: 1px solid #e6e6e6;
      padding-left: 26px;
      height: 37px;

      .title {
        display: inline-block;
        cursor: pointer;
        width: 75px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        color: #333;
        font-size: 12px;

        background-position: 0 -64px;
        &:hover {
          text-decoration: underline;
        }

      }
    }

    dl {
      display: flex;
      justify-content: flex-start;
    }
    dl:nth-child(2) dt .icon-style {
      background-position: -20px -735px;
    }  
    dl:nth-child(3) dt .icon-style {
      background-position: 0 -60px;
    }
    dl:nth-child(4) dt .icon-style {
      background-position: 0 -88px;
    }
    dl:nth-child(5) dt .icon-style {
      background-position: 0 -117px;
    } 
    dl:nth-child(6) {
      dt .icon-style {
        background-position: 0 -141px;
      }
      dd {
        padding-bottom: 25px;
      }
    }

    dt {
      flex-shrink: 0;
      width: 70px;
      margin-left: 26px;
      padding-top: 15px;
      
      font-weight: bold;
      text-align: center;

      .icon-style {
        margin-right: 8px;
        margin-bottom: 4px;
        display: inline-block;
        width: 24px;
        height: 24px;
        background-position: 0 -60px;
        vertical-align: middle;
      }

      .tag-name {
        margin-right: 13px;
      }

    }

    dd {
      padding: 16px 15px 0 15px;
      line-height: 24px;
      border-left: 1px solid #e6e6e6;

      .line {
        margin: 0 10px;
        color: #d8d8d8;
      }

      .subTagName {
        cursor: pointer;
        color: #333;
        white-space: nowrap;
        &:hover {
          text-decoration: underline;
        }
      }

      .selected-category-tag {
        background-color: #a7a7a7;
        color: #fff;
        padding: 2px 6px;
      }

    }
  
  }

  .footer-bg {
    height: 20px;
    background-position: -1440px -12px;
  }

`;