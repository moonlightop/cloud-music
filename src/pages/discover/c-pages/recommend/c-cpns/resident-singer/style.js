import styled from 'styled-components';

export const ResidentSingerWrapper = styled.div`
  margin-top: 15px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    font-size: 13px;

    .title {
      color: #333;
      font-weight: bold;
    }

  }

  .singers-content {

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    margin: 6px 0 14px 20px;
    cursor: pointer;

    li {
      width: 210px;
      height: 62px;
      background: #fafafa;
      margin-top: 14px;
      &:hover {
        background: #e7e7e7;
      }

      display: flex;

      .singer-info {
        padding-left: 14px;
        width: 133px;
        height: 60px;
        border: 1px solid #e9e9e9;
        border-left: none;

        .singer-name,.singer-desc {
          margin-top: 8px;
          span {
            font-size: 15.5px;
            font-weight: bold;
          }
        }

        .singer-desc {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #666;
        }

      }

    }

  }

  .footer {
    margin-left: 20px;
    border-radius: 4px;
    color: #333;
    text-align: center;
    line-height: 31px;

    a {
      display: block;
      width: 205px;
      text-decoration: none;
      padding-right: 3.5px;
      background-position: right -100px;

      &:hover {
        background-position: right -182px;
      }
      &:active {
        background-position: right -264px;
      }

      &:hover i {
        background-position: 0 -141px;
      }
      &:active i {
        background-position: 0 -223px;
      }
    
      i {
        display: block;
        width: 170px;
        height: 31px;
        font-weight: bold;
        color: #333;
        padding: 0 15px 0 20px;
        background-position: 0 -59px;
      }

    }

  }

`;