// damageReport.route.js
import express from "express";
import DamageReportController from "../controllers/damageReport.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import AdminVerification from "../middleware/AdminVerification.js";

const damageReportRouter = express.Router();

damageReportRouter
  .route("/")
  .get(
    isAuthenticated,
    AdminVerification,
    DamageReportController.getTwentyRecentDamageReport
  );
damageReportRouter
  .route("/vehicle/")
  .get(
    isAuthenticated,
    AdminVerification,
    DamageReportController.getVehicleDamageReports
  )
  .post(isAuthenticated, DamageReportController.createVehicleDamageReport);

damageReportRouter
  .route("/equipment/")
  .get(
    isAuthenticated,
    AdminVerification,
    DamageReportController.getEquipmentDamageReports
  )
  .post(isAuthenticated, DamageReportController.createEquipmentDamageReport);

damageReportRouter
  .route("/vehicle/csv")
  .get(
    isAuthenticated,
    AdminVerification,
    DamageReportController.getVehicleCSV
  );
damageReportRouter
  .route("/equipment/csv")
  .get(
    isAuthenticated,
    AdminVerification,
    DamageReportController.getEquipmentCSV
  );

damageReportRouter
  .route("/vehicle/pdf")
  .get(
    isAuthenticated,
    AdminVerification,
    DamageReportController.getVehiclePDF
  );
damageReportRouter
  .route("/equipment/pdf")
  .get(
    isAuthenticated,
    AdminVerification,
    DamageReportController.getEquipmentPDF
  );

damageReportRouter.get(
  "/get/:id",
  isAuthenticated,
  AdminVerification,
  DamageReportController.getDamageReportById
);
damageReportRouter.put(
  "/update/:id",
  isAuthenticated,
  AdminVerification,
  DamageReportController.updateDamageReportById
);
damageReportRouter.delete(
  "/delete/equipment/:id",
  isAuthenticated,
  AdminVerification,
  DamageReportController.deleteDamageReport
);
damageReportRouter.delete(
  "/delete/vehicle/:id",
  isAuthenticated,
  AdminVerification,
  DamageReportController.deleteDamageReport
);

export default damageReportRouter;
