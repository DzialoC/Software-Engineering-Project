// MForm.styles.js

import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
  padding: 10px 15px;
  background-color: #007BFF;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
