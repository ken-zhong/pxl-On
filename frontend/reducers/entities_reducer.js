import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import PhotosReducer from './photos_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  photos: PhotosReducer
});

export default EntitiesReducer;
