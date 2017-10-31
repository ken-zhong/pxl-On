/* global $ */

export const fetchUsers = () => {
  return $.ajax({
    url: 'api/user/'
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    url: `api/user/${id}`
  });
};

export const followUser = followRequest => {
  return $.ajax({
    url: `api/user/${followRequest.followeeId}/follow`,
    data: {followerId: followRequest.followerId},
    method: 'PATCH'
  });
};
export const unfollowUser = unfollowRequest => {
  return $.ajax({
    url: `api/user/${unfollowRequest.followeeId}/unfollow`,
    data: {followerId: unfollowRequest.followerId},
    method: 'DELETE'
  });
};
