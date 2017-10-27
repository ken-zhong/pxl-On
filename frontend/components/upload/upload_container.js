import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UploadForm from './upload';
import { createPhoto } from '../../actions/photo_actions';
import { toggleUploadModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    errors: state.errors,
    showUploadModal: state.ui.showUploadModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPhoto: (data) => dispatch(createPhoto(data)),
    toggleUploadModal: () => dispatch(toggleUploadModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadForm));
