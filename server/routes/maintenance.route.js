import express from "express";
import MaintenanceController from "../controllers/maintenance.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import AdminVerification from "../middleware/AdminVerification.js";

const maintenanceRouter = express.Router();

// Define maintenance routes and apply the token verification middleware
maintenanceRouter
  .route("/")
  .get(
    isAuthenticated,
    AdminVerification,
    MaintenanceController.getMaintenanceByPage
  )
  .post(isAuthenticated, MaintenanceController.createMaintenanceLog);

maintenanceRouter.get(
  "/upcoming/",
  isAuthenticated,
  AdminVerification,
  MaintenanceController.getNinetyDaysOutMaintenance
);
maintenanceRouter
  .route("/upcoming/csv")
  .get(
    isAuthenticated,
    AdminVerification,
    MaintenanceController.getCSVFromSpecifiedDate
  );

maintenanceRouter
  .route("/upcoming/pdf")
  .get(
    isAuthenticated,
    AdminVerification,
    MaintenanceController.getPDFFromSpecifiedDate
  );

maintenanceRouter.get(
  "/upcoming/",
  isAuthenticated,
  MaintenanceController.getNinetyDaysOutMaintenance
);
maintenanceRouter.get(
  "/page/:page",
  isAuthenticated,
  AdminVerification,
  MaintenanceController.getMaintenanceByPage
);
maintenanceRouter.get(
  "/recent/:amount",
  isAuthenticated,
  AdminVerification,
  MaintenanceController.getRecentSpecifiedLogs
);
maintenanceRouter.put(
  "/updatebyid/:id",
  isAuthenticated,
  AdminVerification,
  MaintenanceController.updateMaintenanceLog
);
maintenanceRouter.delete(
  "/deletebyid/:id",
  isAuthenticated,
  AdminVerification,
  MaintenanceController.deleteMaintenanceLog
);

export default maintenanceRouter;
