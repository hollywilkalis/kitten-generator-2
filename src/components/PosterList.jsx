import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeImage } from './../actions';

const PosterList = ({ dispatch, posterList }) => {
  return (
    <div>
      {Object.keys(posterList).map(posterId => {
        console.log('poster:' + posterId);
        let poster = posterList[posterId];
        return <li key = {posterId} onClick ={() => {
            dispatch(changeImage(posterId));
          }}>{posterId}</li>;
      })}
    </div>
  );
};

PosterList.propTypes = {
  posterList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    posterList: state.posterById
  };
};


export default connect(mapStateToProps)(PosterList);
