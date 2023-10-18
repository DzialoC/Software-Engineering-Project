// Textarea.styles.js

import styled from 'styled-components';

export const TextareaContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;  // Allows user to resize the textarea vertically
  transition: border-color 0.3s;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;
