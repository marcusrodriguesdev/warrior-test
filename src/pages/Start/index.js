import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

function Start() {
  let navigate = useNavigate();


  return (
    <div>
      <h3>Start the game?</h3>
      <button
        type="button"
        onClick={ () => navigate('/') }
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={ () => navigate('/quiz') }
      >
        Start
      </button>
    </div>
  )
}

export default Start;