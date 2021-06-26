import styled from 'styled-components';

export const ArtistCategoryWrapper = styled.div`
  
  padding: 50px 9px 40px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

  background-color: #fafafa;

  .section {
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;

    &:last-of-type {
      border-bottom: none;
    }
    .title {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      font-family: "Microsoft Yahei";
      margin-bottom: 5px;
    }
  }

`;

export const ArtistCategoryItem = styled.li`
  color: #333;
  height: 29px;
  line-height: 29px;
  margin-bottom: 2px;
  cursor: pointer;

  &.actived {
    .icon-circle {
      color: red;
      background-position: 0 0;
    }
  }

  
  .icon-circle {
    display: inline-block;
    box-sizing: border-box;
    width: 160px;
    padding-left: 27px;
    background: url(${require("@assets/img/singer_sprite.png").default}) no-repeat 0 -30px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;