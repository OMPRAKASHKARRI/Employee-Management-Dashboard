function Pagination({
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
  totalUsers,
}) {
  const totalPages = Math.ceil(totalUsers / pageSize);

  const start = totalUsers === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalUsers);

  return (
    <div className="mt-6 bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4">

      {/* Left Side */}
      <div className="text-gray-600">
        Showing{" "}
        <span className="font-semibold">{start}</span>
        {" - "}
        <span className="font-semibold">{end}</span>
        {" "}of{" "}
        <span className="font-semibold">{totalUsers}</span>{" "}
        users
      </div>

      {/* Center */}
      <div className="flex items-center gap-3">

        <span className="text-gray-600">
          Rows:
        </span>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="border rounded-lg px-3 py-2"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-3">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-100"
        >
          ← Previous
        </button>

        <span className="font-semibold">
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-100"
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default Pagination;