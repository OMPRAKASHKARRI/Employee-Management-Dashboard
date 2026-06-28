import { FaFilter, FaPlus, FaSearch } from "react-icons/fa";

function Toolbar({
  search,
  setSearch,
  sortBy,
  setSortBy,
  onFilterClick,
onAddClick,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

        {/* Search */}
        <div className="relative w-full lg:w-[420px]">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">

          <button
            onClick={onFilterClick}
            className="flex items-center gap-2 border px-5 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <FaFilter />
            Filter
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none"
          >
            <option value="">Sort By</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="department">Department</option>
          </select>

          <button
  onClick={onAddClick}
  className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition"
>
  <FaPlus />
  Add User
</button>

        </div>
      </div>
    </div>
  );
}

export default Toolbar;