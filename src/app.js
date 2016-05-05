import React          from 'react';
import ReactDOM       from 'react-dom';
import Root           from './components/Root';
import configureStore from './store/configureStore';
import './css/reset.css';
import './css/animations.css';

const store  = configureStore(window.__INITIAL_STATE__);
const target = document.getElementById('root');

function render(Root) {
  ReactDOM.render(<Root store={store} />, target);
}

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    console.log("Reloading...");
    const NextRoot = require('./components/Root');
    render(NextRoot);
  });
}

render(Root);
