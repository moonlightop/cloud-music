import styled from 'styled-components';

export const DownloadAppWrapper = styled.div`
  .bg {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 65px;
    background-position: 0 -392px;

    display: flex;
    justify-content: space-between;

    li a {
      display: block;
      width: 42px;
      height: 48px;
      text-indent: -9999px;
    }

    li:nth-child(2) {
      margin-left: -22px;
    }
    li:nth-child(3) {
      margin-left: -5px;
    }

    .ios:hover {
      background-position: 0 -472px;
    }
    .pc:hover {
      background-position: -72px -472px;
    }
    .aos:hover {
      background-position: -161px -472px;
    }

  }

  .desc {
    color: #999;
    margin-bottom: 40px;
  }

`;