import styled from 'styled-components';

export const ArtistListWrapper = styled.div`
  padding: 40px;
`;

export const ArtistListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;

  .left-title {
    font-size: 24px;
  }
  .right-title {
    color: #666;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

`;

export const ArtistListContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 0 40px;
`;
