import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
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

  return (
    <div>
      Questions
      <Question questionNumber={ questionNumber } />
      <div>
        <button
          type="button"
          onClick={ () => setQuestionNumber(questionNumber + 1) }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;