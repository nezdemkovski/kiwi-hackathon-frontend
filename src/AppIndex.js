import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';

const AppIndex = () =>
  <Router>
    <div>
      <App />
    </div>
  </Router>;
export default AppIndex;
