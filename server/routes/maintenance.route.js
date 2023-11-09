import express from "express";
import MaintenanceController from "../controllers/maintenance.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const maintenanceRouter = express.Router();

// Define maintenance routes and apply the token verification middleware
maintenanceRouter.post(
  "/create",
  isAuthenticated,
  MaintenanceController.createMaintenanceLog
);
maintenanceRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  MaintenanceController.getMaintenanceLogById
);
maintenanceRouter.get(
  "/page/:page",
  isAuthenticated,
  MaintenanceController.getMaintenanceByPage
);
maintenanceRouter.get(
  "/recent/:amount",
  isAuthenticated,
  MaintenanceController.getRecentSpecifiedLogs
);
maintenanceRouter.put(
  "/updatebyid/:id",
  isAuthenticated,
  MaintenanceController.updateMaintenanceLog
);
maintenanceRouter.delete(
  "/deletebyid/:id",
  isAuthenticated,
  MaintenanceController.deleteMaintenanceLog
);

export default maintenanceRouter;
