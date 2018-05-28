/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';




// // Styles
// // Import Flag Icons Set
// import 'flag-icon-css/css/flag-icon.min.css';
// // Import Font Awesome Icons Set
// import 'font-awesome/css/font-awesome.min.css';
// // Import Simple Line Icons Set
// import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.scss'
// Temp fix for reactstrap
import './scss/core/_dropdown-menu-right.scss'


const AppClient = () => (
  <Router>
    <App />
  </Router>
);

window.onload = () => {
  render(<AppClient />, document.getElementById('main'));
};
