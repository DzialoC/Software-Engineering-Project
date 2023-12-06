import React, { useState } from "react";
import axios from "axios";

const GenerateReport = () => {
  const [selectedOption, setSelectedOption] = useState("vehicles");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fileFormat, setFileFormat] = useState("csv"); // Default to CSV

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (startDate === "") {
        return alert("Please enter a start date.");
      }
      if (endDate === "") {
        return alert("Please enter a start date.");
      }
      const response = await axios.get(
        `http://localhost:5000/${selectedOption}/${fileFormat}`,
        {
          withCredentials: true,
          params: { startDate, endDate },
          responseType: "blob", // Important for handling the file download
        }
      );

      // Create a URL for the file
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fileLink = document.createElement("a");
      fileLink.href = fileURL;
      fileLink.setAttribute("download", `report.${fileFormat}`);
      document.body.appendChild(fileLink);

      fileLink.click();
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Report Type:
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="vehicles">Vehicles</option>
          <option value="maintenance/upcoming"> Upcoming Maintenance</option>
          <option value="equipment">Equipment</option>
          <option value="class-bcdl">Class B/C/D/L</option>
          <option value="damage-reports/vehicle">
            Damage Report - Vehicle
          </option>
          <option value="damage-reports/equipment">
            Damage Report - Equipment
          </option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </label>
      <br />
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        File Format:
        <select
          value={fileFormat}
          onChange={(e) => setFileFormat(e.target.value)}
        >
          <option value="csv">CSV</option>
          <option value="pdf">PDF</option>
        </select>
      </label>
      <br />
      <button type="submit">Generate Report</button>
    </form>
  );
};

export default GenerateReport;
