import React, { useState, useEffect } from "react";
import axios from "axios";

function Equipment() {
  let [equipmentData, setEquipmentData] = useState([]);
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

  const handleCheckboxChange = (equipmentID) => {
    setSelectedEquipment((prevSelected) => {
      if (prevSelected.includes(equipmentID)) {
        return prevSelected.filter((id) => id !== equipmentID);
      } else {
        return [...prevSelected, equipmentID];
      }
    });
  };

  const handleFieldChange = (e, field, value) => {
    setEquipmentData(
      equipmentData.map((equipment) => {
        if (equipment.equipmentID === e) {
          equipment[field] = value;
        }
        return equipment;
      })
    );
  };

  const handleUpdate = async () => {
    if (selectedEquipment.length === 0) {
      alert("Please select at least one equipment to Modify.");
      return;
    }
    try {
      for (const equipmentId of selectedEquipment) {
        let equipmentToUpdate = equipmentData.find(
          (equipment) => equipment.equipmentID === equipmentId
        );
        await axios.put(
          `http://localhost:5000/equipment/update/${equipmentId}`,
          equipmentToUpdate,
          { withCredentials: true }
        );
      }
      setSelectedEquipment([]);
      alert("Selected equipment updated successfully.");
    } catch (error) {
      console.error("Update error:", error);
    }

    setSelectedEquipment([]);
  };

  const handleRemove = async () => {
    try {
      await Promise.all(
        selectedEquipment.map((equipmentId) =>
          axios.delete(
            `http://localhost:5000/equipment/delete/${equipmentId}`,
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

  return (
    <div>
      <h2>Equipment List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Equipment ID</th>
            <th>Equipment Condition</th>
            <th>Equipment Description</th>
            <th>Under Ma</th>
            <th>Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((equipment) => (
            <tr key={equipment.equipmentID}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedEquipment.includes(equipment.equipmentID)}
                  onChange={() => handleCheckboxChange(equipment.equipmentID)}
                />
              </td>
              <td>
                <input type="text" readOnly value={equipment.equipmentID} />
              </td>
              <td>
                <input
                  type="text"
                  value={equipment.equipmentCondition}
                  onChange={(e) =>
                    handleFieldChange(
                      equipment.equipmentID,
                      "equipmentCondition",
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={equipment.equipmentDescription}
                  onChange={(e) =>
                    handleFieldChange(
                      equipment.equipmentID,
                      "equipmentDescription",
                      e.target.value
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={equipment.underMaintenance}
                  onChange={(e) =>
                    handleFieldChange(
                      equipment.equipmentID,
                      "underMaintenance",
                      e.target.checked
                    )
                  }
                />
              </td>
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
