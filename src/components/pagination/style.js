import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin: 20px 0;
  text-align: center;

  .btn {
    color: #333;
    width: 47px;
    height: 24px;
    line-height: 24px;
    padding: 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    vertical-align: middle;

    box-sizing: content-box;
    cursor: pointer;
  }

  .prev {
    padding-left: 22px;
    background-position: 0 -560px;
    margin-right: 7px;
    text-align: left;
    &:hover {
      background-position: 0 -620px;
    }
  }
  .prev-disabled {
    background-position: 0 -620px;
    color: #cacaca;
    cursor: default;
  }

  .dot {  
    margin-right: 7px;
  }

  span {
    display: inline-block;
    padding: 0;
    height: 22px;
    line-height: 22px;
    padding: 0 8px;
    margin-right: 7px;

    vertical-align: middle;

    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    color: #666;
    cursor: pointer;

    :hover {
      border-color: #666;
    }

  }
  span.actived-btn {
    color: #fff;
    border-color: #A2161B;
    cursor: default;
    background-position: 0 -650px;
  }

  .next {
    padding-right: 22px;
    background-position: -75px -560px;  
    text-align: right;
    &:hover {
      background-position: -75px -590px;
    }
  }
  .next-disabled {
    background-position: 0 -620px ;
    color: #cacaca ;
    cursor: default ;
  }

`;