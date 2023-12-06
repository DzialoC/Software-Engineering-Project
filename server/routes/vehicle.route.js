import express from "express";
import VehicleController from "../controllers/vehicle.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import AdminVerification from "../middleware/AdminVerification.js";

const vehicleRouter = express.Router();
// /vehicle/
// Define vehicle routes and apply the token verification middleware
vehicleRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  AdminVerification,
  VehicleController.getVehicleById
);
vehicleRouter
  .route("/")
  .get(isAuthenticated, AdminVerification, VehicleController.getAllVehicles)
  .post(isAuthenticated, VehicleController.createVehicle);

vehicleRouter
  .route("/csv")
  .get(
    isAuthenticated,
    AdminVerification,
    VehicleController.getCSVFromSpecifiedDate
  );

vehicleRouter
  .route("/pdf")
  .get(
    isAuthenticated,
    AdminVerification,
    VehicleController.getPDFFromSpecifiedDate
  );

vehicleRouter.put(
  "/update/:id",
  isAuthenticated,
  AdminVerification,
  VehicleController.updateVehicleById
);
vehicleRouter.delete(
  "/delete/:id",
  isAuthenticated,
  AdminVerification,
  VehicleController.deleteVehicleById
);

export default vehicleRouter;
