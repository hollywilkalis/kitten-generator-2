import React from 'react';
import PropTypes from 'prop-types';
import CatImage from './CatImage';
import Quote from './Quote';


function Display(props) {
  return (
    <div className="poster">
      <style jsx global>{`
        .poster {
          background-color: black;
          width: 600px;
          height: 400px;
        }

      `}</style>
      <CatImage />
      <Quote />
    </div>
  );

}

Display.propTypes = {
  catimage: PropTypes.string,
  quote: PropTypes.string
};

export default Display;
