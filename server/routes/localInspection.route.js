// localInspection.route.js
import express from "express";
import localInspectionController from "../controllers/localInspection.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const localInspectionRouter = express.Router();

// Define local inspection routes and apply the token verification middleware
localInspectionRouter.post(
  "/create",
  isAuthenticated,
  localInspectionController.createLocalInspection
);
localInspectionRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  localInspectionController.getLocalInspectionById
);
localInspectionRouter.get(
  "/page/:page",
  isAuthenticated,
  localInspectionController.getLocalInspectionByPage
);
localInspectionRouter.get(
  "/recent/:amount",
  isAuthenticated,
  localInspectionController.getRecentSpecifiedLogs
);
localInspectionRouter.put(
  "updatelogbyid/:id",
  isAuthenticated,
  localInspectionController.updateSpecifiedLog
);
localInspectionRouter.delete(
  "deletelogbyid/:id",
  isAuthenticated,
  localInspectionController.deleteSpecifiedLog
);

export default localInspectionRouter;
