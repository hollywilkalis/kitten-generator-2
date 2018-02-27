import constants from "./../../src/constants";
import rootReducer from './../../src/reducers/';
import * as actions from './../../src/actions';

describe('Inspirational Kittehs', () => {
  const { initialState, types } = constants;

  describe('createPosterReducer', () => {
    it('should accept and return initial state', () => {
      expect(createPosterReducer(initialState, { type: null })).toEqual(initialState);
    });

  });

});
