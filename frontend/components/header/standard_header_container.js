import { connect } from 'react-redux';
import StandardHeader from './standard_header';
import { logout } from '../../actions/session_actions';
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
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StandardHeader);
