import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default: return state;
  }
};

export default UsersReducer;
