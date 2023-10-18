// EmailInput.styles.js

import styled from 'styled-components';

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const EmailLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

export const StyledEmailInput = styled.input.attrs({ type: 'email' })`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;
