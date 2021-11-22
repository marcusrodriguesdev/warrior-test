import React, { useContext } from 'react';
import Context from '../../context/Context';
import decode from '../../global/decode';

import { Container } from './styles';

function Question({ questionNumber }) {
  const { data: { results } } = useContext(Context);

  function displayQuestion() {
    const { question, category } = results[questionNumber];
    return (
      <Container>
        <div className="question">
          <p data-testid="question-text">
            { decode(question) }
          </p>
        </div>
        <div className="category">
          <div className="box">
            <p data-testid="question-category">
              { category }
            </p>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div>
      { displayQuestion() }
    </div>
  );
}

export default Question;