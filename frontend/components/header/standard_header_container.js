import { connect } from 'react-redux';
import StandardHeader from './standard_header';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { toggleUploadModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

// import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  let user;
  if (state.session.currentUser) {
    user = state.entities.users[state.session.currentUser.username] || {};
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.errors,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    toggleUploadModal: () => dispatch(toggleUploadModal()),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StandardHeader));
