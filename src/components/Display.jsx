import React from 'react';
import PropTypes from 'prop-types';
import CatImage from './CatImage';
import Quote from './Quote';


function Display(props) {
  return (
    <div>
      <CatImage />
      <Quote />
    </div>
  )

}

Display.propTypes = {
  catimage: PropTypes.string,
  quote: PropTypes.string
};

export default Display;
