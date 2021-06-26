import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  padding: 40px;
  background: #fff;

  position: relative;

`;

export const PlayListHeader = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #c20c0c;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;

  .classTag {
    vertical-align: top;
    font-size: 24px;
    font-weight: normal;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .select-btn {
    margin-left: 12px;
    margin-top: 2px;
    color: #333;
    cursor: pointer;
    background-position: right -100px;
    

    padding-right: 5px;
    display: inline-block;

    &:hover {
      background-position: right -182px;
      span { background-position: 0 -141px; }
    }
    &:active {
      background-position: right -264px;
      span { background-position: 0 -223px; }
    }

    span {
      color: #0c73c2;
      padding-right: 10px;
      padding-left: 15px;
      background-position: 0 -59px;

      display: inline-block;

      height: 31px;
      line-height: 31px;
      white-space: nowrap;

    }
    i  {
      display: inline-block;
      width: 8px;
      height: 5px;
      margin-left: 5px;

      background-position: -70px -543px;
    }

  }

  .hot {
    display: inline-block;
    height: 29px;
    line-height: 29px;
    text-align: center;
    width: 46px;
    border-radius: 3px;
    cursor: pointer;
    background-position: 0 0;

    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }

`;

export const PlayListContent = styled.ul`
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li:nth-child(5n + 1) {
    padding-left: 0px;
  }

`;