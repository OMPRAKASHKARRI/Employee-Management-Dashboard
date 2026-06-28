function FilterModal({
  isOpen,
  onClose,
  filters,
  setFilters,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Filter Users
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="First Name"
            value={filters.firstName}
            onChange={(e)=>
              setFilters({
                ...filters,
                firstName:e.target.value
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Last Name"
            value={filters.lastName}
            onChange={(e)=>
              setFilters({
                ...filters,
                lastName:e.target.value
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Email"
            value={filters.email}
            onChange={(e)=>
              setFilters({
                ...filters,
                email:e.target.value
              })
            }
            className="w-full border rounded-lg p-3"
          />

          <select
            value={filters.department}
            onChange={(e)=>
              setFilters({
                ...filters,
                department:e.target.value
              })
            }
            className="w-full border rounded-lg p-3"
          >
            <option value="">All Departments</option>

            <option>Engineering</option>

            <option>HR</option>

            <option>Finance</option>

            <option>Marketing</option>

            <option>Sales</option>

          </select>

        </div>

        <div className="flex justify-end gap-3 mt-8">

         <button
  onClick={() => {
    setFilters({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });

    onClose();
  }}
  className="border px-5 py-2 rounded-lg hover:bg-gray-100 transition"
>
  Reset
</button>

          <button
  onClick={onClose}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
>
  Apply Filters
</button>

        </div>

      </div>

    </div>
  );
}

export default FilterModal;