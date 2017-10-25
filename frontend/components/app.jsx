import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash';
import Header from './header/header';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';

const App = () => (
  <div id='app'>
    <Header />
    <Switch>
      <AuthRoute exact path='/' component={Splash} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute exact path='/home' component={HomeContainer} />
    </Switch>
  </div>
);

export default App;
