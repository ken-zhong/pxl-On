import { connect } from 'react-redux';
import StandardHeader from './standard_header';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { toggleUploadModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

// import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  let user = state.session.currentUser;
  if (state.session.currentUser) {
    user = state.entities.users[state.session.currentUser.username] || state.session.currentUser;
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: user,
    errors: state.errors,
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
