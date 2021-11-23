import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #F4F3EE;
  display: flex;
  align-items: center;
  justify-content: center;

  .hits {
    height: 300px;
    margin-right: 35px;
    border-radius: 6px;
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1em gray;

    h3 {
      font-size: 25px;
      margin-top: 25px;
    }

    h2 {
      font-size: 31px;
      margin-top: 55px;
    }
  }

  .error {
    height: 300px;
    width: 300px;
    text-align: center;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1em gray;

    h3 {
      font-size: 25px;
      margin-top: 25px;
    }

    h2 {
      font-size: 31px;
      margin-top: 55px;
    }
  }
`;
