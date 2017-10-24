import ReactDom from 'react-dom';
import React from 'react';
import Root from './components/root.jsx'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.querySelector('#root');
  ReactDom.render(<Root />, root);
})
