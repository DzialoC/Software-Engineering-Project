// DropMenu.styles.js

import styled from 'styled-components';

export const DropMenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropMenuButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DropMenuContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  z-index: 1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;

  & a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: black;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
