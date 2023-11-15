import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/", {
          withCredentials: true,
        });
        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users");
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li> // assuming each user object has a "name" property
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
