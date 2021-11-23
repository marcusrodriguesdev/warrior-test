import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import { Container } from './styles';

function Feedback() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  const { error, score } = ranking.player;
  return (
    <Container>
      <GlobalStyle />
      <div className="hits">
        <h3>
          Your number of hits: 
        </h3>
        <h2>{score}</h2>
      </div>
      <div className="error">
        <h3>
          Your number of errors:
        </h3>
        <h2>{error}</h2>
      </div>
    </Container>
  );
}

export default Feedback;