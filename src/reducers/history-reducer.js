import defaultState from './../defaultState';

export default (state = defaultState, action) => {
  switch (action.type) {
  case 'UPDATE_HISTORY':
    let newState = Object.assign({}, state, {

    });
    return newState;
  default:
    return state;
  }


};
