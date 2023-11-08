import express from "express";
import tokenManager from "../middleware/TokenManager.js";
import { CreateLocalInspection } from "../controllers/vehicleInspection.controller.js";

const router = express.Router();

router.post("/vehicle-inspection", CreateLocalInspection);


export default router;