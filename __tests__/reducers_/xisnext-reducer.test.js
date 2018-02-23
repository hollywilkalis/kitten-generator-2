import defaultState from './../../src/defaultState';
import xIsNextReducer from './../../src/reducers/xisnext-reducer';

describe('xIsNextReducer', () => {
  let action;
  const sampleData = defaultState;

  test('should return default state if no action type is recognized', () => {
    expect(xIsNextReducer({}, { type: null })).toEqual({});
  });
});
