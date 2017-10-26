import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => ({type: CLEAR_ERRORS});

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(
    (resUser) => dispatch(receiveCurrentUser(resUser)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(
    (resUser) => dispatch(receiveCurrentUser(resUser)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveErrors(errors)));
};
