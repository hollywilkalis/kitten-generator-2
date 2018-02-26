import constants from './../constants';
const { initialState, types } = constants;

const imageReducer = (state = initialState.currentPosterId, action) => {

  switch (action.type) {
    case types.REQUEST_IMAGE:
      return action.currentPosterId;
    default:
      return state;
  }
};

export default imageReducer;
