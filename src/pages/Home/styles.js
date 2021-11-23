import styled from 'styled-components';

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: 'Roboto', sans-serif;
  background: #FFF;
  color: #000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxInfo = styled.section`
  width: 352px;
  height: 300px;
  background: white;
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 1em gray;

  h3 {
    margin-bottom: 50px;
  }

  .Button {
    margin-top: 45px;
    width: 200px;
  }
`;
