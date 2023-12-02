import React, { useState, useEffect } from "react";
import axios from "axios";
import './Overview.css';

function DamageReport() {
  const [damageReports, setDamageReports] = useState([]);

  useEffect(() => {
    async function fetchDamageReports() {
      try {
        const response = await axios.get(
          "http://localhost:5000/damage-reports/", // Replace with your damage reports API endpoint
          {
            withCredentials: true,
          }
        );
        setDamageReports(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchDamageReports();
  }, []);

  return (
    <div>
      <h2>Damage Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Description</th>
            <th>User ID</th>
            <th>Vehicle ID</th>
            <th>Equipment ID</th>
            <th>Report Date</th>
            <th>Negligent</th>
            <th>Pictures</th>
            {/* ... other headers ... */}
          </tr>
        </thead>
        <tbody>
          {damageReports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.description}</td>
              <td>{report.userID}</td>
              <td>{report.vehicleID}</td>
              <td>{report.equipmentID}</td>
              <td>{report.reportDate}</td>
              <td>{report.negligent ? "Yes" : "No"}</td>
              <td>{report.pictures ? "Yes" : "No"}</td>
              {/* Display other damage report fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DamageReport;
