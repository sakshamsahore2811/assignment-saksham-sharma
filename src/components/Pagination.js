import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
         
      <button 
        disabled={currentPage === 1} 
        className='bg-purple-500 p-3 text-black rounded-md'
        onClick={() => onPageChange(currentPage - 1)}
        
      >
       
        Previous
        
      </button>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={pageNumber === currentPage ? 'active rounded-md' : 'rounded-md'}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button 
        disabled={currentPage === totalPages} 
        className='bg-purple-500 p-3 text-black rounded-md'
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Pagination;
