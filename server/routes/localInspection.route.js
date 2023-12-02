// localInspection.route.js
import express from "express";
import localInspectionController from "../controllers/localInspection.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const localInspectionRouter = express.Router();

// Define local inspection routes and apply the token verification middleware
localInspectionRouter
  .route("/")
  .get(isAuthenticated, localInspectionController.getRecentSpecifiedLogs)
  .post(isAuthenticated, localInspectionController.createLocalInspection);
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
  "/update/:id",
  isAuthenticated,
  localInspectionController.updateSpecifiedLog
);
localInspectionRouter.delete(
  "/delete/:id",
  isAuthenticated,
  localInspectionController.deleteSpecifiedLog
);

export default localInspectionRouter;
