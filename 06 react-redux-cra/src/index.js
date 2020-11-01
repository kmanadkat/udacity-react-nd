import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './components/App'
import reducer from './reducers/index'
import middleware from './middleware/index'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
