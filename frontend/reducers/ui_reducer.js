import merge from 'lodash/merge';
import {TOGGLE_UPLOAD_MODAL} from '../actions/ui_actions';

const defaultState = {
  showLoading: false,
  showUploadModal: false
};

const UiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case TOGGLE_UPLOAD_MODAL:
      newState = {showUploadModal: !state.showUploadModal};
      return merge({}, state, newState);
    default: return state;
  }
};

export default UiReducer;
