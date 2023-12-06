import React, { useState, useEffect } from "react";
import axios from "axios";

function MaintenanceReportTable() {
  const [maintenanceRecords, setMaintenanceRecords] = useState([]);
  const [selectedRecords, setSelectedRecords] = useState([]);

  useEffect(() => {
    async function fetchMaintenance() {
      try {
        const response = await axios.get("http://localhost:5000/maintenance/", {
          withCredentials: true,
        });

        const upcoming = await axios.get(
          "http://localhost:5000/maintenance/upcoming/",
          {
            withCredentials: true,
          }
        );
        setMaintenanceRecords(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchMaintenance();
  }, []);

  // const handleCheckboxChange = (selectedID) => {
  //   setSelectedRecords((prevSelected) => {
  //     if (prevSelected.includes(selectedID)) {
  //       return prevSelected.filter((id) => id !== selectedID);
  //     } else {
  //       return [...prevSelected, selectedID];
  //     }
  //   });
  // };

  // const handleRemove = async () => {
  //   if (selectedRecords.length === 0) {
  //     alert("Please select at least one record to remove.");
  //     return;
  //   }
  //   try {
  //     for (const recordID of selectedRecords) {
  //       await axios.delete(
  //         `http://localhost:5000/maintenance/delete/${recordID}`,
  //         { withCredentials: true }
  //       );
  //     }
  //     alert("Selected records removed successfully.");
  //     setSelectedRecords([]);
  //   } catch (error) {
  //     console.error("Error removing records:", error);
  //     alert("Error removing records.");
  //   }
  // };

  const renderBoolean = (value) => {
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    return "N/A";
  };

  return (
    <div>
      <h1>Latest Maintenance Reports</h1>
      <table className="table">
        <thead>
          <tr>
            {/* <th>Select</th> */}
            <th>Maintenance Description</th>
            <th>Maintenance Date</th>
            <th>Next Maintenance Date</th>
            <th>Next Maintenance Work</th>
            <th>Vehicle Tag</th>
            <th>Vehicle Info</th>
            <th>Equipment ID</th>
            <th>Cost</th>
            <th>Parts Replaced</th>
            <th>Employee That File Entry</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceRecords.map((record) => (
            <tr key={record.id}>
              {/* <td>
                <input
                  type="checkbox"
                  checked={selectedRecords.includes(record.id)}
                  onChange={() => handleCheckboxChange(record.id)}
                />
              </td> */}
              <td>{record.maintenanceDescription}</td>
              <td>{record.maintenanceDate}</td>
              <td>{record.nextMaintenanceDate}</td>
              <td>{record.nextMaintenanceWork}</td>
              <td>{record.vehicleTag}</td>
              <td>{record.vehicleInformation}</td>
              <td>{record.equipmentID}</td>
              <td>{record.cost}</td>
              <td>{record.partsReplaced}</td>
              <td>{record.userName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={handleRemove} className="button">
        Remove Selected
      </button> */}
    </div>
  );
}

export default MaintenanceReportTable;
