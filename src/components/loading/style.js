import styled, { keyframes } from 'styled-components';

const nprogressSpinner = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoadingSpinnerIcon = styled.div`
  position: fixed;
  z-index: 1031;
  top: 50%;
  right: 50%;
  transform: translate(-50%,-50%);


  width: 50px;
  height: 50px;
  box-sizing: border-box;

  border: solid 5px transparent;
  border-top-color: #C20C0C;
  border-left-color: #C20C0C;
  border-radius: 50%;

  animation: ${nprogressSpinner} 800ms linear infinite;
`;