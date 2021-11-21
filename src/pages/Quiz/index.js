import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Alternatives from '../../components/Alternatives';
import Question from '../../components/Question';
import Context from '../../context/Context';

// import { Container } from './styles';

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { quantity, score, error } = useContext(Context);
  const navigate = useNavigate()
  const btnNext = document.querySelector('#btn-next');

  function removeColor() {
    const correct = document.querySelector('.correct');
    correct.className = 'correct default';
    correct.disabled = false;

    const incorrect = document.querySelectorAll('.incorrect');
    incorrect.forEach((item) => {
      item.className = 'incorrect default';
      item.disabled = false;
      return item;
    });

    btnNext.className = 'notDisplay';
  }

  function showNextQuestion() {
    const LIMIT = quantity - 1;
    console.log(quantity);
    removeColor();
    if (questionNumber === LIMIT) {
      navigate('/feedback');
      localStorage.setItem('player', JSON.stringify({
        score,
        error,
      }));
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  }

  return (
    <div>
      <Question questionNumber={ questionNumber } />
      <Alternatives 
        questionNumber={ questionNumber }
      />
      <div>
        <button
          type="button"
          id="btn-next"
          onClick={ () => showNextQuestion() }
          className="notDisplay"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;