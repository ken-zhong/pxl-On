/* global $ */

export const fetchPhotos = () => {
  return $.ajax({
    url: 'api/photos/'
  });
};

export const fetchUserPhotos = (username) => {
  return $.ajax({
    url: `api/user/${username}/photos`
  });
};

export const fetchPhotoFeed = () => {
  return $.ajax({
    url: `api/photos?type=feed`
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

export const updatePhoto = (photo) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: { photo }
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

export const setProfilePhoto = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/photos?type=profile',
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData
  });
};


export const setCoverPhoto = (id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${id}?type=coverphoto`
  });
};
