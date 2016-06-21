import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import ReduxPromise from 'redux-promise'

import reducers from './reducers/index'
import App from './components/App';

const reducer = combineReducers({reducers});
const store = createStore(reducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  
  , document.getElementById('root'));
