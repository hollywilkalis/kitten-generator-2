import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
  currentPosterId: imageReducer,
  posterById: imageReducer
});

export default rootReducer;
