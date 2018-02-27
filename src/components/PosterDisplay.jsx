import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveImage } from './../actions';

const PosterDisplay = ({ poster }) => {
  const { imageURL, posterId, quote } = poster;
  return (
    <div className="poster">
      <style jsx global>{`
        .poster {
          padding: 25px;
          display: flex;
          background-color: darkgrey;
          justify-content: center;
          border: 3px solid black;
          font-size: 2.5em;
          margin: 20px;
        }

      `}</style>
    <img src={imageURL} />
    <p>{quote}</p>
    </div>
  );
};

PosterDisplay.propTypes = {
  imageURL: PropTypes.string,
  quote: PropTypes.string
};

const mapStateToProps = state => {
  let info;
  const poster = state.posterById[state.currentPosterId];
  if (!state.posterById[state.currentPosterId].isFetching) {
    info = {
      posterId: state.posterId,
      imageURL: poster.imageURL,
      quote: poster.quote
    };
  } else {
    info = {
      imageURL: '',
      quote: ''
    };
  }

  return {
    poster: info
  };
};

export default connect(mapStateToProps)(PosterDisplay);
