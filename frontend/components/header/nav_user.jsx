import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class UserNavComponent extends React.Component {

  render () {
    return (
      <div className='flex-center nav-component'>
        Hello from UserNavComponent
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default UserNavComponent;
