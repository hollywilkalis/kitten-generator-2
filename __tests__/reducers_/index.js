import constants from "./../../src/constants";
import imageReducer from './../../src/reducers/imageReducer';
import quoteReducer from './../../src/reducers/quoteReducer';
import rootReducer from './../../src/reducers/';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('Inspirational Kittehs', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('imageReducer', () => {
    it('should accept and return initial state', () => {
      expect(imageReducer(initialState.posterById, { type: null })).toEqual(initialState.posterById);
    });
  });

  describe('quoteReducer', () => {
    it('should accept and return initial state', () => {
      expect(imageReducer(initialState.posterById, { type: null })).toEqual(initialState.posterById);
    });
  });
});
