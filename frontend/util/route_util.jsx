import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn}) => {
  return (<Route path={path} render={(props) => {
    if (loggedIn) {
      return <Redirect to='/' />;
    } else {
      return <Component {...props} />;
    }
  }} />);
};

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.currentUser) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
