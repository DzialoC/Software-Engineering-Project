import React, { useState } from "react";

const VehicleForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    vehicleName: "",
    vehicleTag: "",
    vehicleCondition: "",
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
    fetch("http://localhost:5000/vehicles/", {
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
        <h1>New Vehicle Form</h1>
        <div>
          <label htmlFor="vehicleName">Vehicle Name:</label>
          <input
            type="text"
            id="vehicleName"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleInputChange}
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
          <label htmlFor="vehicleCondition">Vehicle Condition:</label>
          <input
            type="text"
            id="vehicleCondition"
            name="vehicleCondition"
            value={formData.vehicleCondition}
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
          />
        </div>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default VehicleForm;
