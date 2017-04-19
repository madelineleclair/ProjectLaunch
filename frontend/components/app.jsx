import React from 'react';
import NavigationBarContainer from './navigation/navigation_bar_container';

const App = ({ children }) => {
  return (
    <div>
      <NavigationBarContainer />
      { children }
    </div>
  );
};

export default App;
