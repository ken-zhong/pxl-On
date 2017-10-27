import { connect } from 'react-redux';
import StandardHeader from './standard_header';
import { logout } from '../../actions/session_actions';
import { toggleUploadModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

// import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    toggleUploadModal: () => dispatch(toggleUploadModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StandardHeader));
