// Pagination.styles.js

import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  background-color: ${props => props.active ? '#007BFF' : '#f7f7f7'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.active ? '#0056b3' : '#e6e6e6'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
