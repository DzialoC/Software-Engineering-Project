// localInspection.route.js
import express from "express";
import localInspectionController from "../controllers/localInspection.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const localInspectionRouter = express.Router();

// Define local inspection routes and apply the token verification middleware
localInspectionRouter.post(
  "/create",
  tokenManager.verifyAndRefreshToken,
  localInspectionController.createLocalInspection
);
localInspectionRouter.get(
  "/getbyid/:id",
  tokenManager.verifyAndRefreshToken,
  localInspectionController.getLocalInspectionById
);
localInspectionRouter.get(
  "/page/:page",
  tokenManager.verifyAndRefreshToken,
  localInspectionController.getLocalInspectionByPage
);
localInspectionRouter.get(
  "/recent/:amount",
  tokenManager.verifyAndRefreshToken,
  localInspectionController.getRecentSpecifiedLogs
);
localInspectionRouter.put(
  "updatelogbyid/:id",
  tokenManager.verifyAndRefreshToken,
  localInspectionController.updateSpecifiedLog
);
localInspectionRouter.delete(
  "deletelogbyid/:id",
  tokenManager.verifyAndRefreshToken,
  localInspectionController.deleteSpecifiedLog
);

export default localInspectionRouter;
