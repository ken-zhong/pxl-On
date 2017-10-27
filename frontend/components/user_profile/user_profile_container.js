import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from './user_profile';
import { fetchUserPhotos } from '../../actions/photo_actions';
// import { fetchUser } from '../../actions/user_actions';
// import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  let photos = Object.values(state.entities.photos);
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.errors,
    photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPhotos: (data) => dispatch(fetchUserPhotos(data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
