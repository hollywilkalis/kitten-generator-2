import constants from './../constants';
const { initialState, types } = constants;

const createPosterReducer = (state = initialState.posterById, action) => {
  let newPosterByIdEntry;
  let newPosterByIdStateSlice;

  switch (action.type) {
  case types.REQUEST_IMAGE:
    newPosterByIdEntry = {
      isFetching: true,
      imageURL: action.imageURL,
      posterId: action.posterId
    };
    newPosterByIdStateSlice = Object.assign({}, state, {
      [action.posterId]: newPosterByIdEntry
    });
    return newPosterByIdStateSlice;

  case types.RECEIVE_IMAGE:
    newPosterByIdEntry = {
      isFetching: false,
      imageURL: action.imageURL,
      posterId: action.posterId,
      quote: 'Eat my shorts. -Bart Simpson'
    }
    newPosterByIdStateSlice = Object.assign({}, state, {
      [action.posterId]: newPosterByIdEntry
    });
    return newPosterByIdStateSlice;

  default:
    return state;
  }
};

export default createPosterReducer;
