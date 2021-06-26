import styled from 'styled-components';

export const HotRecommendWrapper = styled.div`
  margin-bottom: 35px;

  .hot-content {

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 20px;

    li:nth-child(4n + 1) {
      padding-left: 0px;
    }

  }

`;