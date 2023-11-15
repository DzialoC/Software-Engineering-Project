import React, { useState, useEffect } from "react";

function InspectionFormSubmissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/class-bcdl/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  // Render submissions in a table or list
  return (
    <div>
      <h2>Form Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>User ID</th>
            {/* Add other table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.vehicleID}</td>
              <td>{submission.userID}</td>
              {/* Render other submission fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InspectionFormSubmissions;
