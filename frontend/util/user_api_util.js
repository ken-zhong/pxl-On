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

export const followUser = (followerId, followeeId) => {
  return $.ajax({
    url: `api/user/${followeeId}/follow`,
    data: followerId
  });
};
export const unfollowUser = (followerId, followeeId) => {
  return $.ajax({
    url: `api/user/${followeeId}/unfollow`,
    data: followerId
  });
};
