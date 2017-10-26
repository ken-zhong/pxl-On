import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

const receivePhoto = photo => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

const receiveAllPhotos = photos => {
  return {
    type: RECEIVE_ALL_PHOTOS,
    photos
  };
};

const removePhoto = photo => {
  return {
    type: REMOVE_PHOTO,
    photoId: photo.id
  };
};

const receivePhotoErrors = errors => {
  return {
    type: RECEIVE_PHOTO_ERRORS,
    errors
  };
};

export const fetchPhotos = () => dispatch => {
  return PhotoApiUtil.fetchPhotos().then(
    photos => dispatch(receiveAllPhotos(photos)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};

export const fetchPhoto = id => dispatch => {
  return PhotoApiUtil.fetchPhoto(id).then(
    photo => dispatch(receivePhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};

export const updatePhoto = updatedData => dispatch => {
  return PhotoApiUtil.updatePhoto(updatedData).then(
    photo => dispatch(receivePhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};

export const deletePhoto = id => dispatch => {
  return PhotoApiUtil.deletePhoto(id).then(
    photo => dispatch(removePhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};

export const createPhoto = data => dispatch => {
  return PhotoApiUtil.createPhoto(data).then(
    photo => dispatch(receivePhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};
