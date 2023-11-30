import React, { useState, useEffect } from "react";
import axios from "axios";

function ClassBCDL() {
  const [classBCDLReports, setClassBCDLReports] = useState([]);

  useEffect(() => {
    async function fetchClassBCDLReports() {
      try {
        const response = await axios.get("http://localhost:5000/class-bcdl/", {
          withCredentials: true,
        });
        setClassBCDLReports(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchClassBCDLReports();
  }, []);

  return (
    <div>
      <h2>Class B CDL Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Vehicle ID</th>
            <th>User ID</th>
            <th>Comment</th>
            <th>Air/Hydraulic Brake Check</th>
            <th>Parking Trailer Brake Check</th>
            <th>Service Brake Check</th>
            <th>Lighting Indicators</th>
            <th>Emergency Equipment</th>
            <th>Windshield Traffic Monitoring Devices</th>
            <th>Wipers/Washers</th>
            <th>Heater/Defroster</th>
            <th>Horns</th>
            <th>All External Lights</th>
            <th>Lenses Front</th>
            <th>Fluid Levels</th>
            <th>Fluid Air Leaks</th>
            <th>Steering Systems</th>
            <th>Tires</th>
            <th>Rims</th>
            <th>Lug Nuts</th>
            <th>Springs, Air Bags, Shocks</th>
            <th>Brake Lines/Hoses/Leaks</th>
            <th>Brake Contaminates</th>
            <th>Lenses Reflectors (Side)</th>
            <th>Traffic Monitoring Devices (Side)</th>
            <th>Battery</th>
            <th>Fuel Tanks</th>
            <th>Frames</th>
            <th>Lenses Reflectors (Rear)</th>
          </tr>
        </thead>
        <tbody>
          {classBCDLReports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.vehicleID}</td>
              <td>{report.userID}</td>
              <td>{report.comment}</td>
              <td>{report.airHydraulicBrakeCheck ? "Yes" : "No"}</td>
              <td>{report.parkingTrailerBrakeCheck ? "Yes" : "No"}</td>
              <td>{report.serviceBrakeCheck ? "Yes" : "No"}</td>
              <td>{report.lightingIndicators ? "Yes" : "No"}</td>
              <td>{report.emergencyEquipment ? "Yes" : "No"}</td>
              <td>
                {report.windshieldTrafficMonitoringDevices ? "Yes" : "No"}
              </td>
              <td>{report.wipersWashers ? "Yes" : "No"}</td>
              <td>{report.heaterDefroster ? "Yes" : "No"}</td>
              <td>{report.horns ? "Yes" : "No"}</td>
              <td>{report.allExternalLights ? "Yes" : "No"}</td>
              <td>{report.lensesFront ? "Yes" : "No"}</td>
              <td>{report.fluidLevels ? "Yes" : "No"}</td>
              <td>{report.fluidAirLeaks ? "Yes" : "No"}</td>
              <td>{report.steeringSystems ? "Yes" : "No"}</td>
              <td>{report.tires ? "Yes" : "No"}</td>
              <td>{report.rims ? "Yes" : "No"}</td>
              <td>{report.lugNuts ? "Yes" : "No"}</td>
              <td>{report.springsAirBagsShocks ? "Yes" : "No"}</td>
              <td>{report.brakeLinesHosesLeaks ? "Yes" : "No"}</td>
              <td>{report.brakeContaminates ? "Yes" : "No"}</td>
              <td>{report.lensesReflectorsSide ? "Yes" : "No"}</td>
              <td>{report.trafficMonitoringDevicesSide ? "Yes" : "No"}</td>
              <td>{report.battery ? "Yes" : "No"}</td>
              <td>{report.fuelTanks ? "Yes" : "No"}</td>
              <td>{report.frames ? "Yes" : "No"}</td>
              <td>{report.lensesReflectorsRear ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassBCDL;
