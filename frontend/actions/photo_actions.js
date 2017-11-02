import * as PhotoApiUtil from '../util/photo_api_util';
import { receiveUser } from './user_actions'

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS';

const receivePhoto = photo => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const clearPhotos = () => {
  return {
    type: CLEAR_PHOTOS
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

export const fetchAllPhotos = () => dispatch => {
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

export const fetchPhotos = () => dispatch => {
  return PhotoApiUtil.fetchPhotos().then(
    photos => dispatch(receiveAllPhotos(photos)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};

export const fetchPhotoFeed = () => dispatch => {
  return PhotoApiUtil.fetchPhotoFeed().then(
    photos => dispatch(receiveAllPhotos(photos)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};

export const fetchUserPhotos = username => dispatch => {
  return PhotoApiUtil.fetchUserPhotos(username).then(
    photos => dispatch(receiveAllPhotos(photos)),
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

export const setProfilePhoto = data => dispatch => {
  return PhotoApiUtil.setProfilePhoto(data).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};

export const setCoverPhoto = data => dispatch => {
  return PhotoApiUtil.setCoverPhoto(data).then(
    photo => dispatch(receivePhoto(photo)),
    errors => dispatch(receivePhotoErrors(errors))
  );
};
