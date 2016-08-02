// // Application entrypoint.
//
// // Load up the application styles
require("../styles/application.scss");
//
// // Render the top-level React component

import ReactDOM from 'react-dom';
import React from 'react'
//import actions from './actions.jsx'
import reactor from './reactor.jsx'
import ItemStore from './ItemStore.jsx'

import App from './App.jsx';

reactor.registerStores({
    'items' : ItemStore
});

ReactDOM.render(<App />, document.getElementById('root'));