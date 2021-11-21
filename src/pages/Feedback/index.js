import React from 'react';

// import { Container } from './styles';

function Feedback() {
  const ranking = JSON.parse(localStorage.getItem('ranking'));
  const { error, score } = ranking.player;
  console.log(error);
  console.log(score);
  return (
    <div>
      FeedBack
      <div>
        <h3>
          your number of hits: 
          { ` ${score}` }
        </h3>
      </div>
      <div>
        <h3>
          your number of errors:
          { ` ${error}` }
        </h3>
      </div>
    </div>
  );
}

export default Feedback;