import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return merge({}, state, newState);
    default: return state;
  }
};

export default SessionReducer;
