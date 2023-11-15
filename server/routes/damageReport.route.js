// damageReport.route.js
import express from "express";
import DamageReportController from "../controllers/damageReport.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const damageReportRouter = express.Router();

// Define damage report routes and apply the token verification middleware
damageReportRouter
  .route("/")
  .get(isAuthenticated, DamageReportController.getDamageReportByPage)
  .post(isAuthenticated, DamageReportController.createDamageReport);
damageReportRouter.get(
  "/page/:pageNumber",
  isAuthenticated,
  DamageReportController.getDamageReportByPage
);
damageReportRouter.get(
  "/getreportbyid/:id",
  isAuthenticated,
  DamageReportController.getDamageReportById
);
damageReportRouter.put(
  "/updatereportbyid/:id",
  isAuthenticated,
  DamageReportController.updateDamageReportById
);
damageReportRouter.delete(
  "/deletereportbyid/:id",
  isAuthenticated,
  DamageReportController.deleteDamageReport
);

export default damageReportRouter;
