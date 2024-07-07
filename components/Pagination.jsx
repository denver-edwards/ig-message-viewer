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
          className="px-4 py-2 mx-1 rounded bg-cyan-100 text-gray-700 hover:bg-cyan-400"
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
              ? "bg-cyan-500 text-white hover:bg-cyan-400"
              : "bg-cyan-200 hover:bg-cyan-400 text-gray-700"
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
          className="px-4 py-2 mx-1 rounded bg-cyan-100 text-gray-700 hover:bg-cyan-400"
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
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center">{getPaginationButtons()}</div>
          <form
            onSubmit={handleInputPageSubmit}
            className="mt-4 flex items-center"
          >
            <input
              type="number"
              value={inputPage}
              onChange={handleInputChange}
              placeholder="Page"
              className="px-4 py-2 rounded-l border border-gray-300 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-500 text-white rounded-r border border-cyan-500 hover:bg-cyan-600"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </>
  );
}
