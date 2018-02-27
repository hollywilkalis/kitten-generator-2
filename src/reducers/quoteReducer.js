import constants from './../constants';
const { initialState, types } = constants;

const quoteReducer = (state = initialState.currentPosterId, action) => {

  switch (action.type) {
    case types.REQUEST_QUOTE:
      return action.currentPosterId;
    default:
      return state;
  }
};

export default quoteReducer;
