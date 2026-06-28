import { useEffect, useState } from "react";
import { getUsers } from "../api/userService";

const departments = [
  "Engineering",
  "HR",
  "Finance",
  "Marketing",
  "Sales",
];

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await getUsers();

        const expandedUsers = [];

        // Create 100 users from the 10 API users
        for (let batch = 0; batch < 10; batch++) {
          response.data.forEach((user, index) => {
            const names = user.name.split(" ");

            expandedUsers.push({
              id: batch * 10 + user.id,

              firstName: names[0] || "",

              lastName: `${names.slice(1).join(" ")} ${batch + 1}`,

              email: `${user.username.toLowerCase()}${batch + 1}@gmail.com`,

              department:
                departments[(batch + index) % departments.length],
            });
          });
        }

        setUsers(expandedUsers);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return {
    users,
    setUsers,
    loading,
    error,
  };
};

export default useUsers;