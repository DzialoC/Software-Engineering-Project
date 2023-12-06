import axios from "axios";
import React, { useState } from "react";

const EquipmentForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    equipmentID: "",
    equipmentDescription: "",
    equipmentCondition: "",
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
        "http://localhost:5000/equipment/",
        formData,
        {
          withCredentials: true,
        }
      );
      if (confirmation) {
        alert("New Equipment entry success!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="form-content" onSubmit={handleSubmit}>
      <h1>New equipment form</h1>
      <div>
        <label htmlFor="equipmentID">Equipment ID:</label>
        <input
          type="text"
          id="equipmentID"
          name="equipmentID"
          value={formData.equipmentID}
          onChange={handleInputChange}
          maxLength={32}
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
  );
};

export default EquipmentForm;
