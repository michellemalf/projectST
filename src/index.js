import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components';
import { BrowserRouter as Router } from 'react-router-dom';




ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
)