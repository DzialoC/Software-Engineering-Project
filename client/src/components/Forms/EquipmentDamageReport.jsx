import React, { useState } from "react";
import axios from "axios";

const DamageReportForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    description: "",
    userID: "",
    equipmentID: "",
    reportDate: "",
    negligent: null,
    pictures: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue =
      type === "checkbox" ? checked : type === "file" ? files : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const confirmation = await axios.post(
        "http://localhost:5000/damage-reports/equipment/",
        formData,
        {
          withCredentials: true,
        }
      );
      if (confirmation) {
        alert("Damage Report Success");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main>
      <form className="form-content" onSubmit={handleSubmit}>
        <h1>Damage Report</h1>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="userID">Employee at fault ID:</label>
          <input
            type="number"
            id="userID"
            name="userID"
            value={formData.userID}
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
            required
          />
        </div>

        <div>
          <label htmlFor="reportDate">Report Date:</label>
          <input
            type="date"
            id="reportDate"
            name="reportDate"
            value={formData.reportDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="negligent">Negligent:</label>
          <input
            type="checkbox"
            id="negligent"
            name="negligent"
            checked={formData.negligent}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="pictures">Pictures:</label>
          <input
            type="file"
            id="pictures"
            name="pictures"
            multiple
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

export default DamageReportForm;
