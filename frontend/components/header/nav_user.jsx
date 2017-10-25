import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';

class UserNavComponent extends React.Component {

  render () {
    return (
      <div className='flex-center nav-component'>
        Hello from UserNavComponent
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNavComponent);
