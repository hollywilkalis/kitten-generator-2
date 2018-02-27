import constants from './../constants';
const { initialState, types } = constants;

const posterChangeReducer = (state = initialState.currentPosterId, action) => {
  switch (action.type) {
    case types.CHANGE_IMAGE:
      return action.newSelectedPosterId;
    default:
      return state;
  }
};

export default posterChangeReducer; 
