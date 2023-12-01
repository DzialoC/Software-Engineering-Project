import React, { useState } from "react";
import axios from "axios";

const LocalInspection = () => {
  // Define the initial state to store form input values
  const [formData, setFormData] = useState({
    tag: "",
    date: "",
    mileage: "",
    workTicket: "",
    personReleasingVehicle: "",
    bodyOfVehicle: null,
    tiresConditionAndAirPressure: null,
    horn: null,
    stateInspectionAndLicSticker: null,
    wipersReservoir: null,
    lowAndHighBeamHeadlights: null,
    brakeLights: null,
    turnSignalLights: null,
    emergencyFlasherLights: null,
    vehicleInsuranceCardValid: null,
    gasTankFull: null,
    emergencyInstructions: null,
    washVehicle: null,
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const confirmation = await axios.post(
        "http://localhost:5000/local-inspections/",
        formData,
        {
          withCredentials: true,
        }
      );
      if (confirmation) {
        alert("New Local Inspection entry success!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main>
      <form className="form-content" onSubmit={handleSubmit}>
        <h1>Local Vehicle Inspection</h1>

        <div>
          <label htmlFor="tag">Vehicle Tag:</label>
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
