import React, { useState } from "react";

const MaintenanceForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    maintenanceDescription: "",
    maintenanceDate: "",
    vehicleID: "",
    userID: "",
    cost: "",
    partsReplaced: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/maintenance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, if needed
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <main>
      <form className="form-content" onSubmit={handleSubmit}>
        <h1>Maintenance Log Form</h1>
        <div>
          <label htmlFor="maintenanceDescription">
            Maintenance Description:
          </label>
          <input
            type="text"
            id="maintenanceDescription"
            name="maintenanceDescription"
            value={formData.maintenanceDescription}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="maintenanceDate">Maintenance Date:</label>
          <input
            type="date"
            id="maintenanceDate"
            name="maintenanceDate"
            value={formData.maintenanceDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="vehicleID">Vehicle ID:</label>
          <input
            type="number"
            id="vehicleID"
            name="vehicleID"
            value={formData.vehicleID}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="userID">User ID:</label>
          <input
            type="number"
            id="userID"
            name="userID"
            value={formData.userID}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="partsReplaced">Parts Replaced:</label>
          <input
            type="text"
            id="partsReplaced"
            name="partsReplaced"
            value={formData.partsReplaced}
            onChange={handleInputChange}
          />
        </div>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default MaintenanceForm;
