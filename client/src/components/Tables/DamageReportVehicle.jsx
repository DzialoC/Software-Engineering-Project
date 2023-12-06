import React, { useState, useEffect } from "react";
import axios from "axios";

function DamageReport() {
  const [damageReports, setDamageReports] = useState([]);

  useEffect(() => {
    async function fetchDamageReports() {
      try {
        const response = await axios.get(
          "http://localhost:5000/damage-reports/vehicle/", // Replace with your damage reports API endpoint
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
      <h2>Vehicle Damage Reports</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Description</th>
            <th>Employee At Fault</th>
            <th>Vehicle Tag</th>
            <th>Vehicle Info</th>
            <th>Report Date</th>
            <th>Negligent</th>
            <th>Pictures</th>
          </tr>
        </thead>
        <tbody>
          {damageReports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.description}</td>
              <td>{report.userName}</td>
              <td>{report.vehicleTag}</td>
              <td>{report.vehicleInfomation}</td>
              <td>{report.reportDate}</td>
              <td>{report.negligent ? "Yes" : "No"}</td>
              <td>{report.pictures ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DamageReport;
