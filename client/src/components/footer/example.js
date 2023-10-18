import React from 'react';
import Footer from './Footer';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}> 
        {/* Main content goes here */}
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
