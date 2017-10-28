import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import AppErrorsReducer from './app_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  app_errors: AppErrorsReducer
});

export default ErrorsReducer;
