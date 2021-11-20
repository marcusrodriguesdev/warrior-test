import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Alternatives from '../../components/Alternatives';
import Question from '../../components/Question';
import Context from '../../context/Context';

// import { Container } from './styles';

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { quantity } = useContext(Context);
  const navigate = useNavigate()

  if (questionNumber >= quantity) {
    return navigate('/');
  }

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

    const btnNext = document.querySelector('#btn-next');
    btnNext.className = 'notDisplay';
  }

  return (
    <div>
      Questions
      <Question questionNumber={ questionNumber } />
      <Alternatives questionNumber={ questionNumber } />
      <div>
        <button
          type="button"
          id="btn-next"
          onClick={ () => { setQuestionNumber(questionNumber + 1) 
            removeColor();
          } }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;