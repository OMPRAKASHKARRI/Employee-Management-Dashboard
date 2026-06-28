import { FaUsers } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-xl">
          <FaUsers className="text-3xl text-blue-600" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
EmployeeHub          </h1>

          <p className="text-gray-500 mt-1">
Manage employees with ease.          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;