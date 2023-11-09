// damageReport.route.js
import express from "express";
import DamageReportController from "../controllers/damageReport.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const damageReportRouter = express.Router();

// Define damage report routes and apply the token verification middleware
damageReportRouter.post(
  "/create",
  tokenManager.verifyAndRefreshToken,
  DamageReportController.createDamageReport
);
damageReportRouter.get(
  "/page/:pageNumber",
  tokenManager.verifyAndRefreshToken,
  DamageReportController.getDamageReportByPage
);
damageReportRouter.get(
  "/getreportbyid/:id",
  tokenManager.verifyAndRefreshToken,
  DamageReportController.getDamageReportById
);
damageReportRouter.put(
  "/updatereportbyid/:id",
  tokenManager.verifyAndRefreshToken,
  DamageReportController.updateDamageReportById
);
damageReportRouter.delete(
  "/deletereportbyid/:id",
  tokenManager.verifyAndRefreshToken,
  DamageReportController.deleteDamageReport
);

export default damageReportRouter;
