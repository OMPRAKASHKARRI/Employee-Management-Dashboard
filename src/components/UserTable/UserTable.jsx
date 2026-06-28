import { FaEdit, FaTrash } from "react-icons/fa";
import { getDepartmentColor } from "../../utils/badgeColors";
function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
<div className="overflow-x-auto rounded-2xl bg-white shadow-xl">        
<table className="min-w-full border-collapse">          
<thead className="bg-blue-600 sticky top-0 z-20">            
    <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">First Name</th>
              <th className="px-6 py-4 text-left">Last Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Department</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-blue-50 transition-all duration-200"
              >
                <td className="px-6 py-5">{user.id}</td>
                <td className="px-6 py-5 font-medium">
                  {user.firstName}
                </td>
                <td className="px-6 py-5">
                  {user.lastName}
                </td>
                <td className="px-6 py-5">
                  {user.email}
                </td>
                <td className="px-6 py-5">
                  <span
className={`px-3 py-1 rounded-full text-sm font-medium ${getDepartmentColor(user.department)}`}
>
  {user.department}
</span>
                </td>

                <td className="px-6 py-4">
  <div className="flex items-center gap-3">

    <button
      onClick={() => onEdit(user)}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all duration-300"
    >
      <FaEdit size={14} />
      Edit
    </button>

    <button
      onClick={() => onDelete(user)}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-300"
    >
      <FaTrash size={14} />
      Delete
    </button>

  </div>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;