// PasswordInput.js

import React, { useState } from 'react';
import { PasswordContainer, PasswordInputField, ToggleVisibilityButton } from './password.style.js';

const PasswordInput = ({ value, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <PasswordContainer>
      <PasswordInputField 
        type={isVisible ? 'text' : 'password'} 
        value={value} 
        onChange={onChange}
      />
      <ToggleVisibilityButton onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '🙈' : '👁️'}
      </ToggleVisibilityButton>
    </PasswordContainer>
  );
};

export default PasswordInput;
