// Button.styles.js

import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  // Primary button style
  &.primary {
    background-color: #007BFF;
    color: #ffffff;

    &:hover {
      background-color: #0056b3;
    }

    &:active {
      transform: scale(0.98);
    }

    &:disabled {
      background-color: #d1d1d1;
      cursor: not-allowed;
    }
  }

  // Secondary button style
  &.secondary {
    background-color: #f7f7f7;
    color: #333;

    &:hover {
      background-color: #e9e9e9;
    }

    &:active {
      transform: scale(0.98);
    }

    &:disabled {
      background-color: #d1d1d1;
      cursor: not-allowed;
    }
  }
`;
