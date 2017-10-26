/* global $ */

export const fetchPhotos = () => {
  return $.ajax({
    url: 'api/photos/'
  });
};

export const fetchPhoto = (id) => {
  return $.ajax({
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
