import React, { useState, Suspense } from "react";
import Sidebar from "../components/Sidebar.jsx";

const MaintenanceCalendar = React.lazy(() =>
  import("../components/Tables/Calander.jsx")
);
const GenerateReport = React.lazy(() =>
  import("../components/Tables/GenerateReport.jsx")
);
const ClassBCDL = React.lazy(() => import("../components/Forms/classBCDL.jsx"));
const VehicleDamageReport = React.lazy(() =>
  import("../components/Forms/VehicleDamageReport.jsx")
);
const EquipmentDamageReport = React.lazy(() =>
  import("../components/Forms/EquipmentDamageReport.jsx")
);
const Equipment = React.lazy(() => import("../components/Forms/Equipment.jsx"));
const LocalInspection = React.lazy(() =>
  import("../components/Forms/localInspection.jsx")
);
const Maintenance = React.lazy(() =>
  import("../components/Forms/Maintenance.jsx")
);
const Vehicle = React.lazy(() => import("../components/Forms/Vehicle.jsx"));

const LocalInspectionTable = React.lazy(() =>
  import("../components/Tables/LocalInspection.jsx")
);
const DamageReportEquipmentTable = React.lazy(() =>
  import("../components/Tables/DamageReportEquipment.jsx")
);
const DamageReportVehicleTable = React.lazy(() =>
  import("../components/Tables/DamageReportVehicle.jsx")
);
const EquipmentTable = React.lazy(() =>
  import("../components/Tables/Equipment.jsx")
);
const VehicleTable = React.lazy(() =>
  import("../components/Tables/Vehicle.jsx")
);
const ClassBCDLTable = React.lazy(() =>
  import("../components/Tables/ClassBCDL.jsx")
);

const EmployeesTable = React.lazy(() =>
  import("../components/Tables/Employees.jsx")
);

const MaintenanceReportTable = React.lazy(() =>
  import("../components/Tables/Maintenance.jsx")
);

const Dashboard = () => {
  // State to track the current selected component
  const [currentComponent, setCurrentComponent] = useState("ClassBCDL");

  // Function to change the current component, tied to menu item clicks
  const handleMenuClick = (componentName) => {
    setCurrentComponent(componentName);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "ClassBCDL":
        return <ClassBCDL />;
      case "GenerateReport":
        return <GenerateReport />;
      case "MaintenanceCalendar":
        return <MaintenanceCalendar />;
      case "VehicleDamageReport":
        return <VehicleDamageReport />;
      case "EquipmentDamageReport":
        return <EquipmentDamageReport />;
      case "Equipment":
        return <Equipment />;
      case "localInspection":
        return <LocalInspection />;
      case "Maintenance":
        return <Maintenance />;
      case "Vehicle":
        return <Vehicle />;
      case "ClassBCDLTable":
        return <ClassBCDLTable />;
      case "DamageReportVehicleTable":
        return <DamageReportVehicleTable />;
      case "DamageReportEquipmentTable":
        return <DamageReportEquipmentTable />;
      case "LocalInspectionTable":
        return <LocalInspectionTable />;
      case "EquipmentTable":
        return <EquipmentTable />;
      case "VehicleTable":
        return <VehicleTable />;
      case "EmployeesTable":
        return <EmployeesTable />;
      case "MaintenanceReportTable":
        return <MaintenanceReportTable />;
      default:
        return <ClassBCDL />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar onMenuClick={handleMenuClick} />
      <Suspense fallback={<div>Loading...</div>}>
        <main className="main-content">{renderComponent()}</main>
        {/* <MainContent>{renderComponent()}</MainContent> */}
      </Suspense>
    </div>
  );
};

export default Dashboard;
