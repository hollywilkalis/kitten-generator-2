import React from 'react';
import PropTypes from 'prop-types';



function Generate(props) {
  return (
    <div className='main-div'>
      <style jsx global>{`
        .main-div {
          display: flex;
          justify-content: center;
        }
        .button-styles {
          width: 140px;
          height: 50px;
          background-color: skyblue;
          font-size: 20px;
        }
      `}</style>
      <button className='button-styles' onClick={props.onGenerate} >
        Click Me!</button>
    </div>
  );

}

Generate.propTypes = {
  onGenerate: PropTypes.func
};


export default Generate;
