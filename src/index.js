import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

import App from './components/App';
import reducers from './reducers';

// development purpose only.
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root'));

