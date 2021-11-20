import React from 'react';

// import { Container } from './styles';

function Input({ id, name, value, onChange, type }) {
  return (
    <label htmlFor={ id }>
      <input
        id={ id }
        name={ name }
        value={ value }
        onChange={ onChange }
        type={ type }
      />
    </label>
  );
}

export default Input;