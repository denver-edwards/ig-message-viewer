export default function Pagination({
  inputPage,
  totalPages,
  currentPage,
  setCurrentPage,
  setInputPage,
}) {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setInputPage("");
  };

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleInputPageSubmit = (e) => {
    e.preventDefault();
    const page = parseInt(inputPage, 10);
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
    setInputPage("");
  };

  const getPaginationButtons = () => {
    let buttons = [];

    // Left arrow for the first page
    if (currentPage > 1) {
      buttons.push(
        <button
          key="first"
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 mx-1 rounded bg-gray-200"
        >
          &laquo;
        </button>
      );
    }

    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage =
      currentPage < 3
        ? Math.min(totalPages, currentPage + 4)
        : Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === i
              ? "bg-blue-500 text-white hover:bg-blue-700"
              : "bg-gray-200 hover:bg-gray-400"
          }`}
        >
          {i}
        </button>
      );
    }

    // Right arrow for the last page
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="last"
          onClick={() => handlePageChange(totalPages)}
          className="px-4 py-2 mx-1 rounded bg-gray-200"
        >
          &raquo;
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4">
          {getPaginationButtons()}
          <form onSubmit={handleInputPageSubmit} className="ml-4">
            <input
              type="number"
              value={inputPage}
              onChange={handleInputChange}
              placeholder="Page"
              className="px-4 py-2 rounded border border-gray-300"
            />
          </form>
        </div>
      )}
    </>
  );
}
