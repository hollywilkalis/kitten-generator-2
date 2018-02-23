import defaultState from './../../src/defaultState';
import historyReducer from './../../src/reducers/history-reducer';

describe('historyReducer', () => {
  let action;

  test('should return default state if no action type is recognized', () => {
    expect(historyReducer({}, { type: null })).toEqual({});
  });

  test('should return a new state of history by adding a new array object to history after onClick', () => {

    action = {
      type: 'UPDATE_HISTORY'
    };
    expect(historyReducer(defaultState, action)).toEqual({
      history: defaultState.history.concat(Array(9).fill(null))
    });
  });
});
