import React from 'react';


function Header(){
  return (
    <div className='header-styles'>
      <style jsx global>{`
        .header-styles {
          text-align: center;
          font-size: 2em;
        }
        .meow {
          font-size: 1.5em;
        }
      `}</style>
      <h1>INSPIRATIONAL KITTEHS :3</h1>
      <p className='meow'>Meow</p>
    </div>
  );
}

export default Header;
