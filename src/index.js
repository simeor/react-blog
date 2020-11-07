import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';


import App from './components/App';
import reducers from './reducers';

// second param to set up thunk
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
  );

