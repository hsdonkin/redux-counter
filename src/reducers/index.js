import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import isLoggedIn from './isLoggedIn';

const rootReducer = combineReducers({
  counter: counterReducer,
  loggedIn: isLoggedIn
});

export default rootReducer;
