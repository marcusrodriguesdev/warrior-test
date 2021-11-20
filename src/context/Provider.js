import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [quantity, setQuantity] = useState(0);

  const context = {
    quantity,
    setQuantity,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
