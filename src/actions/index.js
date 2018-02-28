import * as types from "./../constants/ActionTypes";
import v4 from 'uuid/v4';

export const changeImage = (newSelectedPosterId) => ({
  type: types.CHANGE_IMAGE,
  newSelectedPosterId
});

export const requestImage = (imageURL, localPosterId) => ({
  type: types.REQUEST_IMAGE,
  imageURL,
  posterId: localPosterId
});

export const receiveImage = (imageURL, quote, posterId) => ({
  type: types.RECEIVE_IMAGE,
  posterId,
  imageURL,
  quote
});

export function fetchImage(input) {
  return function (dispatch) {
    return fetch('https://api.unsplash.com/search/photos/?client_id=a4b16735e330b928f8cdf2bfd407e6326b49fbc4c9332252fd0d432666b82073&query=' + input + '&page=1&per_page=2').then(
      response => response.json(),
      error => console.log('oopsie', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        const posterId = v4();
        console.log(posterId)
        const imageURL = json.results[0].urls.regular;
        dispatch(receiveImage(imageURL, posterId));
      } else {
        console.log('nope');
      }
    });
  };
}
