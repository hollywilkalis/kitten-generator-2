import { combineReducers } from 'redux';
import changePosterReducer from './changePosterReducer';
import createPosterReducer from './createPosterReducer';

const rootReducer = combineReducers({
  currentPosterId: changePosterReducer,
  posterById: createPosterReducer
});

export default rootReducer;
