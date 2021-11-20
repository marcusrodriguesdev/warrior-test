import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Input from '../../components/Input/index';
import Context from '../../context/Context';

function Home() {
    const { quantity,  setQuantity } = useContext(Context)

  return (
    <div>
      <h3>Escolha o numero de perguntas:</h3>
      <Input
        type="number"
        value={ quantity }
        name="quantity"
        id="quantity"
        onChange={ ({ target }) => setQuantity(target.value) }
      />
      <div>
        <Link to="/start">Pronto</Link>
      </div>
    </div>
  );
}

export default Home;