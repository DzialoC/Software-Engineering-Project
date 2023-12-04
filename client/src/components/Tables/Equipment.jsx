import React, { useState, useEffect } from "react";
import axios from "axios";
import './Overview.css';


function Equipment() {
  const [equipmentData, setEquipmentData] = useState([]);
  let [selectedEquipment, setSelectedEquipment] = useState([]);

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

  const handleUpdate = async () => {
    try {
      await Promise.all(
        selectedEquipment.map((equipmentId) =>
          axios.put(`http://localhost:5000/equipment/update/${equipmentId}`, {
            withCredentials: true,
          })
        )
      );
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleRemove = async () => {
    try {
      await Promise.all(
        selectedEquipment.map((equipmentId) =>
          axios.delete(
            `http://localhost:5000/equipment/remove/${equipmentId}`,
            {
              withCredentials: true,
            }
          )
        )
      );
    } catch (error) {
      console.error("Remove error:", error);
    }
  };

  const handleCheckboxChange = (equipmentId) => {
    setSelectedEquipment((prevSelected) => {
      if (prevSelected.includes(equipmentId)) {
        return prevSelected.filter((id) => id !== equipmentId);
      } else {
        return [...prevSelected, equipmentId];
      }
    });
  };

  return (
    <div>
      <h2>Equipment List</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Equipment ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((equipment) => (
            <tr key={equipment.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedEquipment.includes(equipment.equipmentID)}
                  onChange={() => handleCheckboxChange(equipment.equipmentID)}
                />
              </td>
              <td>{equipment.equipmentID}</td>
              <td>{equipment.equipmentDescription}</td>
              <td>{equipment.equipmentCondition}</td>
              <td>{equipment.createdAt}</td>
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

export default Equipment;
