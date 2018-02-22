import defaultState from './../../src/defaultState';
import historyReducer from './../../src/reducers/history-reducer';

describe('historyReducer', () => {
  let action;
  const sampleData = defaultState;

  test('should return default state if no action type is recognized', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });
});
