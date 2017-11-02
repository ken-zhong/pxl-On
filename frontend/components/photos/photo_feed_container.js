import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { fetchPhotoFeed } from '../../actions/photo_actions';
import { getAllFollows, fetchUser, fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const users = Object.values(state.entities.users);
  const photos = Object.values(state.entities.photos).reverse();
  const currentUser = state.entities.users[state.session.currentUser.username] || state.session.currentUser;
  const suggestedFollows = users.filter(user =>
    (!user.isFollowing && user.id !== currentUser.id
    )).slice(0, 3);

  return {
    currentUser,
    users,
    photos,
    suggestedFollows
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhotoFeed: () => dispatch(fetchPhotoFeed()),
    getAllFollows: (id) => dispatch(getAllFollows(id)),
    fetchUser: (username) => dispatch(fetchUser(username)),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoFeed));
