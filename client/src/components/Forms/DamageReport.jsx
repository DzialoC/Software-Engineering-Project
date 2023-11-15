import React, { useState } from "react";

const DamageReportForm = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    description: "",
    userID: "",
    vehicleID: "",
    equipmentID: "",
    reportDate: "",
    negligent: false,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your server at localhost:5000/
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "pictures") {
        value.forEach((file) => {
          formDataToSend.append(key, file);
        });
      } else {
        formDataToSend.append(key, value);
      }
    });

    fetch("http://localhost:5000/damage-reports/", {
      method: "POST",
      body: formDataToSend,
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
          <label htmlFor="vehicleID">Vehicle ID:</label>
          <input
            type="number"
            id="vehicleID"
            name="vehicleID"
            value={formData.vehicleID}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="equipmentID">Equipment ID:</label>
          <input
            type="number"
            id="equipmentID"
            name="equipmentID"
            value={formData.equipmentID}
            onChange={handleInputChange}
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
