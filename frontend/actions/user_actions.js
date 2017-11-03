import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveFollow = users => {
  return {
    type: RECEIVE_FOLLOW,
    users
  };
};

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const fetchUser = id => dispatch => {
  return UserApiUtil.fetchUser(id).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  );
};

export const fetchUsers = () => dispatch => {
  return UserApiUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users)),
    errors => dispatch(receiveUserErrors(errors))
  );
};

export const followUser = (followRequest) => dispatch => {
  return UserApiUtil.followUser(followRequest).then(
    users => dispatch(receiveFollow(users)),
    errors => dispatch(receiveUserErrors(errors))
  );
};

export const unfollowUser = (unfollowRequest) => dispatch => {
  return UserApiUtil.unfollowUser(unfollowRequest).then(
    users => dispatch(receiveFollow(users)),
    errors => dispatch(receiveUserErrors(errors))
  );
};

export const getAllFollows = id => dispatch => {
  return UserApiUtil.getAllFollows(id).then(
    users => dispatch(receiveUsers(users)),
    errors => dispatch(receiveUserErrors(errors))
  );
};
