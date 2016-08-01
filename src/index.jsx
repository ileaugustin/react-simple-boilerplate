// // Application entrypoint.
//
// // Load up the application styles
require("../styles/application.scss");
//
// // Render the top-level React component

import ReactDOM from 'react-dom';
import React from 'react'

import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));