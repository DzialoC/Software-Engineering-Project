// Button.js

import React from 'react';
import { StyledButton } from './button.style.js';

const Button = ({ children, variant = 'primary', ...props }) => {
  return <StyledButton className={variant} {...props}>{children}</StyledButton>;
};

export default Button;
