import React, { useState, useEffect } from "react";
import axios from "axios";

function ClassBCDLForm() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await axios.get("http://localhost:5000/class-bcdl/", {
          withCredentials: true,
        });
        setReports(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchReports();
  }, []);

  const renderBoolean = (value) => {
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    return "N/A";
  };

  return (
    <div>
      <h1>Class B CDL Inspection Forms</h1>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Comments</th>
            <th>Air Hydraulic Brake Check</th>
            <th>Parking Trailer Brake Check</th>
            <th>Service Brake Check</th>
            <th>Lighting Indicators</th>
            <th>Emergency Equipment</th>
            <th>Windshield Traffic Monitoring Devices</th>
            <th>Wipers Washers</th>
            <th>Heater Defroster</th>
            <th>Horn</th>
            <th>All External Lights</th>
            <th>Lenses Front</th>
            <th>Fluid Levels</th>
            <th>Fluid Air Leaks</th>
            <th>Steering Systems</th>
            <th>Tires</th>
            <th>Rims</th>
            <th>Lug Nuts</th>
            <th>Springs Air Bags Shocks</th>
            <th>Brake Lines Hoses Leaks</th>
            <th>Brake Contaminates</th>
            <th>Lenses Reflectors Side</th>
            <th>Traffic Monitoring DeviceSide</th>
            <th>Battery</th>
            <th>Fuel Tanks</th>
            <th>Frames</th>
            <th>Lenses Reflectors Rear</th>
            <th>Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.vehicleTag}</td>
              <td>{report.tag}</td>
              <td>{report.vehicleInreportation}</td>
              <td>{report.userName}</td>
              <td>{report.date}</td>
              <td>{report.mileage}</td>
              <td>{report.workTicket}</td>
              <td>{report.personReleasingVehicle}</td>
              <td>{renderBoolean(report.bodyOfVehicle)}</td>
              <td>{renderBoolean(report.tiresConditionAndAirPressure)}</td>
              <td>{renderBoolean(report.horn)}</td>
              <td>{renderBoolean(report.stateInspectionAndLicSticker)}</td>
              <td>{renderBoolean(report.wipersReservoir)}</td>
              <td>{renderBoolean(report.lowAndHighBeamHeadlights)}</td>
              <td>{renderBoolean(report.brakeLights)}</td>
              <td>{renderBoolean(report.turnSignalLights)}</td>
              <td>{renderBoolean(report.emergencyFlasherLights)}</td>
              <td>{renderBoolean(report.vehicleInsuranceCardValid)}</td>
              <td>{renderBoolean(report.gasTankFull)}</td>
              <td>{renderBoolean(report.emergencyInstructions)}</td>
              <td>{renderBoolean(report.washVehicle)}</td>
              <td>{report.comments}</td>
              <td>{report.dpwSignature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassBCDLForm;
