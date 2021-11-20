import React, { useContext } from 'react';
import Context from '../../context/Context';
import decode from '../../GlobalFunc/decode';
import './style.css';

// import { Container } from './styles';

function Alternatives({ questionNumber }) {
  const { data: { results } } = useContext(Context);

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

  function displayAnswer() {
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswer,
    } = results[questionNumber];
    const answers = [correctAnswer, ...incorrectAnswer];
    answers.sort();
    
    return (
      <div>
        {answers.map((answer, index, array) => {
          array.filter((alternative) => (
            alternative !== correctAnswer
          ));

          return (
            <button
              key={ index }
              onClick={ () => applyColor() }
              type="button"
              className={ answer === correctAnswer ? 'correct' : 'incorrect' }
              name={ answer }
            >
              { decode(answer) }
            </button>
          );
        }) }
      </div>
    );
  }

  return (
    <div>
      { displayAnswer() }
    </div>
  );
}

export default Alternatives;