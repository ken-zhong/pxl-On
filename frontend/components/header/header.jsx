import React from 'react';
import SplashHeader from './splash_header';
import StandardHeader from './standard_header';
import { withRouter, Route, Switch } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={SplashHeader} />
        <Route path='/' component={StandardHeader} />
      </Switch>
    );
  }
}

export default withRouter(Header);
