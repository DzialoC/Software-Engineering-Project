// Sidebar.jsx
// import "./Sidebar.css";
import React, { useState } from "react";
import CollapsibleMenu from "./CollapsibleMenu";

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <CollapsibleMenu title="Report Forms" onMenuClick={onMenuClick}>
        <div onClick={() => onMenuClick("localInspection")}>
          - Local Inspection
        </div>
        <div onClick={() => onMenuClick("Vehicle")}>- New Vehicle</div>
        <div onClick={() => onMenuClick("Equipment")}>- New Equipment</div>
        <div onClick={() => onMenuClick("ClassBCDL")}>- Class B CDL</div>
        <div onClick={() => onMenuClick("DamageReport")}>- Damage Report</div>
      </CollapsibleMenu>
      <CollapsibleMenu title="Overview" onMenuClick={onMenuClick}>
        <div onClick={() => onMenuClick("LocalInsepctionTable")}>
          - Local Insepctions
        </div>
        <div onClick={() => onMenuClick("VehicleTable")}>- Vehicles</div>
        <div onClick={() => onMenuClick("EquipmentTable")}>- Equipment</div>
        <div onClick={() => onMenuClick("ClassBCDLTable")}>- Class B CDL</div>
        <div onClick={() => onMenuClick("EmployeesTable")}>- Employees</div>
        <div onClick={() => onMenuClick("DamageReportTable")}>
          - Damage Reports
        </div>
      </CollapsibleMenu>
    </div>
  );
};

export default Sidebar;
