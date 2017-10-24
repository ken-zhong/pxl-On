import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';
import SplashHeader from './header/splash-header'

const App = () => (
  <div id='app'>
    <SplashHeader />
    <Switch>
      <Route exact path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;
