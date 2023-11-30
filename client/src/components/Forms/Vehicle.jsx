import React, { useState } from "react";
import axios from "axios";

const VehicleForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    vehicleID: "",
    vehicleName: "",
    vehicleTag: "",
    vehicleCondition: "",
    lastUser: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.vehicleID.trim() === "" ||
      formData.vehicleName.trim() === "" ||
      formData.vehicleTag.trim() === "" ||
      formData.vehicleCondition.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      const confirmation = await axios.post(
        "http://localhost:5000/vehicles/",
        formData,
        {
          withCredentials: true,
        }
      );
      if (confirmation) {
        alert("New vehicle entry success!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main>
      <form className="form-content" onSubmit={handleSubmit}>
        <h1>New Vehicle Form</h1>
        <div>
          <label htmlFor="vehicleID">Vehicle Identification Number:</label>
          <input
            type="text"
            id="vehicleID"
            name="vehicleID"
            value={formData.vehicleID}
            onChange={handleInputChange}
          />
        </div>
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
