// Accordion.styles.js

import styled from 'styled-components';

export const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const AccordionHeader = styled.div`
  padding: 10px 15px;
  background-color: #f7f7f7;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const AccordionBody = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 10px 15px;
  border-top: 1px solid #ccc;
  background-color: #fff;
`;
