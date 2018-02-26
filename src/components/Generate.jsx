import React from 'react';
import PropTypes from 'prop-types';



function Generate(props) {
  return (
    <div>
      <button onClick={props.onGenerate} >
        Click Me!</button>
    </div>
  );

}

Generate.propTypes = {
  onGenerate: PropTypes.func
};


export default Generate;
