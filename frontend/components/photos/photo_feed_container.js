import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { fetchPhotoFeed } from '../../actions/photo_actions';
import { getAllFollows, fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const users = Object.values(state.entities.users);
  const photos = Object.values(state.entities.photos);
  return {
    currentUser: state.session.currentUser,
    users,
    photos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhotoFeed: () => dispatch(fetchPhotoFeed()),
    getAllFollows: (id) => dispatch(getAllFollows(id)),
    fetchUser: (username) => dispatch(fetchUser(username))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoFeed));
