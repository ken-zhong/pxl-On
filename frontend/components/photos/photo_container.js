import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  let photoId = this.ownProps.match.params.photoId;
  return {
    photo: state.entities.photos[photoId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPhoto: (id) => dispatch(fetchPhoto(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
