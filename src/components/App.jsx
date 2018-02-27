import React from 'react';
import Header from './Header';
import PosterSearch from './PosterSearch';
import PosterDisplay from './PosterDisplay';
import PosterList from './PosterList';

const App = () => {
  return (
    <div>
      <style jsx global>{`
        * {
          font-family: monospace;
        }
      `}</style>
      <Header />
      <PosterSearch />
      <PosterList />
      <PosterDisplay />
    </div>
  );
}

export default App;
