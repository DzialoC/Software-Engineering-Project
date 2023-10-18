// EmailInput.js

import React from 'react';
import { EmailContainer, EmailLabel, StyledEmailInput } from './email.style.js';

const EmailInput = ({ label, ...props }) => {
  return (
    <EmailContainer>
      {label && <EmailLabel>{label}</EmailLabel>}
      <StyledEmailInput {...props} />
    </EmailContainer>
  );
};

export default EmailInput;
