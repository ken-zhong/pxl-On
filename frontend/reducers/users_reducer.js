import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const user = {[action.user.username]: action.user};
      return merge({}, state, user);
    case RECEIVE_CURRENT_USER:
      if (action.user) {
        return state;
      } else {
        return {};
      }
    default: return state;
  }
};

export default UsersReducer;
