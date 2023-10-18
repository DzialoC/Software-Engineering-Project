// InputField.styles.js

import styled from 'styled-components';

export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

export const StyledInput = styled.input`
  padding: 10px 12px;
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
