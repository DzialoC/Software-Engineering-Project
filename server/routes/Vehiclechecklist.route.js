import express from "express";
import tokenManager from "../middleware/TokenManager.js";
import { createVehicleChecklist } from "../controllers/Vehiclechecklist.controller.js";

const router = express.Router();

router.post("/vehicle-inspection", tokenManager.verifyAndRefreshToken, createVehicleChecklist);

export default router;