import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, BoxInfo } from './styles';
import Context from '../../context/Context';
import GlobalStyle from '../../styles/GlobalStyle';
import { Button, TextField, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6fbf73',
      main: '#4caf50',
      dark: '#357a38',
      contrastText: '#fff',
    },
  },
});

function Home() {
  const { quantity,  setQuantity } = useContext(Context);
  const [disableButton, setDisabledButton] = useState(true);
  let navigate = useNavigate();

  function enableButton() {
    if (quantity > 0) {
      return setDisabledButton(false);
    } else {
      return setDisabledButton(true);
    }
  }

  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={ theme }>
      <BoxInfo>
        <h3>Choose the number of questions:</h3>
        <div>
          <TextField
            type="number"
            value={ quantity }
            helperText="Please choose your number"
            name="quantity"
            id="quantity"
            onChange={ ({ target }) => { 
            setQuantity(target.value);
            enableButton();
            } }
          />
        </div>
        <div>
          <Button
            className="Button"
            variant="contained"
            color="primary"
            type="button"
            disabled={ disableButton }
            onClick={ () => navigate('/start')}
          >
            Ready
          </Button>
        </div>
      </BoxInfo>
      </ThemeProvider>
    </Container>
  );
}

export default Home;