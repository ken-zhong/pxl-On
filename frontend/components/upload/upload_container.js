import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadForm from './upload';
import { createPhoto } from '../../actions/photo_actions';
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
    createPhoto: (data) => dispatch(createPhoto(data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadForm));
