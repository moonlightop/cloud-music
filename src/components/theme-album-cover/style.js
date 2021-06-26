import styled from 'styled-components';

export const ThemeAlbumCoverWrapper = styled.li`
  /* 外部flex布局时自己消除左侧的margin-left */
  margin-left: 33px;
  margin-bottom: 30px;
  width: ${props => props.width};

  .artist,.song {
    width: 100%;
    margin-top: 8px;

    a {
      color: #666;
      cursor: pointer;
      line-height: 18px;
    }

  }
  .song a {
    font-size: 14px;
    color: #000;
  }


`;

export const THemeAlbumCoverPiture = styled.div`
  margin-bottom: 7px;
  width: ${props => props.size};
  height: ${props => props.size};
  cursor: pointer;
  position: relative;

  .icon-ablum {
    display: inline-block;
    width: ${props => props.width};
    height: ${props => props.size};

    background-position: ${
      props => props.size === '130px' ? 
        '0 -845px' : '0 -570px'
    };
    text-indent: -9999px;

    position: absolute;
    left: 0;
    top: 0;

  }

  .icon-play {
    display: none;
    width: 22px;
    height: 22px;
    text-indent: -9999px;
    cursor: pointer;

    position: absolute;
    bottom: 5px;
    right: 10px;
    background-position: 0 -85px;

    &:hover {
      background-position: 0 -110px;
    }

  }

  &:hover .icon-play {
    display: inline-block;
  }

`;