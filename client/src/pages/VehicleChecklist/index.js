import React, { useState } from "react";
import { InputField, Textarea, Checkbox } from "../../components/index.js";
import axios from "axios";

const VehicleChecklist = () => {
  // State management for form inputs
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    yearMakeModel: "",
    tag: "",
    date: "",
    mileage: "",
    workTicket: "",
    personReleasingVehicle: "",
    bodyOfVehicle: false,
    tiresConditionAndAirPressure: false,
    // ... add other fields
    comments: "",
  });

  // Event handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Event handler for checkboxes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      const response = await axios.post(
        "http://localhost:5000/vehicles/",
        formData
      );

      if (response.status === 201) {
        // Assuming a 201 status for successful creation
        alert("Data submitted successfully!");
      } else {
        alert("Error submitting data!");
      }
    } catch (error) {
      console.error("Failed to submit data:", error);
      alert("Failed to submit data!");
    }
  };

  return (
    <body>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 25,
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "60%", margins: "auto" }}>
          <InputField
            label="Vehicle Number"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
          />

          <InputField
            label="Year/Make/Model"
            name="yearMakeModel"
            value={formData.yearMakeModel}
            onChange={handleChange}
          />

          <InputField
            label="Tag"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
          />

          <InputField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />

          <InputField
            label="Mileage"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
          />

          <InputField
            label="Work Ticket"
            name="workTicket"
            value={formData.workTicket}
            onChange={handleChange}
          />

          <InputField
            label="Person Releasing Vehicle"
            name="personReleasingVehicle"
            value={formData.personReleasingVehicle}
            onChange={handleChange}
          />
          <div>
            <Checkbox
              label="Body of Vehicle in good condition"
              name="bodyOfVehicle"
              checked={formData.bodyOfVehicle}
              onChange={handleCheckboxChange}
            />
            <span> Body of Vehicle in good condition</span>
          </div>
          <div>
            <Checkbox
              label="Tires in good condition and correct air pressure"
              name="tiresConditionAndAirPressure"
              checked={formData.tiresConditionAndAirPressure}
              onChange={handleCheckboxChange}
            />
            <span> Tires in good condition and correct air pressure</span>
          </div>
          <Textarea
            placeholder="Additional Comments"
            label="Comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />

          <div className="field mt-5">
            <button type="submit" className="button is-success is-fullwidth">
              Submit
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};
export default VehicleChecklist;
