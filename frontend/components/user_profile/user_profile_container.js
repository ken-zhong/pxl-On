import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from './user_profile';
import { fetchUserPhotos, setProfilePhoto, setCoverPhoto } from '../../actions/photo_actions';
import { fetchUser, getAllFollows } from '../../actions/user_actions';
// import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let photos = Object.values(state.entities.photos);
  let user = state.entities.users[ownProps.match.params.username] || {};

  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.errors,
    user: user,
    photos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPhotos: (data) => dispatch(fetchUserPhotos(data)),
    fetchUser: (data) => dispatch(fetchUser(data)),
    getAllFollows: (data) => dispatch(getAllFollows(data)),
    setProfilePhoto: (data) => dispatch(setProfilePhoto(data)),
    setCoverPhoto: (data) => dispatch(setCoverPhoto(data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
