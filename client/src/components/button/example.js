import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button onClick={() => console.log('Primary button clicked!')}>
        Primary Button
      </Button>
      
      <Button variant="secondary" onClick={() => console.log('Secondary button clicked!')}>
        Secondary Button
      </Button>
    </div>
  );
};

export default App;
