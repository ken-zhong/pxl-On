import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    default: return state;
  }
};

export default SessionErrorsReducer;
