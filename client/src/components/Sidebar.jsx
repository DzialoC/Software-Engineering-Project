import React, { useState } from "react";
import CollapsibleMenu from "./CollapsibleMenu";

const Sidebar = ({ onMenuClick }) => {
  const [sidebarMinimized, setSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setSidebarMinimized((prev) => !prev);
  };

  return (
    <div className={`sidebar ${sidebarMinimized ? "minimized" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {sidebarMinimized ? "Expand" : "Minimize"}
      </button>
      <div className="content">
        <CollapsibleMenu title="Report Forms" onMenuClick={onMenuClick}>
          <div onClick={() => onMenuClick("localInspection")}>
            - Local Inspection
          </div>
          <div onClick={() => onMenuClick("Vehicle")}>- New Vehicle</div>
          <div onClick={() => onMenuClick("Equipment")}>- New Equipment</div>
          <div onClick={() => onMenuClick("ClassBCDL")}>- Class B CDL</div>
          <div onClick={() => onMenuClick("DamageReport")}>- Damage Report</div>
          <div onClick={() => onMenuClick("Maintenance")}>- Maintenance</div>
        </CollapsibleMenu>
        <CollapsibleMenu title="Overview" onMenuClick={onMenuClick}>
          <div onClick={() => onMenuClick("LocalInspectionTable")}>
            - Local Inspections
          </div>
          <div onClick={() => onMenuClick("VehicleTable")}>- Vehicles</div>
          <div onClick={() => onMenuClick("EquipmentTable")}>- Equipment</div>
          <div onClick={() => onMenuClick("ClassBCDLTable")}>- Class B CDL</div>
          <div onClick={() => onMenuClick("EmployeesTable")}>- Employees</div>
          <div onClick={() => onMenuClick("DamageReportTable")}>
            - Damage Reports
          </div>
          <div onClick={() => onMenuClick("MaintenanceReportTable")}>
            - Maintenance
          </div>
        </CollapsibleMenu>
      </div>
    </div>
  );
};

export default Sidebar;
