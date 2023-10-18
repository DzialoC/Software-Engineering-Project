import React, { useState } from 'react';
import Pagination from './Pagination';

const App = () => {
  const [page, setPage] = useState(1);
  const totalData = 100; // Assume you have 100 items.
  const itemsPerPage = 10; // Show 10 items per page.

  return (
    <div>
      {/* Render your data based on the current page here */}
      
      <Pagination 
        currentPage={page} 
        totalItems={totalData} 
        itemsPerPage={itemsPerPage}
        onPageChange={setPage}
      />
    </div>
  );
};

export default App;
