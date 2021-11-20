import React, { useEffect, useState } from 'react';
import Context from './Context';
import questionsApi from '../services/questionsApi';

function Provider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function requestApi() {
      const fetchApi = await questionsApi(quantity);
      setData(fetchApi)
    }
    requestApi();
  }, [quantity])

  const context = {
    quantity,
    setQuantity,
    data,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
