// Pagination.js

import React from 'react';
import { PaginationContainer, PageButton } from './pagination.style.js';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum);
    }
  };

  return (
    <PaginationContainer>
      <PageButton disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)}>&laquo;</PageButton>
      {[...Array(totalPages)].map((_, idx) => (
        <PageButton
          key={idx}
          active={currentPage === idx + 1}
          onClick={() => handlePageClick(idx + 1)}
        >
          {idx + 1}
        </PageButton>
      ))}
      <PageButton disabled={currentPage === totalPages} onClick={() => handlePageClick(currentPage + 1)}>&raquo;</PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
