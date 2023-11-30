import React, { useState, useEffect } from "react";
import axios from "axios";

function Equipment() {
  const [equipmentData, setEquipmentData] = useState([]);

  useEffect(() => {
    async function fetchEquipmentData() {
      try {
        const response = await axios.get("http://localhost:5000/equipment/", {
          withCredentials: true,
        });
        setEquipmentData(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchEquipmentData();
  }, []);

  return (
    <div>
      <h2>Equipment List</h2>
      <table>
        <thead>
          <tr>
            <th>Equipment ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Manufacturer</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.id}</td>
              <td>{equipment.name}</td>
              <td>{equipment.type}</td>
              <td>{equipment.manufacturer}</td>
              <td>{equipment.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Equipment;
