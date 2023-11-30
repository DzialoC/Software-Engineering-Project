import React, { useState, useEffect } from "react";
import axios from "axios";

function LocalInspectionReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await axios.get(
          "http://localhost:5000/local-inspection/",
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

  return (
    <div>
      <h2>Latest Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Vehicle Number</th>
            <th>Year/Make/Model</th>
            <th>Date</th>
            <th>Mileage</th>
            {/* ... other headers ... */}
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.vehicleNumber}</td>
              <td>{report.yearMakeModel}</td>
              <td>{report.date}</td>
              <td>{report.mileage}</td>
              {/* Display other report fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocalInspectionReports;
