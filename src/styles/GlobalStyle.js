import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .notDisplay {
    display: none;
  }

  .box-button {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 20px;
    margin-right: 35px;
  }

  .display {
    display: inherit;
    height: 30px;
    text-align: center;
    width: 100px;
    border: none;
    color: white;
    border-radius: 4px;
    font-weight: 700;
    background: #4caf50;
    font-size: 15px;
    cursor: pointer;
  }
`;

export default GlobalStyle;