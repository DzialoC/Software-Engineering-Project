import React, { useState, useEffect } from "react";
import axios from "axios";

function GetAllVehicles() {
  let [vehicles, setVehicles] = useState([]);
  let [selectedVehicles, setSelectedVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await axios.get("http://localhost:5000/vehicles/", {
          withCredentials: true,
        });
        setVehicles(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchVehicles();
  }, []);

  const handleCheckboxChange = (vehicleID) => {
    setSelectedVehicles((prevSelected) => {
      if (prevSelected.includes(vehicleID)) {
        return prevSelected.filter((id) => id !== vehicleID);
      } else {
        return [...prevSelected, vehicleID];
      }
    });
  };

  const handleFieldChange = (vehicleID, field, value) => {
    setVehicles(
      vehicles.map((vehicle) => {
        if (vehicle.vehicleID === vehicleID) {
          vehicle[field] = value;
        }
        return vehicle;
      })
    );
  };

  const handleUpdate = async () => {
    if (selectedVehicles.length === 0) {
      alert("Please select at least one vehicle to update.");
      return;
    }
    for (const vehicleID of selectedVehicles) {
      let vehicleToUpdate = vehicles.find(
        (vehicle) => vehicle.vehicleID === vehicleID
      );
      await axios.put(
        `http://localhost:5000/vehicles/update/${vehicleID}`,
        vehicleToUpdate,
        { withCredentials: true }
      );
    }
    alert("Selected vehicles updated successfully.");

    setSelectedVehicles([]);
  };

  const handleRemove = async () => {
    if (selectedVehicles.length === 0) {
      alert("Please select at least one vehicle to remove.");
      return;
    }

    try {
      for (const vehicleID of selectedVehicles) {
        await axios.delete(
          `http://localhost:5000/vehicles/delete/${vehicleID}`,
          { withCredentials: true }
        );
      }
      alert("Selected vehicles removed successfully.");

      setVehicles((prevVehicles) =>
        prevVehicles.filter((v) => !selectedVehicles.includes(v.vehicleID))
      );
    } catch (error) {
      console.error("Error removing vehicles:", error);
      alert("Error removing vehicles.");
    }

    // Clear the selection
    setSelectedVehicles([]);
  };

  return (
    <div>
      <h2>All Vehicles</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Vehicle Name</th>
            <th>Vehicle Tag</th>
            <th>Vehicle Condition</th>
            <th>Last User</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.vehicleID}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedVehicles.includes(vehicle.vehicleID)}
                  onChange={() => handleCheckboxChange(vehicle.vehicleID)}
                />
              </td>
              <td>{vehicle.vehicleID}</td>
              <td>
                <input
                  type="text"
                  value={vehicle.vehicleName}
                  onChange={(e) =>
                    handleFieldChange(
                      vehicle.vehicleID,
                      "vehicleName",
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={vehicle.vehicleTag}
                  onChange={(e) =>
                    handleFieldChange(
                      vehicle.vehicleID,
                      "vehicleTag",
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={vehicle.vehicleCondition}
                  onChange={(e) =>
                    handleFieldChange(
                      vehicle.vehicleID,
                      "vehicleCondition",
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={vehicle.lastUser}
                  onChange={(e) =>
                    handleFieldChange(
                      vehicle.vehicleID,
                      "lastUser",
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleUpdate} className="button">
        Update Selected
      </button>
      <button onClick={handleRemove} className="button">
        Remove Selected
      </button>
    </div>
  );
}

export default GetAllVehicles;
