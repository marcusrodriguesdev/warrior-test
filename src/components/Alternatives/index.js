import React, { useContext } from 'react';
import Context from '../../context/Context';
import decode from '../../GlobalFunc/decode';

// import { Container } from './styles';

function Alternatives({ questionNumber }) {
  const { data: { results } } = useContext(Context);
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