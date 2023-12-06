import React, { useState } from "react";
import axios from "axios";

const VehicleForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    vehicleTag: "",
    vehicleCondition: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    underMaintenance: false,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
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
          <label htmlFor="vehicleTag">Vehicle Tag:</label>
          <input
            type="text"
            id="vehicleTag"
            name="vehicleTag"
            value={formData.vehicleTag}
            onChange={handleInputChange}
            required
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
          <label htmlFor="vehicleMake">Vehicle Make:</label>
          <input
            type="text"
            id="vehicleMake"
            name="vehicleMake"
            value={formData.vehicleMake}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="vehicleModel">Vehicle Model:</label>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="vehicleYear">Vehicle Year:</label>
          <input
            type="text"
            id="vehicleYear"
            name="vehicleYear"
            value={formData.vehicleYear}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="underMaintenance">Under Maintenance:</label>
          <input
            type="checkbox"
            id="underMaintenance"
            name="underMaintenance"
            value={formData.underMaintenance}
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
