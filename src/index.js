import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware  from 'redux-promise-middleware'
import combinedReducer from './pages/checkout/step-1/reducers'

const store = createStore(
    combinedReducer, 
    applyMiddleware(promiseMiddleware())
)

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
