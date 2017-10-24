import React from 'react';
import SplashHeader from './splash_header';
import { withRouter, Route, Switch } from 'react-router-dom';

class Header extends React.Component {

  render () {
    return <SplashHeader />;
  }
}

export default withRouter(Header);
