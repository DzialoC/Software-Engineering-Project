import React, { useState, useEffect } from "react";

function LatestReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch("http://localhost:5000/latest-reports");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchReports();
  }, []);

  return (
    <div>
      <h2>Latest Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Vehicle ID</th>
            <th>User ID</th>
            {/* Add other relevant headers */}
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.vehicleID}</td>
              <td>{report.userID}</td>
              {/* Display other report fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LatestReports;
