import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;
