import express from "express";
import MaintenanceController from "../controllers/maintenance.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const maintenanceRouter = express.Router();

// Define maintenance routes and apply the token verification middleware
maintenanceRouter.post(
  "/create",
  tokenManager.verifyAndRefreshToken,
  MaintenanceController.createMaintenanceLog
);
maintenanceRouter.get(
  "/getbyid/:id",
  tokenManager.verifyAndRefreshToken,
  MaintenanceController.getMaintenanceLogById
);
maintenanceRouter.get(
  "/page/:page",
  tokenManager.verifyAndRefreshToken,
  MaintenanceController.getMaintenanceByPage
);
maintenanceRouter.get(
  "/recent/:amount",
  tokenManager.verifyAndRefreshToken,
  MaintenanceController.getRecentSpecifiedLogs
);
maintenanceRouter.put(
  "/updatebyid/:id",
  tokenManager.verifyAndRefreshToken,
  MaintenanceController.updateMaintenanceLog
);
maintenanceRouter.delete(
  "/deletebyid/:id",
  tokenManager.verifyAndRefreshToken,
  MaintenanceController.deleteMaintenanceLog
);

export default maintenanceRouter;
