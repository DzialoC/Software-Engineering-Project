import React, { useState } from 'react';
import InputField from './InputField';

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <InputField 
        label="Your Name" 
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default App;
