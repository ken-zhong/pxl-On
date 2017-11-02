import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchUsers } from '../../actions/user_actions';
import DiscoverPage from './discover_page';

const mapStateToProps = (state, ownProps) => {
  const photos = Object.values(state.entities.photos).reverse();
  const users = Object.values(state.entities.users).filter(user => user.photos.length > 0);
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    photos,
    users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPhotos: () => dispatch(fetchPhotos())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiscoverPage));
