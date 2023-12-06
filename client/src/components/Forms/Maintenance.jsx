import React, { useState } from "react";
import axios from "axios";

const MaintenanceForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    maintenanceDescription: "",
    maintenanceDate: "",
    vehicleTag: "",
    equipmentID: "",
    cost: "",
    partsReplaced: "",
    nextMaintenanceDate: "",
    nextMaintenanceWork: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const confirmation = await axios.post(
        "http://localhost:5000/maintenance/",
        formData,
        {
          withCredentials: true,
        }
      );
      if (confirmation) {
        alert("New maintenance entry success!");
      }
    } catch (error) {
      let errorMessage = "An error occurred. Please try again.";
      if (error.response && error.response.data) {
        // If the error has a response and the response has a data property
        errorMessage += " Details: " + error.response.data;
      }
      alert(errorMessage);
    }
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
            required
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
          <label htmlFor="nextMaintenanceDate">Next Maintenance Date:</label>
          <input
            type="date"
            id="nextMaintenanceDate"
            name="nextMaintenanceDate"
            value={formData.nextMaintenanceDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="vehicleTag">Vehicle Tag:</label>
          <input
            type="text"
            id="vehicleTag"
            name="vehicleTag"
            value={formData.vehicleTag}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="equipmentID">Equipment ID:</label>
          <input
            type="text"
            id="equipmentID"
            name="equipmentID"
            value={formData.equipmentID}
            onChange={handleInputChange}
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
            required
          />
        </div>
        <div>
          <label htmlFor="nextMaintenanceWork">
            Next maintenance work to be completed:
          </label>
          <input
            type="text"
            id="nextMaintenanceWork"
            name="nextMaintenanceWork"
            value={formData.nextMaintenanceWork}
            onChange={handleInputChange}
            required
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
