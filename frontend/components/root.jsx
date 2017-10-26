import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import App from './app.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <HttpsRedirect>
      <HashRouter>
        <App store={store} />
      </HashRouter>
    </HttpsRedirect>
  </Provider>
);

export default Root;
