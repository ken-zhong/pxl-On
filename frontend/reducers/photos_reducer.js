import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS, REMOVE_PHOTO,
  RECEIVE_PHOTO_ERRORS } from '../actions/photo_actions';
import merge from 'lodash/merge';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      let newPhoto = {[action.photo.id]: action.photo};
      return merge({}, state, newPhoto);
    case RECEIVE_ALL_PHOTOS:
      return merge({}, state, action.photos);
    case REMOVE_PHOTO:
      return [];
    case RECEIVE_PHOTO_ERRORS:
      return [];
    default: return state;
  }
};

export default PhotosReducer;
