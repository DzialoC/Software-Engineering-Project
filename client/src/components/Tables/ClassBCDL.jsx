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
      <table className="table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Vehicle Tag </th>
            <th>Employee</th>
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
              <td>{report.id}</td>
              <td>{report.vehicleTag}</td>
              <td>{report.userName}</td>
              <td>{report.comment}</td>
              <td>{renderBoolean(report.airHydraulicBrakeCheck)}</td>
              <td>{renderBoolean(report.parkingTrailerBrakeCheck)}</td>
              <td>{renderBoolean(report.serviceBrakeCheck)}</td>
              <td>{renderBoolean(report.lightingIndicators)}</td>
              <td>{renderBoolean(report.emergencyEquipment)}</td>
              <td>
                {renderBoolean(report.windshieldTrafficMonitoringDevices)}
              </td>
              <td>{renderBoolean(report.wipersWashers)}</td>
              <td>{renderBoolean(report.heaterDefroster)}</td>
              <td>{renderBoolean(report.wipersReservoir)}</td>
              <td>{renderBoolean(report.horns)}</td>
              <td>{renderBoolean(report.allExternalLights)}</td>
              <td>{renderBoolean(report.lensesFront)}</td>
              <td>{renderBoolean(report.fluidLevels)}</td>
              <td>{renderBoolean(report.fluidAirLeaks)}</td>
              <td>{renderBoolean(report.steeringSystems)}</td>
              <td>{renderBoolean(report.tires)}</td>
              <td>{renderBoolean(report.rims)}</td>
              <td>{renderBoolean(report.lugNuts)}</td>
              <td>{renderBoolean(report.springsAirBagsShocks)}</td>
              <td>{renderBoolean(report.brakeLinesHosesLeaks)}</td>
              <td>{renderBoolean(report.brakeContaminates)}</td>
              <td>{renderBoolean(report.lensesReflectorsSide)}</td>
              <td>{renderBoolean(report.trafficMonitoringDevicesSide)}</td>
              <td>{renderBoolean(report.battery)}</td>
              <td>{renderBoolean(report.fuelTanks)}</td>
              <td>{renderBoolean(report.frames)}</td>
              <td>{renderBoolean(report.lensesReflectorsRear)}</td>
              <td>{report.comments}</td>
              <td>{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassBCDLForm;
