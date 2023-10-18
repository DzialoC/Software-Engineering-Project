// RadioButton.js

import React from 'react';
import { RadioButtonContainer, RadioButtonInput, CustomRadioButton, RadioButtonLabel } from './radiobutton.style.js';

const RadioButton = ({ name, value, checked, onChange, label }) => {
  return (
    <RadioButtonContainer>
      <RadioButtonInput 
        type="radio" 
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <CustomRadioButton />
      <RadioButtonLabel>{label}</RadioButtonLabel>
    </RadioButtonContainer>
  );
};

export default RadioButton;
