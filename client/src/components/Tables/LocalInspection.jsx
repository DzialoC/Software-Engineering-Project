import React, { useState, useEffect } from "react";
import axios from "axios";

function LocalInspectionReports() {
  const [reports, setReports] = useState([]);
  let [selectedReport, setSelectedReport] = useState([]);

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

  const handleCheckboxChange = (selectedID) => {
    setSelectedReport((prevSelected) => {
      if (prevSelected.includes(selectedID)) {
        return prevSelected.filter((id) => id !== selectedID);
      } else {
        return [...prevSelected, selectedID];
      }
    });
  };

  const handleRemove = async () => {
    if (selectedReport.length === 0) {
      alert("Please select at least one Report to remove.");
      return;
    }
    try {
      for (const reportID of selectedReport) {
        await axios.delete(
          `http://localhost:5000/local-inspections/delete/${reportID}`,
          { withCredentials: true }
        );
      }
      alert("Selected vehicles removed successfully.");

      setSelectedReport((prevReports) =>
        prevReports.filter((reportID) => !selectedReport.includes(reportID))
      );
    } catch (error) {
      console.error("Error removing Reports:", error);
      alert("Error removing Reports.");
    }
    // Clear the selection
    setSelectedReport([]);
  };

  const renderBoolean = (value) => {
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    return "N/A";
  };

  return (
    <div>
      <h1>Latest Reports</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Report ID</th>
            <th>Vehicle Tag</th>
            <th>Year Make Model</th>
            <th>Employee That File Entry</th>
            <th>Entry Date</th>
            <th>Mileage</th>
            <th>Work Ticket</th>
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
              <td>
                <input
                  type="checkbox"
                  checked={selectedReport.includes(report.id)}
                  onChange={() => handleCheckboxChange(report.id)}
                />
              </td>
              <td>{report.id}</td>
              <td>{report.tag}</td>
              <td>{report.vehicleInformation}</td>
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
      <button onClick={handleRemove} className="button">
        Remove Selected
      </button>
    </div>
  );
}

export default LocalInspectionReports;
