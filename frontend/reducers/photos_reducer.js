import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS, REMOVE_PHOTO,
  RECEIVE_PHOTO_ERRORS, CLEAR_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      let newPhoto = {[action.photo.id]: action.photo};
      return merge({}, state, newPhoto);
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case CLEAR_PHOTOS:
      return {};
    case RECEIVE_CURRENT_USER:
      if (action.user) {
        return state;
      } else {
        return {};
      }
    default: return state;
  }
};

export default PhotosReducer;
