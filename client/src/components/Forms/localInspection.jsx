import React, { useState } from "react";

const LocalInspection = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    yearMakeModel: "",
    tag: "",
    date: "",
    mileage: "",
    workTicket: "",
    personReleasingVehicle: "",
    userID: "",
    bodyOfVehicle: false,
    tiresConditionAndAirPressure: false,
    horn: false,
    stateInspectionAndLicSticker: false,
    wipersReservoir: false,
    lowAndHighBeamHeadlights: false,
    brakeLights: false,
    turnSignalLights: false,
    emergencyFlasherLights: false,
    vehicleInsuranceCardValid: false,
    gasTankFull: false,
    emergencyInstructions: false,
    washVehicle: false,
    comments: "",
    dpwSignature: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your server at localhost:5000/localinspections/
    fetch("http://localhost:5000/local-inspections/", {
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
        <h1>Local Vehicle Inspection</h1>
        <div>
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="yearMakeModel">Year Make Model:</label>
          <input
            type="text"
            id="yearMakeModel"
            name="yearMakeModel"
            value={formData.yearMakeModel}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="tag">Tag:</label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={formData.tag}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={formData.mileage}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="workTicket">Work Ticket:</label>
          <input
            type="text"
            id="workTicket"
            name="workTicket"
            value={formData.workTicket}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="personReleasingVehicle">
            Person Releasing Vehicle:
          </label>
          <input
            type="text"
            id="personReleasingVehicle"
            name="personReleasingVehicle"
            value={formData.personReleasingVehicle}
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
          <label htmlFor="bodyOfVehicle">Body of Vehicle:</label>
          <input
            type="checkbox"
            id="bodyOfVehicle"
            name="bodyOfVehicle"
            checked={formData.bodyOfVehicle}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="tiresConditionAndAirPressure">
            Tires Condition and Air Pressure:
          </label>
          <input
            type="checkbox"
            id="tiresConditionAndAirPressure"
            name="tiresConditionAndAirPressure"
            checked={formData.tiresConditionAndAirPressure}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="horn">Horn:</label>
          <input
            type="checkbox"
            id="horn"
            name="horn"
            checked={formData.horn}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="stateInspectionAndLicSticker">
            State Inspection and License Sticker:
          </label>
          <input
            type="checkbox"
            id="stateInspectionAndLicSticker"
            name="stateInspectionAndLicSticker"
            checked={formData.stateInspectionAndLicSticker}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="wipersReservoir">Wipers Reservoir:</label>
          <input
            type="checkbox"
            id="wipersReservoir"
            name="wipersReservoir"
            checked={formData.wipersReservoir}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="lowAndHighBeamHeadlights">
            Low and High Beam Headlights:
          </label>
          <input
            type="checkbox"
            id="lowAndHighBeamHeadlights"
            name="lowAndHighBeamHeadlights"
            checked={formData.lowAndHighBeamHeadlights}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="brakeLights">Brake Lights:</label>
          <input
            type="checkbox"
            id="brakeLights"
            name="brakeLights"
            checked={formData.brakeLights}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="turnSignalLights">Turn Signal Lights:</label>
          <input
            type="checkbox"
            id="turnSignalLights"
            name="turnSignalLights"
            checked={formData.turnSignalLights}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="emergencyFlasherLights">
            Emergency Flasher Lights:
          </label>
          <input
            type="checkbox"
            id="emergencyFlasherLights"
            name="emergencyFlasherLights"
            checked={formData.emergencyFlasherLights}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="vehicleInsuranceCardValid">
            Vehicle Insurance Card Valid:
          </label>
          <input
            type="checkbox"
            id="vehicleInsuranceCardValid"
            name="vehicleInsuranceCardValid"
            checked={formData.vehicleInsuranceCardValid}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="gasTankFull">Gas Tank Full:</label>
          <input
            type="checkbox"
            id="gasTankFull"
            name="gasTankFull"
            checked={formData.gasTankFull}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="emergencyInstructions">Emergency Instructions:</label>
          <input
            type="checkbox"
            id="emergencyInstructions"
            name="emergencyInstructions"
            checked={formData.emergencyInstructions}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="washVehicle">Wash Vehicle:</label>
          <input
            type="checkbox"
            id="washVehicle"
            name="washVehicle"
            checked={formData.washVehicle}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="dpwSignature">DPW Signature:</label>
          <input
            type="text"
            id="dpwSignature"
            name="dpwSignature"
            value={formData.dpwSignature}
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

export default LocalInspection;
