import React, { useContext } from 'react';
import Context from '../../context/Context';
import decode from '../../global/decode';
// import './style.css';

import { Container } from './styles';

function Alternatives({ questionNumber }) {
  const { 
    data: { results }, score, setScore, error, setError
  } = useContext(Context);

  const {
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswer,
  } = results[questionNumber];
  const answers = [correctAnswer, ...incorrectAnswer];
  answers.sort();

  function applyColor() {
    const correct = document.querySelector('.correct');
    correct.className = 'correct correct-answer';
    correct.disabled = true;

    const incorrect = document.querySelectorAll('.incorrect');
    incorrect.forEach((item) => {
      item.className = 'incorrect incorrect-answer';
      item.disabled = true;
      return item;
    });

    const btnNext = document.querySelector('#btn-next');
    btnNext.className = 'display';
  }

  function calculateError() {
    applyColor();
    setError(error + 1);
  }

  function calculateScore() {
    applyColor();
    setScore(score + 1);
  }

  function displayAnswer() {
    return (
      <div>
        {answers.map((answer, index, array) => {
          array.filter((alternative) => (
            alternative !== correctAnswer
          ));

          return (
            <button
              name={ answer }
              key={ index }
              id="item"
              onClick={ ({ target }) => 
                target.name === correctAnswer ? calculateScore() : calculateError()
              }
              type="button"
              className={ answer === correctAnswer ? 'correct' : 'incorrect' }
            >
              { decode(answer) }
            </button>
          );
        }) }
      </div>
    );
  }

  return (
    <Container>
      { displayAnswer() }
    </Container>
  );
}

export default Alternatives;