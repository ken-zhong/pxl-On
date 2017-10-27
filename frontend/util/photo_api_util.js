/* global $ */

export const fetchPhotos = () => {
  return $.ajax({
    url: 'api/photos/'
  });
};

export const fetchUserPhotos = (username) => {
  return $.ajax({
    url: `api/photos/users/${username}`
  });
};

export const fetchPhoto = (id) => {
  return $.ajax({
    url: `api/photos/${id}`
  });
};

export const deletePhoto = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updatePhoto = (id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${id}`
  });
};
