import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Start from './pages/Start';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/start" element={ <Start /> }/>
          <Route path="/questions" element={ <Questions /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
