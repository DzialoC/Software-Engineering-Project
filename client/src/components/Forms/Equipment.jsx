import React, { useState } from "react";

const EquipmentForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    equipmentID: "",
    equipmentCondition: "",
    equipmentDescription: "",
    lastUser: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your server at localhost:5000/
    fetch("http://localhost:5000/equipment/", {
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
    <form className="form-content" onSubmit={handleSubmit}>
      <h1>New equipment form</h1>
      <div>
        <label htmlFor="equipmentID">
          Equipment ID Number: Needs to be unique.
        </label>
        <input
          type="number"
          id="equipmentID"
          name="equipmentID"
          value={formData.equipmentID}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="equipmentCondition">Equipment Condition:</label>
        <input
          type="text"
          id="equipmentCondition"
          name="equipmentCondition"
          value={formData.equipmentCondition}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="equipmentDescription">Equipment Description:</label>
        <input
          type="text"
          id="equipmentDescription"
          name="equipmentDescription"
          value={formData.equipmentDescription}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="lastUser">Last User:</label>
        <input
          type="number"
          id="lastUser"
          name="lastUser"
          value={formData.lastUser}
          onChange={handleInputChange}
          required
        />
      </div>

      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default EquipmentForm;
