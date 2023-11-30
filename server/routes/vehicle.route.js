import express from "express";
import VehicleController from "../controllers/vehicle.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const vehicleRouter = express.Router();
// /vehicle/
// Define vehicle routes and apply the token verification middleware
vehicleRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  VehicleController.getVehicleById
);
vehicleRouter
  .route("/")
  .get(isAuthenticated, VehicleController.getAllVehicles)
  .post(isAuthenticated, VehicleController.createVehicle);
vehicleRouter.put(
  "/update/:id",
  isAuthenticated,
  VehicleController.updateVehicleById
);
vehicleRouter.delete(
  "/delete/:id",
  isAuthenticated,
  VehicleController.deleteVehicleById
);

export default vehicleRouter;
