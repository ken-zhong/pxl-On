// import merge from 'lodash/merge';
import { RECEIVE_PHOTO_ERRORS, CLEAR_ERRORS } from '../actions/photo_actions';
import { RECEIVE_USER_ERRORS } from '../actions/user_actions';

const AppErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_USER_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ERRORS:
      return [];
    default: return state;
  }
};

export default AppErrorsReducer;
