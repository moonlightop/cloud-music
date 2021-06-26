import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`
  background-color: #fff;

`;

export const NewAlbumContent = styled.div`
  position: relative;

  height: 184px;
  padding-left: 16px;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin: 20px 0 37px;

  .banners {
    width: 645px;
    margin-left: 5px;
    margin-top: 12px;
    height: 180px; 

    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    position: relative;

    .banners-item {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      width: 100%;

      position: absolute;

      li {
        background-position: -260px 100px;
        margin: 0;
        .artist {
          margin: 0;
        }
      }
    }
  }


  .left-arrow,.right-arrow  {
    display: inline-block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 71px;
    cursor: pointer;

  }

  .left-arrow {
    left: 4px;
    background-position: -260px -75px;
    &:hover {
      background-position: -280px -75px;

    }
  }

  .right-arrow {
    right: -2px;
    background-position: -300px -75px;
    &:hover {
      background-position: -320px -75px;  
    }

  }

`;