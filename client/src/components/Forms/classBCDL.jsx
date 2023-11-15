import React, { useState } from "react";

function VehicleInspectionForm() {
  const [formData, setFormData] = useState({
    vehicleID: "",
    userID: "",
    comment: "",
    airHydraulicBrakeCheck: false,
    parkingTrailerBrakeCheck: false,
    serviceBrakeCheck: false,
    lightingIndicators: false,
    emergencyEquipment: false,
    windshieldTrafficMonitoringDevices: false,
    wipersWashers: false,
    heaterDefroster: false,
    horns: false,
    allExternalLights: false,
    lensesFront: false,
    fluidLevels: false,
    fluidAirLeaks: false,
    steeringSystems: false,
    tires: false,
    rims: false,
    lugNuts: false,
    springsAirBagsShocks: false,
    brakeLinesHosesLeaks: false,
    brakeContaminates: false,
    lensesReflectorsSide: false,
    trafficMonitoringDevicesSide: false,
    battery: false,
    fuelTanks: false,
    frames: false,
    lensesReflectorsRear: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/class-bcdl/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data sent successfully");
        // Handle any success logic here
      } else {
        console.error("Form data submission failed");
        // Handle errors here
      }
    } catch (error) {
      console.error("An error occurred while sending the form data", error);
      // Handle errors here
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <main>
      <form className="form-content" onSubmit={handleSubmit}>
        <h1>Class B CDL Inspection Form</h1>
        <div>
          <label htmlFor="vehicleID">Vehicle ID:</label>
          <input
            type="number"
            id="vehicleID"
            name="vehicleID"
            value={formData.vehicleID}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="userID">User ID:</label>
          <input type="number" id="userID" name="userID" required />
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="airHydraulicBrakeCheck">
            Air/Hydraulic Brake Check:
          </label>
          <input
            type="checkbox"
            id="airHydraulicBrakeCheck"
            name="airHydraulicBrakeCheck"
            onChange={handleChange}
            value={formData.airHydraulicBrakeCheck}
          />
        </div>

        <div>
          <label htmlFor="parkingTrailerBrakeCheck">
            Parking Trailer Brake Check:
          </label>
          <input
            type="checkbox"
            id="parkingTrailerBrakeCheck"
            name="parkingTrailerBrakeCheck"
            onChange={handleChange}
            value={formData.parkingTrailerBrakeCheck}
          />
        </div>

        <div>
          <label htmlFor="serviceBrakeCheck">Service Brake Check:</label>
          <input
            type="checkbox"
            id="serviceBrakeCheck"
            name="serviceBrakeCheck"
            onChange={handleChange}
            value={formData.serviceBrakeCheck}
          />
        </div>

        <div>
          <label htmlFor="lightingIndicators">Lighting Indicators:</label>
          <input
            type="checkbox"
            id="lightingIndicators"
            name="lightingIndicators"
            onChange={handleChange}
            value={formData.lightingIndicators}
          />
        </div>

        <div>
          <label htmlFor="emergencyEquipment">Emergency Equipment:</label>
          <input
            type="checkbox"
            id="emergencyEquipment"
            name="emergencyEquipment"
            onChange={handleChange}
            value={formData.emergencyEquipment}
          />
        </div>

        <div>
          <label htmlFor="windshieldTrafficMonitoringDevices">
            Windshield Traffic Monitoring Devices:
          </label>
          <input
            type="checkbox"
            id="windshieldTrafficMonitoringDevices"
            name="windshieldTrafficMonitoringDevices"
            onChange={handleChange}
            value={formData.windshieldTrafficMonitoringDevices}
          />
        </div>

        <div>
          <label htmlFor="wipersWashers">Wipers/Washers:</label>
          <input
            type="checkbox"
            id="wipersWashers"
            name="wipersWashers"
            onChange={handleChange}
            value={formData.wipersWashers}
          />
        </div>

        <div>
          <label htmlFor="heaterDefroster">Heater/Defroster:</label>
          <input
            type="checkbox"
            id="heaterDefroster"
            name="heaterDefroster"
            onChange={handleChange}
            value={formData.heaterDefroster}
          />
        </div>

        <div>
          <label htmlFor="horns">Horns:</label>
          <input
            type="checkbox"
            id="horns"
            name="horns"
            onChange={handleChange}
            value={formData.horns}
          />
        </div>

        <div>
          <label htmlFor="allExternalLights">All External Lights:</label>
          <input
            type="checkbox"
            id="allExternalLights"
            name="allExternalLights"
            onChange={handleChange}
            value={formData.allExternalLights}
          />
        </div>

        <div>
          <label htmlFor="lensesFront">Lenses Front:</label>
          <input
            type="checkbox"
            id="lensesFront"
            name="lensesFront"
            onChange={handleChange}
            value={formData.lensesFront}
          />
        </div>

        <div>
          <label htmlFor="fluidLevels">Fluid Levels:</label>
          <input
            type="checkbox"
            id="fluidLevels"
            name="fluidLevels"
            onChange={handleChange}
            value={formData.fluidLevels}
          />
        </div>

        <div>
          <label htmlFor="fluidAirLeaks">Fluid Air Leaks:</label>
          <input
            type="checkbox"
            id="fluidAirLeaks"
            name="fluidAirLeaks"
            onChange={handleChange}
            value={formData.fluidAirLeaks}
          />
        </div>

        <div>
          <label htmlFor="steeringSystems">Steering Systems:</label>
          <input
            type="checkbox"
            id="steeringSystems"
            name="steeringSystems"
            onChange={handleChange}
            value={formData.steeringSystems}
          />
        </div>

        <div>
          <label htmlFor="tires">Tires:</label>
          <input
            type="checkbox"
            id="tires"
            name="tires"
            onChange={handleChange}
            value={formData.tires}
          />
        </div>

        <div>
          <label htmlFor="rims">Rims:</label>
          <input
            type="checkbox"
            id="rims"
            name="rims"
            onChange={handleChange}
            value={formData.rims}
          />
        </div>

        <div>
          <label htmlFor="lugNuts">Lug Nuts:</label>
          <input
            type="checkbox"
            id="lugNuts"
            name="lugNuts"
            onChange={handleChange}
            value={formData.lugNuts}
          />
        </div>

        <div>
          <label htmlFor="springsAirBagsShocks">
            Springs, Air Bags, Shocks:
          </label>
          <input
            type="checkbox"
            id="springsAirBagsShocks"
            name="springsAirBagsShocks"
            onChange={handleChange}
            value={formData.springsAirBagsShocks}
          />
        </div>

        <div>
          <label htmlFor="brakeLinesHosesLeaks">Brake Lines/Hoses/Leaks:</label>
          <input
            type="checkbox"
            id="brakeLinesHosesLeaks"
            name="brakeLinesHosesLeaks"
            onChange={handleChange}
            value={formData.brakeLinesHosesLeaks}
          />
        </div>

        <div>
          <label htmlFor="brakeContaminates">Brake Contaminates:</label>
          <input
            type="checkbox"
            id="brakeContaminates"
            name="brakeContaminates"
            onChange={handleChange}
            value={formData.brakeContaminates}
          />
        </div>

        <div>
          <label htmlFor="lensesReflectorsSide">
            Lenses Reflectors (Side):
          </label>
          <input
            type="checkbox"
            id="lensesReflectorsSide"
            name="lensesReflectorsSide"
            onChange={handleChange}
            value={formData.lensesReflectorsSide}
          />
        </div>

        <div>
          <label htmlFor="trafficMonitoringDevicesSide">
            Traffic Monitoring Devices (Side):
          </label>
          <input
            type="checkbox"
            id="trafficMonitoringDevicesSide"
            name="trafficMonitoringDevicesSide"
            onChange={handleChange}
            value={formData.trafficMonitoringDevicesSide}
          />
        </div>

        <div>
          <label htmlFor="battery">Battery:</label>
          <input
            type="checkbox"
            id="battery"
            name="battery"
            onChange={handleChange}
            value={formData.battery}
          />
        </div>

        <div>
          <label htmlFor="fuelTanks">Fuel Tanks:</label>
          <input
            type="checkbox"
            id="fuelTanks"
            name="fuelTanks"
            onChange={handleChange}
            value={formData.fuelTanks}
          />
        </div>

        <div>
          <label htmlFor="frames">Frames:</label>
          <input
            type="checkbox"
            id="frames"
            name="frames"
            onChange={handleChange}
            value={formData.frames}
          />
        </div>

        <div>
          <label htmlFor="lensesReflectorsRear">
            Lenses Reflectors (Rear):
          </label>
          <input
            type="checkbox"
            id="lensesReflectorsRear"
            name="lensesReflectorsRear"
            onChange={handleChange}
            value={formData.lensesReflectorsRear}
          />
        </div>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default VehicleInspectionForm;
