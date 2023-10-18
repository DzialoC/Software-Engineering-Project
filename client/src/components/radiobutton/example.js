import React, { useState } from 'react';
import RadioButton from './RadioButton';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <div>
      <RadioButton
        name="exampleRadio"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={(e) => setSelectedOption(e.target.value)}
        label="Option 1"
      />
      
      <RadioButton 
        name="exampleRadio"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={(e) => setSelectedOption(e.target.value)}
        label="Option 2"
      />
    </div>
  );
};

export default App;
