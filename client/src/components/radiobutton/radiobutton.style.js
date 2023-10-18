// RadioButton.styles.js

import styled from 'styled-components';

export const RadioButtonContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
`;

export const RadioButtonInput = styled.input`
  display: none;  // Hide the default radio button

  &:checked + span {
    background-color: #007BFF;
    border-color: #007BFF;
  }

  &:checked + span:after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    margin: auto;
  }
`;

export const CustomRadioButton = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #777;
  display: block;
  margin-right: 5px;
  position: relative;
  transition: border-color 0.3s;

  &:after {
    content: '';
    display: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioButtonLabel = styled.span`
  font-size: 16px;
`;
