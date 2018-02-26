import React from 'react';
import PropTypes from 'prop-types';

function Poster(props) {
  console.log(props.image);
  return (
    <div>
      <style jsx global>{`
        .img-styles {
          width: 100vw;
          
        }
      `}</style>
    <div>
      <div><img className='img-styles' src={props.image}/></div>
      <div>{props.quote}</div>
    </div>

    </div>
  )

}

Poster.propTypes = {
  image: PropTypes.string,
  quote: PropTypes.string
}
export default Poster;
