import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartPage from './pages/startpage';
import Produkter from './pages/produkter';

import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' component={StartPage} />
      <Route path='/produkter' component={Produkter} />
    </Router>
  );
}

export default App;
