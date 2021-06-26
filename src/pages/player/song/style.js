import styled from 'styled-components';

export const SongWrapper = styled.div`
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  min-height: 700px;

  display: flex;
  justify-content: flex-start;
  background-color: #fff;

  .error {
    margin-top: 49px;
    color: #999;
    text-decoration: underline;
    text-align: right;
    cursor: pointer;
  }
`;

export const LeftContent = styled.div`
  border: 1px solid #d3d3d3;
  border-width: 0;
  border-right-width: 1px;
  width: 709px;
  height: 100%;
  padding: 47px 30px 40px 39px;

`;

export const RightContent = styled.div`
  width: 270px;
  height: 100%;

  padding: 20px 40px 40px 30px;

`;