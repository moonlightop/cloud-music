import styled from 'styled-components';

export const CategoryListWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-height: 194px;
  margin-bottom: 30px;

  li {
    margin-left: 33px;
    margin-bottom: 25px;
    &:hover {
      .pic-container {
        text-decoration: none;
        background-position: 0 0;
      }
      .actived-cate {
        background-position: -70px 0;
        color: #d35757;
        .cate-pic {
          background-position: -48px 0;
        }
      }
    }
    
    .pic-container {
      display: block;
      width: 70px;
      height: 70px;
      text-align: center;
      color: #888;
      cursor: pointer;
    
      .cate-pic {
        margin: 0 auto;
        background-position: 0 0;
        width: 48px;
        height: 48px;
      }
    }

    .actived-cate {
      background-position: -70px 0;
      color: #d35757;
      .cate-pic {
        background-position: -48px 0;
      }
    }

  }
  
  li:nth-child(1),li:nth-child(10) {
    margin-left: 0;
  }

`;