import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let photoId = this.ownProps.match.params.photoId
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
