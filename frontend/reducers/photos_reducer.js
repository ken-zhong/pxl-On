import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS, REMOVE_PHOTO,
  RECEIVE_PHOTO_ERRORS } from '../actions/photo_actions';

const PhotosReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return [action.photo];
    case RECEIVE_ALL_PHOTOS:
      return [];
    case REMOVE_PHOTO:
      return [];
    case RECEIVE_PHOTO_ERRORS:
      return [];
    default: return state;
  }
};

export default PhotosReducer;
