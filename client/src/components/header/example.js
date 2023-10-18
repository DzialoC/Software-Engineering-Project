import React from 'react';
import Header from './Header';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <div style={{ flex: 1 }}> 
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default App;
