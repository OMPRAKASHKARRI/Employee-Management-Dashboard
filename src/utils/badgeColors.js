export const getDepartmentColor = (department) => {
  switch (department) {
    case "Engineering":
      return "bg-green-100 text-green-700";

    case "HR":
      return "bg-purple-100 text-purple-700";

    case "Finance":
      return "bg-yellow-100 text-yellow-700";

    case "Marketing":
      return "bg-blue-100 text-blue-700";

    case "Sales":
      return "bg-orange-100 text-orange-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};