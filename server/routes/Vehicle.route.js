import express from "express";
import tokenManager from "../middleware/TokenManager.js";
import { createVehicleInspection } from "../controllers/Vehicle.controller.js";

const router = express.Router();

router.post("/vehicle-inspection", tokenManager.verifyAndRefreshToken, createVehicleInspection);

export default router;