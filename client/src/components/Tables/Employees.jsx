import React, { useState, useEffect } from "react";
import axios from "axios";
import './Overview.css';

function Employees() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    async function fetchEmployeeData() {
      try {
        const response = await axios.get("http://localhost:5000/", {
          withCredentials: true,
        });
        setEmployeeData(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchEmployeeData();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>User</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.user ? "Yes" : "No"}</td>
              <td>{employee.admin ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
