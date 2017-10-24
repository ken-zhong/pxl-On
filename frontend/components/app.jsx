import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';
import SplashHeader from './header/splash_header';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div id='app'>
    <SplashHeader />
    <Switch>
      <Route exact path='/' component={Splash} />
      <Route path='/login' component={SessionFormContainer} />
      <Route path='/signup' component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
