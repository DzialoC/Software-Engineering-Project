// PasswordInput.styles.js

import styled from 'styled-components';

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PasswordInputField = styled.input`
  padding: 10px;
  padding-right: 40px;  // Space for the eye icon
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const ToggleVisibilityButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;
