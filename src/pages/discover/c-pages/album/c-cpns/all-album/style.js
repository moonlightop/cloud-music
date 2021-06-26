import styled from 'styled-components';

export const AllAlbumWrapper = styled.div`



  .pic {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 20px;

    li:nth-child(5n + 1) {
      margin-left: 0;
    }

    li button.icon-play {
      width: 28px;
      height: 28px;
      bottom: 5px;
      right: 10px;

      background-position: 0 -140px;
      &:hover {
        background-position: 0 -170px;
      }    
    }

  }


`;