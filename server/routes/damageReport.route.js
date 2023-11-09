// damageReport.route.js
import express from "express";
import {
  CreateDamageReport,
  GetAllDamageReports,
  GetDamageReport,
  UpdateDamageReport,
  DeleteDamageReport,
} from "../controllers/damageReport.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const damageReportRouter = express.Router();

// Define damage report routes and apply the token verification middleware
damageReportRouter.post(
  "/",
  tokenManager.verifyAndRefreshToken,
  CreateDamageReport
);
damageReportRouter.get(
  "/",
  tokenManager.verifyAndRefreshToken,
  GetAllDamageReports
);
damageReportRouter.get(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  GetDamageReport
);
damageReportRouter.put(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  UpdateDamageReport
);
damageReportRouter.delete(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  DeleteDamageReport
);

export default damageReportRouter;
