import express from "express";
import VehicleController from "../controllers/vehicle.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const vehicleRouter = express.Router();

// Define vehicle routes and apply the token verification middleware
vehicleRouter.post(
  "/create",
  tokenManager.verifyAndRefreshToken,
  VehicleController.createVehicle
);
vehicleRouter.get(
  "/getbyid/:id",
  tokenManager.verifyAndRefreshToken,
  VehicleController.getVehicleById
);
vehicleRouter.get(
  "/getall",
  tokenManager.verifyAndRefreshToken,
  VehicleController.getAllVehicles
);
vehicleRouter.put(
  "/updatebyid/:id",
  tokenManager.verifyAndRefreshToken,
  VehicleController.updateVehicleById
);
vehicleRouter.delete(
  "/deletebyid/:id",
  tokenManager.verifyAndRefreshToken,
  VehicleController.deleteVehicleById
);

export default vehicleRouter;
