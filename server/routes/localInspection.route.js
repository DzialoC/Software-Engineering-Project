// localInspection.route.js
import express from "express";
import localInspectionController from "../controllers/localInspection.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import AdminVerification from "../middleware/AdminVerification.js";

const localInspectionRouter = express.Router();

// Define local inspection routes and apply the token verification middleware
localInspectionRouter
  .route("/")
  .get(
    isAuthenticated,
    AdminVerification,
    localInspectionController.getRecentSpecifiedLogs
  )
  .post(isAuthenticated, localInspectionController.createLocalInspection);
localInspectionRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  AdminVerification,
  localInspectionController.getLocalInspectionById
);
localInspectionRouter.get(
  "/page/:page",
  isAuthenticated,
  AdminVerification,
  localInspectionController.getLocalInspectionByPage
);
localInspectionRouter.get(
  "/recent/:amount",
  isAuthenticated,
  AdminVerification,
  localInspectionController.getRecentSpecifiedLogs
);
localInspectionRouter.put(
  "/update/:id",
  isAuthenticated,
  AdminVerification,
  localInspectionController.updateSpecifiedLog
);
localInspectionRouter.delete(
  "/delete/:id",
  isAuthenticated,
  AdminVerification,
  localInspectionController.deleteSpecifiedLog
);

export default localInspectionRouter;
