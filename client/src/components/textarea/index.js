// Textarea.js

import React from 'react';
import { TextareaContainer, StyledTextarea } from './textarea.style.js';

const Textarea = ({ value, onChange, placeholder, rows }) => {
  return (
    <TextareaContainer>
      <StyledTextarea 
        value={value} 
        onChange={onChange}
        placeholder={placeholder}
        rows={rows || 5}
      />
    </TextareaContainer>
  );
};

export default Textarea;
