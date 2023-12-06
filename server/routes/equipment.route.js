// equipment.route.js
import express from "express";
import EquipmentController from "../controllers/equipment.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import AdminVerification from "../middleware/AdminVerification.js";

const equipmentRouter = express.Router();

// Define equipment routes and apply the token verification middleware
equipmentRouter
  .route("/")
  .get(isAuthenticated, AdminVerification, EquipmentController.getAllEquipment)
  .post(isAuthenticated, EquipmentController.createEquipment);

equipmentRouter
  .route("/csv")
  .get(
    isAuthenticated,
    AdminVerification,
    EquipmentController.getCSVFromSpecifiedDate
  );

equipmentRouter
  .route("/pdf")
  .get(
    isAuthenticated,
    AdminVerification,
    EquipmentController.getPDFFromSpecifiedDate
  );

equipmentRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  AdminVerification,
  EquipmentController.getEquipmentById
);
equipmentRouter.get(
  "/page/:page",
  isAuthenticated,
  AdminVerification,
  EquipmentController.getEquipmentByPage
);
equipmentRouter.put(
  "/update/:id",
  isAuthenticated,
  AdminVerification,
  EquipmentController.updateEquipment
);
equipmentRouter.delete(
  "/delete/:id",
  isAuthenticated,
  AdminVerification,
  EquipmentController.deleteEquipment
);

export default equipmentRouter;
