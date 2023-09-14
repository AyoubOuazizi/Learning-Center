import React from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  // Determine the range of pages to display around the current page
  const range = 2; // You can adjust this value to control the number of pages displayed on each side
  let startPage = Math.max(1, currentPage - range);
  let endPage = Math.min(totalPages, currentPage + range);

  // Ensure that there are at least 5 pages displayed
  const maxPagesToShow = 5;
  const pageCount = endPage - startPage + 1;

  if (pageCount < maxPagesToShow) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, endPage + maxPagesToShow - pageCount);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, startPage - maxPagesToShow + pageCount);
    }
  }

  // Generate an array of page numbers to display
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <nav>
      <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a
            className="page-link"
            data-abc="true"
            onClick={() => onPageChange(1)} // Button to go to the first page
            style={{ cursor: 'pointer' }} // Change cursor to pointer
          >
            <i className="fa fa-angle-left"></i><i className="fa fa-angle-left"></i>
          </a>
        </li>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a
            className="page-link"
            data-abc="true"
            onClick={() => onPageChange(currentPage - 1)}
            style={{ cursor: 'pointer' }} // Change cursor to pointer
          >
            <i className="fa fa-angle-left"></i>
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? 'active' : ''}`}
          >
            <a
              className="page-link"
              data-abc="true"
              onClick={() => onPageChange(page)}
              style={{ cursor: 'pointer' }} // Change cursor to pointer
            >
              {page}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
        >
          <a
            className="page-link"
            data-abc="true"
            onClick={() => onPageChange(currentPage + 1)}
            style={{ cursor: 'pointer' }} // Change cursor to pointer
          >
            <i className="fa fa-angle-right"></i>
          </a>
        </li>
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <a
            className="page-link"
            data-abc="true"
            onClick={() => onPageChange(totalPages)} // Button to go to the last page
            style={{ cursor: 'pointer' }} // Change cursor to pointer
          >
            <i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
