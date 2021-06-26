import styled from 'styled-components';

export const Toast = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  
  width: 245px;
  padding: 10px 5px;
  font-size: 15px;
  text-align: center;
  box-sizing: content-box;

  z-index: 9999;
`;
