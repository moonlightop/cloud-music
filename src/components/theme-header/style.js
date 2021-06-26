import styled from 'styled-components';

export const ThemeHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;

  padding-right: ${({ isIcon }) => isIcon ? '10px' : '0'};
  padding-left: ${({ isIcon }) => isIcon ? '34px' : '0'};
  box-sizing: border-box;

  background-color: #fff;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;

`;

export const LeftContent = styled.div`

  height: 33px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;

  .theme-name {
    font-size: 24px;
    font-weight: normal;
    line-height: 28px;
    cursor: ${({ isIcon }) => isIcon ? 'pointer' : 'normal'};
    margin-right: 20px;

  }

  .desc {
    font-size: 13px;
    color: #666;

    .desc-item:hover {
      cursor: ${({ isIcon }) => isIcon ? 'pointer' : 'auto'};;
      text-decoration: ${({ isIcon }) => isIcon ? 'underline' : 'none'};
    }

    .line {
      margin: 0 10px;
    }

  }

`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  a {
    cursor: pointer;
    color: #666;
  }

  .right-arrow {
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;

    background-position: 0 -240px;
  }

  .play-count {
    color: #c20c0c;
    font-weight: bold;
  }

`;