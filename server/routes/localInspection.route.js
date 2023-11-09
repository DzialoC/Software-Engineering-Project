// localInspection.route.js
import express from "express";
import {
  createLocalInspection,
  getLocalInspectionById,
  getLocalInspectionByPage,
  getRecentSpecifiedLogs,
  updateSpecifiedLog,
  deleteSpecifiedLog,
} from "../controllers/localInspection.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const localInspectionRouter = express.Router();

// Define local inspection routes and apply the token verification middleware
localInspectionRouter.post(
  "/",
  tokenManager.verifyAndRefreshToken,
  createLocalInspection
);
localInspectionRouter.get(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  getLocalInspectionById
);
localInspectionRouter.get(
  "/page/:page",
  tokenManager.verifyAndRefreshToken,
  getLocalInspectionByPage
);
localInspectionRouter.get(
  "/recent/:amount",
  tokenManager.verifyAndRefreshToken,
  getRecentSpecifiedLogs
);
localInspectionRouter.put(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  updateSpecifiedLog
);
localInspectionRouter.delete(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  deleteSpecifiedLog
);

export default localInspectionRouter;
