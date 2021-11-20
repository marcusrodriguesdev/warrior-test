import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Start from './pages/Start';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/start" element={ <Start /> }/>
          <Route path="/quiz" element={ <Quiz /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
