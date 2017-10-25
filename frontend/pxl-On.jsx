import ReactDom from 'react-dom';
import React from 'react';
import Root from './components/root.jsx';
import configureStore from './store/store';

// *** TESTING ***
import { signup, login, logout } from './util/session_api_util';
// *** DELETE ***

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const state = {session: {currentUser: window.currentUser}};
    store = configureStore(state);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // *** TESTING ***
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.logout = logout;
  // *** DELETE ***

  const root = document.querySelector('#root');
  ReactDom.render(<Root store={store} />, root);
});
