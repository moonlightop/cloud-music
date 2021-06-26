import styled from 'styled-components';

export const BackTop = styled.button`

  display: block;
  cursor: pointer;
  position: fixed;
  text-indent: -9999px;
  left: 50%;
  bottom: 160px;
  width: 49px;
  height: 44px;
  margin-left: 500px;
  background-position: -265px -47px;

  &:hover {
    background-position: -325px -47px;
    color: rgb(51,51,51);
  }

`;