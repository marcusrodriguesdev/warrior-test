import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  div {
    flex-wrap: wrap;
    display: flex;
    width: 810px;
    height: 300px;

    button {
      cursor: pointer;
      border-radius: 4px;
      font-size: 18px;
      margin: 1px;
      height: 150px;
      border: 1px solid black;
      width: 400px;
    }
  }

  .correct-answer {
    border: 3px solid rgb(6, 240, 15);
  }

  .incorrect-answer {
    border: 3px solid red;
  }

`;
