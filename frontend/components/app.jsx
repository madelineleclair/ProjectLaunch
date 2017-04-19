import React from 'react';
import NavigationBar from './navigation/navigation_bar';

const App = ({ children }) => {
  debugger
  return (
    <div>
      <NavigationBar />
      { children }
    </div>
  );
};

export default App;
