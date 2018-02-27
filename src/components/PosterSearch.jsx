import React from 'react';
import { connect } from 'react-redux';
import { fetchImage } from './../actions';
import PropTypes from 'prop-types';

const PosterSearch = ({dispatch}) => {
  let input;
  return (
    <form onSubmit = {e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(fetchImage(input.value.trim()));
    }}>
      <input
        placeholder='Image Search'
        ref={node => { input = node;}}>
      </input>
      <button>Search Images!</button>
    </form>
  );
};

PosterSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(PosterSearch);
