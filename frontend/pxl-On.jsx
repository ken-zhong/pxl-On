import ReactDom from 'react-dom';
import React from 'react';
import Root from './components/root.jsx';
import configureStore from './store/store';

// *** TESTING ***
import { signup, login } from './util/session_api_util';
// *** DELETE ***

document.addEventListener('DOMContentLoaded', () => {
  // *** TESTING ***
  window.signup = signup;
  window.login = login;
  // *** DELETE ***

  const store = configureStore();
  const root = document.querySelector('#root');
  ReactDom.render(<Root store={store} />, root);
});
