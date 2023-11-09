// equipment.route.js
import express from "express";
import {
  createEquipment,
  getEquipmentById,
  getAllEquipment,
  getEquipmentByPage,
  updateEquipment,
  deleteEquipment,
} from "../controllers/equipment.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const equipmentRouter = express.Router();

// Define equipment routes and apply the token verification middleware
equipmentRouter.post("/", tokenManager.verifyAndRefreshToken, createEquipment);
equipmentRouter.get(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  getEquipmentById
);
equipmentRouter.get("/", tokenManager.verifyAndRefreshToken, getAllEquipment);
equipmentRouter.get(
  "/page/:page",
  tokenManager.verifyAndRefreshToken,
  getEquipmentByPage
);
equipmentRouter.put(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  updateEquipment
);
equipmentRouter.delete(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  deleteEquipment
);

export default equipmentRouter;
