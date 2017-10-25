import React from 'react';
import SplashHeader from './splash_header';
import StandardHeaderContainer from './standard_header_container';
import { withRouter, Route, Switch } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={SplashHeader} />
        <Route path='/' component={StandardHeaderContainer} />
      </Switch>
    );
  }
}

export default withRouter(Header);
