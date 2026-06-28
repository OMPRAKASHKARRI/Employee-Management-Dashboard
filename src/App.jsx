import { useState } from "react";
import { Toaster } from "react-hot-toast";
import UserForm from "./components/UserForm/UserForm";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import UserTable from "./components/UserTable/UserTable";
import FilterModal from "./components/FilterModal/FilterModal";
import Pagination from "./components/Pagination/Pagination";
import toast from "react-hot-toast";
import useUsers from "./hooks/useUsers";
import { deleteUser } from "./api/userService";
import DashboardStats from "./components/DashboardStats/DashboardStats";
import { FaSpinner } from "react-icons/fa";

function App() {
const { users, setUsers, loading, error } = useUsers();
  // Search
  const [search, setSearch] = useState("");

  // Sorting
  const [sortBy, setSortBy] = useState("");

  // Filter Modal
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter Values
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  
  // crud operations
   const [isUserFormOpen, setIsUserFormOpen] = useState(false);
   const [editingUser, setEditingUser] = useState(null);
   const [isEditing, setIsEditing] = useState(false);
   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
   const [selectedUser, setSelectedUser] = useState(null);



   const handleAddUser = (newUser) => {
  const createdUser = {
    ...newUser,
    id: users.length + 1,
  };

  setUsers((prev) => [createdUser, ...prev]);
};
const handleEditClick = (user) => {
  setEditingUser(user);
  setIsEditing(true);
  setIsUserFormOpen(true);
};

const handleUpdateUser = (updatedUser) => {
  setUsers((prevUsers) =>
    prevUsers.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    )
  );
};
const handleDeleteClick = (user) => {
  setSelectedUser(user);
  setIsDeleteOpen(true);
};
const handleDeleteUser = async () => {
  if (!selectedUser) return;

  try {
    // Only call API for original users
    if (selectedUser.id <= 10) {
      await deleteUser(selectedUser.id);
    }

    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== selectedUser.id)
    );

    toast.success("🗑️ User deleted successfully!");
  } catch (error) {
    console.error(error);

    // Still update UI because JSONPlaceholder is a mock API
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== selectedUser.id)
    );

    toast.success("🗑️ User deleted successfully!");
  } finally {
    setSelectedUser(null);
    setIsDeleteOpen(false);
  }
};

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Search + Filter + Sort
  const filteredUsers = users
    .filter((user) => {
      const value = search.toLowerCase();

      const searchMatch =
        user.firstName.toLowerCase().includes(value) ||
        user.lastName.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) ||
        user.department.toLowerCase().includes(value);

      const firstNameMatch =
        filters.firstName === "" ||
        user.firstName
          .toLowerCase()
          .includes(filters.firstName.toLowerCase());

      const lastNameMatch =
        filters.lastName === "" ||
        user.lastName
          .toLowerCase()
          .includes(filters.lastName.toLowerCase());

      const emailMatch =
        filters.email === "" ||
        user.email
          .toLowerCase()
          .includes(filters.email.toLowerCase());

      const departmentMatch =
        filters.department === "" ||
        user.department === filters.department;

      return (
        searchMatch &&
        firstNameMatch &&
        lastNameMatch &&
        emailMatch &&
        departmentMatch
      );
    })
    .sort((a, b) => {
      if (!sortBy) return 0;
      return a[sortBy].localeCompare(b[sortBy]);
    });

  // Pagination Logic
  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-slate-100">
        <Header />

        <main className="max-w-7xl mx-auto px-6 py-8">

          {/* Heading */ }

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
Employee Management Dashboard            </h2>

            
          </div>
          <DashboardStats users={users}/>
          {/* Toolbar */}

          {!loading && !error && (
            <Toolbar
              search={search}
              setSearch={setSearch}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onFilterClick={() => setIsFilterOpen(true)}
              onAddClick={() => setIsUserFormOpen(true)}
            />
          )}

          {/* Loading */}

          {loading && (
            <div className="bg-white rounded-xl shadow p-8 text-center text-lg font-medium">
            <FaSpinner className="animate-spin text-blue-600 text-5xl" />Loading users...
            </div>
          )}

          {/* Error */}

          {error && (
            <div className="bg-red-100 border border-red-300 rounded-xl p-5 text-red-600">
              {error}
            </div>
          )}

          {/* Table */}

      {!loading && !error && (
  <>
    {filteredUsers.length > 0 ? (
      <>
        <UserTable
          users={paginatedUsers}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          totalUsers={filteredUsers.length}
        />
      </>
    ) : (
      <div className="bg-white rounded-2xl shadow-xl py-20 text-center">

        <h2 className="text-3xl font-bold text-gray-700">
          No Users Found
        </h2>

        <p className="text-gray-500 mt-3">
          Try changing the search keyword or filters.
        </p>

      </div>
    )}
  </>
)}

{/* Filter Modal */}

          <FilterModal
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            setFilters={setFilters}
          />
  <UserForm
  isOpen={isUserFormOpen}
  onClose={() => {
    setIsUserFormOpen(false);
    setEditingUser(null);
    setIsEditing(false);
  }}
  onSave={handleAddUser}
  editingUser={editingUser}
  isEditing={isEditing}
  onUpdate={handleUpdateUser}
/>
<DeleteModal
    isOpen={isDeleteOpen}
    onClose={() => setIsDeleteOpen(false)}
    onConfirm={handleDeleteUser}
/>
<footer className="text-center py-8 text-gray-500">

  Built with React, Tailwind CSS and Axios

</footer>

        </main>
      </div>
    </>
  );
}


export default App;