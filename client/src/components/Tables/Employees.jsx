import React, { useState, useEffect } from "react";
import axios from "axios";

function Employees() {
  let [employeeData, setEmployeeData] = useState([]);
  let [selectedEmployees, setSelectedEmployees] = useState([]);

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

  const handleCheckboxChange = (employeeID) => {
    setSelectedEmployees((prevSelected) => {
      if (prevSelected.includes(employeeID)) {
        return prevSelected.filter((id) => id !== employeeID);
      } else {
        return [...prevSelected, employeeID];
      }
    });
  };

  const handleFieldChange = (employeeID, field, value) => {
    setEmployeeData((previousData) => {
      if (!previousData.length) {
        console.warn("Current employeeData state is empty");
        return previousData;
      }

      const newData = previousData.map((employee) => {
        if (employee.id === employeeID) {
          console.log(`Updating employee with ID: ${employeeID}`);
          return { ...employee, [field]: value };
        }
        return employee;
      });

      console.log("New employee data:", newData);
      return newData;
    });
  };

  const handleUpdate = async () => {
    if (selectedEmployees.length === 0) {
      alert("Please select at least one employee to modify.");
      return;
    }
    for (const employeeID of selectedEmployees) {
      let employeeToUpdate = employeeData.find(
        (employee) => employee.id === employeeID
      );
      console.log(employeeToUpdate);
      try {
        await axios.put(
          `http://localhost:5000/update/${employeeID}`,
          employeeToUpdate,
          { withCredentials: true }
        );
      } catch (error) {
        console.error("Error updating employee:", error);
        alert("Error updating employees.");
      }
    }
    alert("Selected employees updated successfully.");

    setSelectedEmployees([]);
  };

  const handleRemove = async () => {
    if (selectedEmployees.length === 0) {
      alert("Please select at least one employee to remove.");
      return;
    }
    try {
      for (const employeeID of selectedEmployees) {
        await axios.delete(
          `http://localhost:5000/employees/delete/${employeeID}`,
          { withCredentials: true }
        );
      }
      alert("Selected employees removed successfully.");
      setEmployeeData((prevData) =>
        prevData.filter(
          (employee) => !selectedEmployees.includes(employee.employeeID)
        )
      );
    } catch (error) {
      console.error("Error removing employees:", error);
      alert("Error removing employees.");
    }

    setSelectedEmployees([]);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Change User</th>
            <th>Current User Status</th>
            <th>Change Admin</th>
            <th>Current Admin Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedEmployees.includes(employee.id)}
                  onChange={() => handleCheckboxChange(employee.id)}
                />
              </td>
              <td>{employee.id}</td>
              <td>
                <input
                  type="text"
                  value={employee.name}
                  onChange={(e) =>
                    handleFieldChange(employee.id, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={employee.email}
                  onChange={(e) =>
                    handleFieldChange(employee.id, "email", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={employee.user}
                  onChange={() =>
                    handleFieldChange(employee.id, "user", !employee.user)
                  }
                />
              </td>
              <td>{employee.user ? "Yes" : "No"}</td>
              <td>
                <input
                  type="checkbox"
                  checked={employee.admin}
                  onChange={() =>
                    handleFieldChange(employee.id, "admin", !employee.admin)
                  }
                />
              </td>
              <td>{employee.admin ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleUpdate} className="button">
        Update Selected
      </button>
      <button onClick={handleRemove} className="button">
        Remove Selected
      </button>
    </div>
  );
}

export default Employees;
