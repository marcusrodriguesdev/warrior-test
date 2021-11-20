import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom'
import Input from '../../components/Input/index';
import Context from '../../context/Context';

function Home() {
  const { quantity,  setQuantity } = useContext(Context);
  const [disableButton, setDisabledButton] = useState(true);
  let navigate = useNavigate();

  function enableButton() {
    if (quantity > 0) {
      return setDisabledButton(false);
    } else {
      return setDisabledButton(true);
    }
  }
  return (
    <div>
      <h3>Choose the number of questions:</h3>
      <Input
        type="number"
        value={ quantity }
        name="quantity"
        id="quantity"
        onChange={ ({ target }) => { 
          setQuantity(target.value);
          enableButton();
        } }
      />
      <div>
        <button
          type="button"
          disabled={ disableButton }
          onClick={ () => navigate('/start')}
        >
          Ready
        </button>
      </div>
    </div>
  );
}

export default Home;