import { connect } from 'react-redux';
import { fetchUserPhotos, updatePhoto, deletePhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import PhotoManage from './photo_manage';

const mapStateToProps = (state) => {
  let photos = Object.values(state.entities.photos);
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser || {},
    errors: state.errors,
    photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPhotos: (data) => dispatch(fetchUserPhotos(data)),
    fetchUser: (data) => dispatch(fetchUser(data)),
    updatePhoto: (data) => dispatch(updatePhoto(data)),
    deletePhoto: (data) => dispatch(deletePhoto(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoManage)
