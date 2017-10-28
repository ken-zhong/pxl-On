// import merge from 'lodash/merge';
import { RECEIVE_PHOTO_ERRORS } from '../actions/photo_actions';
import { RECEIVE_USER_ERRORS } from '../actions/user_actions';

const AppErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default: return state;
  }
};

export default AppErrorsReducer;
