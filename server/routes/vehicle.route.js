import express from "express";
import {
  createVehicle,
  getVehicleById,
  getAllVehicles,
  updateVehicleById,
  deleteVehicleById,
} from "../controllers/vehicle.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const vehicleRouter = express.Router();

// Define vehicle routes and apply the token verification middleware
vehicleRouter.post("/", tokenManager.verifyAndRefreshToken, createVehicle);
vehicleRouter.get("/:id", tokenManager.verifyAndRefreshToken, getVehicleById);
vehicleRouter.get("/", tokenManager.verifyAndRefreshToken, getAllVehicles);
vehicleRouter.put(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  updateVehicleById
);
vehicleRouter.delete(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  deleteVehicleById
);

export default vehicleRouter;
