import styled from 'styled-components';

export const SimilarSongWrapper = styled.div`

  .simi-song-list {
    margin-bottom: 25px;

    li {
      display: flex;
      justify-content: space-between;

      margin-top: 10px;

      .song-item-left {
        cursor: pointer;
        line-height: 16px;

        .songName {
          color: #333;
        }
        .authors {
          color: #999;
        }

      }

      .song-item-right {
        line-height: 32px;

        i {
          display: inline-block;
          width: 10px;
          height: 11px;
          opacity: 0.9;
          margin-right: 16px;
          cursor: pointer;
        }

        .icon-play {
          background-position: -69px -455px;
        }
        .icon-plus {
          background-position: -87px -454px;
        }

      }

    }

  }

`;