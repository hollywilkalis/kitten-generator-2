import React from 'react';
import PropTypes from 'prop-types';
import Generate from './Generate';
import Display from './Display';


function Body(props) {
  return (
    <div>
      <Generate />
      <Display />
    </div>
  )

}

Body.propTypes = {
  generate: PropTypes.func
};

export default Body;
