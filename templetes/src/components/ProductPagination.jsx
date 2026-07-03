import React from "react";

const ProductPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="col-lg-12">
      <nav>
        <ul className="pagination justify-content-center">

          <li
            className={`page-item ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() =>
                onPageChange(currentPage - 1)
              }
            >
              Previous
            </button>
          </li>

          {pages.map((page) => (
            <li
              key={page}
              className={`page-item ${
                currentPage === page
                  ? "active"
                  : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  onPageChange(page)
                }
              >
                {page}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages
                ? "disabled"
                : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() =>
                onPageChange(currentPage + 1)
              }
            >
              Next
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default ProductPagination;