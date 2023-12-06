import React, { useState, useEffect } from "react";
import axios from "axios";

function DamageReport() {
  const [damageReports, setDamageReports] = useState([]);

  useEffect(() => {
    async function fetchDamageReports() {
      try {
        const response = await axios.get(
          "http://localhost:5000/damage-reports/equipment/",
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
      <h2>Equipment Damage Reports</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Description</th>
            <th>Employee At Fault</th>
            <th>Equipment ID</th>
            <th>Employee Name</th>
            <th>Report Date</th>
            <th>Negligent</th>
          </tr>
        </thead>
        <tbody>
          {damageReports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.description}</td>
              <td>{report.userID}</td>
              <td>{report.userName}</td>
              <td>{report.equipmentID}</td>
              <td>{report.reportDate}</td>
              <td>{report.negligent ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DamageReport;
