export default function Pagination({ paginationData, visiblePage = 4 }) {
  const { currentPage, setCurrentPage } = paginationData;

  const totalPages = 10;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    let startPage = 1;
    let endPage = totalPages;
    const halfVisiblePage = Math.floor(visiblePage / 2);

    if (totalPages > visiblePage) {
      if (currentPage <= halfVisiblePage) {
        endPage = visiblePage;
      } else if (currentPage > totalPages - halfVisiblePage) {
        startPage = totalPages - visiblePage + 1;
      } else {
        startPage = currentPage - halfVisiblePage;
        endPage = currentPage + halfVisiblePage;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i}>
          <button
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              i === currentPage ? "bg-gray-400 pointer-events-none" : "bg-white"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    if (totalPages > visiblePage && currentPage > halfVisiblePage + 1) {
      pages.unshift(
        <li key="startEllipsis">
          <button
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(1)}
          >
            ...
          </button>
        </li>
      );
    }

    if (
      totalPages > visiblePage &&
      currentPage < totalPages - halfVisiblePage
    ) {
      pages.push(
        <li key="endEllipsis">
          <button
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(totalPages)}
          >
            ...
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {renderPagination()}
        <li>
          <button
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
