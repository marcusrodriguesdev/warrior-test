import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 0px;

  .question {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    box-shadow: 0 0 1em gray;
    font-size: 24px;
  }

  .category {
    display: flex;
    height: 200px;
    align-items: center;
    justify-content: center;
    font-size: 22px;

    .box {
      display: flex;
      align-items: center;
      color: white;
      border-radius: 4px;
      background: #61a5c2;
      justify-content: center;
      width: 500px;
      box-shadow: 0 0 1em gray;
      height: 130px;
    }
  }
`;
