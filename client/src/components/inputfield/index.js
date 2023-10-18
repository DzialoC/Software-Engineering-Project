// InputField.js

import React from 'react';
import { InputFieldContainer, InputLabel, StyledInput } from './inputfield.style.js';

const InputField = ({ label, ...props }) => {
  return (
    <InputFieldContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput {...props} />
    </InputFieldContainer>
  );
};

export default InputField;
