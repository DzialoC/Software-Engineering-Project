import React, { useState, Suspense } from "react";
import Sidebar from "../components/Sidebar.jsx";
// import "./App1.css";

const ClassBCDL = React.lazy(() => import("../components/Forms/classBCDL.jsx"));
const DamageReport = React.lazy(() =>
  import("../components/Forms/DamageReport.jsx")
);
const Equipment = React.lazy(() => import("../components/Forms/Equipment.jsx"));
const LocalInspection = React.lazy(() =>
  import("../components/Forms/localInspection.jsx")
);
const Maintenance = React.lazy(() =>
  import("../components/Forms/Maintenance.jsx")
);
const Vehicle = React.lazy(() => import("../components/Forms/Vehicle.jsx"));

const LocalInsepctionTable = React.lazy(() =>
  import("../components/Tables/LocalInsepction.jsx")
);
const DamageReportTable = React.lazy(() =>
  import("../components/Tables/DamageReport.jsx")
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
      case "DamageReport":
        return <DamageReport />;
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
      case "DamageReportTable":
        return <DamageReportTable />;
      case "LocalInsepctionTable":
        return <LocalInsepctionTable />;
      case "EquipmentTable":
        return <EquipmentTable />;
      case "VehicleTable":
        return <VehicleTable />;
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
