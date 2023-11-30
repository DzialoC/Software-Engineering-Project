import React, { useState, useEffect } from "react";
import axios from "axios";

function LocalInspectionReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await axios.get(
          "http://localhost:5000/local-inspections/",
          {
            withCredentials: true,
          }
        );
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
      <h1>Latest Reports</h1>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Vehicle Tag</th>
            <th>Year Make Model</th>
            <th>Employee That File Entry</th>
            <th>Entry Date</th>
            <th>Mileage</th>
            <td>Work Ticket</td>
            <th>Person Releasing</th>
            <th>Body of Vehicle</th>
            <th>Tires Condition and Air Pressure</th>
            <th>Horn</th>
            <th>State Inspection and License Sticker</th>
            <th>Wipers Reservoir</th>
            <th>Low and High Beam</th>
            <th>Brake Lights</th>
            <th>Turn Signal Lights</th>
            <th>Emergency Flasher Lights</th>
            <th>Vehicle Insurance Card Valid</th>
            <th>Gas Tank Full</th>
            <th>Emergency Instructions</th>
            <th>Wash Vehicle</th>
            <th>Comments</th>
            <th>DPW Signature</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.tag}</td>
              {/* TODO */}
              <td>{report.vehicleInformation}</td>
              <td>{report.userName}</td>
              {/* END  */}
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

export default LocalInspectionReports;
