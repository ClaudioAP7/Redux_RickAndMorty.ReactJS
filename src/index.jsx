import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  favoriteCharacters: [],
  sectionActive: 'Characters'
};

const componseEnhanders = window.__REDUX_DEVTOOLS__EXTENSION_COMPOSE || compose;

const store = createStore(reducer, initialState, componseEnhanders(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);