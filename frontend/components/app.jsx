import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Splash from './splash';
import Header from './header/header';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div id='app'>
    <Header />
    <Switch>
      <Route exact path='/' component={Splash} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
