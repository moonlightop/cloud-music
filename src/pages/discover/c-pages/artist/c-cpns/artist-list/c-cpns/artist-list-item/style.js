import styled from 'styled-components';

export const ZHArtistListItemWrapper = styled.li`

  width: 130px;
  margin-top: ${props => props.isImg ? '15px' : '12px'};

  .image img {
    width: 130px;
    height: 130px;
  }

  .info {
    margin: ${props => props.isImg ? '10px 0' : '0'};
    display: flex;
    justify-content: ${props => props.isImg ? 'space-between' : 'flex-start'};

    .name {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      margin-left: 2px;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }

  }

`;