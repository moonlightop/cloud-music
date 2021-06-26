import styled from 'styled-components';

export const DjRadioCoverWrapper = styled.li`

  width: 150px;
  margin-left: 37px;
  
  .pic {
    display: block;
    width: ${props => props.size === "200px" ? "150px" : `${props.size}`};
    height:${props => props.size === "200px" ? "150px" : `${props.size}`};
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    width: 295px;
    h3 {
      margin: 13px 0 6px;
      line-height: 16px;
      font-size: 14px;
      font-weight: normal;
      color: #000;
    }

    p {
      line-height: 18px;
      color: #999;
    }
  }

`;