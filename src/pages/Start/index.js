import { Button, ThemeProvider  } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from '../../styles/GlobalStyle';
import { Container } from './styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    test: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

function Start() {
  let navigate = useNavigate();

  return (
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={ theme }>
        <section>
          <h1>Start the game?</h1>
          <Button
            variant="contained"
            color="secondary"
            type="button"
            onClick={ () => navigate('/') }
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="button"
            onClick={ () => navigate('/quiz') }
          >
            Start
          </Button>
        </section>
      </ThemeProvider>
    </Container>
  )
}

export default Start;