import React from 'react';
import PropTypes from 'prop-types';
import Poster from './Poster';


function Display(props) {
  return (
    <div className="poster">
      <style jsx global>{`
        .poster {
          width: 600px;
          height: 400px;
        }

      `}</style>
    {Object.keys(props.posterList).map(function(posterId) {
      var poster = props.posterList[posterId];
        return <Poster
          image={poster.image}
          quote={poster.quote}
          key={poster.posterId} />;
    })}
    </div>
  );

}

Display.propTypes = {
  posterList: PropTypes.object
};

export default Display;
