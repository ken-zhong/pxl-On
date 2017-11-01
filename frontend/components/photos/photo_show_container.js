import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let photoId = ownProps.match.params.photoId;
  let photo = state.entities.photos[photoId] || {};
  let user = {};
  if (photo.author) { user = state.entities.users[photo.author] || {}; }
  return {
    user,
    photo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
