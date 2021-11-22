import React, { useContext } from 'react';
import Context from '../../context/Context';
import decode from '../../global/decode';

// import { Container } from './styles';

function Question({ questionNumber }) {
  const { data: { results } } = useContext(Context);

  function displayQuestion() {
    const { question, category } = results[questionNumber];
    return (
      <div>
        <p data-testid="question-category">{ category }</p>
        <p data-testid="question-text">{ decode(question) }</p>
      </div>
    );
  }

  return (
    <div>
      { displayQuestion() }
    </div>
  );
}

export default Question;