import {
  FaUsers,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa";

function DashboardStats({ users }) {

  const departments = new Set(
    users.map(user => user.department)
  );

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      <div className="bg-white rounded-xl shadow-lg p-6">

        <FaUsers className="text-blue-600 text-3xl mb-3"/>

        <h3 className="text-gray-500">
          Total Users
        </h3>

        <p className="text-3xl font-bold">
          {users.length}
        </p>

      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">

        <FaBuilding className="text-green-600 text-3xl mb-3"/>

        <h3 className="text-gray-500">
          Departments
        </h3>

        <p className="text-3xl font-bold">
          {departments.size}
        </p>

      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">

        <FaEnvelope className="text-purple-600 text-3xl mb-3"/>

        <h3 className="text-gray-500">
          Emails
        </h3>

        <p className="text-3xl font-bold">
          {users.length}
        </p>

      </div>

    </div>

  );
}

export default DashboardStats;