import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "./Calendar.css";

const MaintenanceCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [maintenanceData, setMaintenanceData] = useState([]);

  useEffect(() => {
    const fetchMaintenanceData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/maintenance/upcoming/",
          {
            withCredentials: true,
          }
        );
        setMaintenanceData(response.data);
      } catch (error) {
        console.error("Error fetching maintenance data:", error);
      }
    };

    fetchMaintenanceData();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  const maintenanceByDate = maintenanceData.reduce((acc, item) => {
    const date = formatDate(item.nextMaintenanceDate);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  const renderMaintenanceTasks = (date) => {
    const formattedDate = formatDate(date);
    return maintenanceByDate[formattedDate]?.map((task, index) => (
      <div key={index} className="maintenance-task">
        <p>
          Next Maintenance Date:{" "}
          {new Date(task.nextMaintenanceDate).toLocaleDateString()}
        </p>
        <p>Work: {task.nextMaintenanceWork}</p>
        {task.vehicleTag ? (
          <p>Vehicle Tag: {task.vehicleTag}</p>
        ) : (
          <p>EquipmentID: {task.equipmentID}</p>
        )}
      </div>
    ));
  };

  const getSoonestMaintenances = () => {
    return [...maintenanceData]
      .sort((a, b) => new Date(a.maintenanceDate) - new Date(b.maintenanceDate))
      .slice(0, 40);
  };

  const renderTotalUpcoming = () => {
    return <p>Total Upcoming Maintenances: {maintenanceData.length}</p>;
  };

  const calculateTotalCost = (maintenances) => {
    return maintenances.reduce(
      (total, maintenance) => total + parseFloat(maintenance.cost),
      0
    );
  };

  const renderSoonestMaintenancesTable = () => {
    const soonestMaintenances = getSoonestMaintenances();

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Vehicle/Equipment</th>
            <th>Description</th>
            <th>Date</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {soonestMaintenances.map((maintenance, index) => (
            <tr key={index}>
              <td>
                {maintenance.vehicleTag
                  ? maintenance.vehicleTag
                  : maintenance.equipmentID}
              </td>
              <td>{maintenance.maintenanceDescription}</td>
              <td>
                {new Date(maintenance.nextMaintenanceDate).toLocaleDateString()}
              </td>
              <td>${parseFloat(maintenance.cost).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total Cost:</td>
            <td>${calculateTotalCost(soonestMaintenances).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <div className="calendar-container">
        <h1> 90 Day Maintenance Outlook</h1>
        <Calendar
          onChange={setValue}
          value={value}
          tileContent={({ date, view }) =>
            view === "month" && renderMaintenanceTasks(date)
          }
        />
      </div>
      <div className="maintenance-summary">
        {renderTotalUpcoming()}
        {renderSoonestMaintenancesTable()}
      </div>
    </div>
  );
};

export default MaintenanceCalendar;
