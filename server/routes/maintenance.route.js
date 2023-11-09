import express from "express";
import {
  createMaintenanceLog,
  getMaintenanceLogById,
  getMaintenanceByPage,
  getRecentSpecifiedLogs,
  updateMaintenanceLog,
  deleteMaintenanceLog,
} from "../controllers/maintenance.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const maintenanceRouter = express.Router();

// Define maintenance routes and apply the token verification middleware
maintenanceRouter.post(
  "/",
  tokenManager.verifyAndRefreshToken,
  createMaintenanceLog
);
maintenanceRouter.get(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  getMaintenanceLogById
);
maintenanceRouter.get(
  "/page/:page",
  tokenManager.verifyAndRefreshToken,
  getMaintenanceByPage
);
maintenanceRouter.get(
  "/recent/:amount",
  tokenManager.verifyAndRefreshToken,
  getRecentSpecifiedLogs
);
maintenanceRouter.put(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  updateMaintenanceLog
);
maintenanceRouter.delete(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  deleteMaintenanceLog
);

export default maintenanceRouter;
