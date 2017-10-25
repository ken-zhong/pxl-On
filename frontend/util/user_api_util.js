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
