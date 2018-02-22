import defaultState from './../../src/defaultState';
import stepNumberReducer from './../../src/reducers/stepnumber-reducer';

describe('stepNumberReducer', () => {
  let action;
  const sampleData = defaultState;

  test('should return default state if no action type is recognized', () => {
    expect(stepNumberReducer({}, { type: null })).toEqual({});
  });
});
