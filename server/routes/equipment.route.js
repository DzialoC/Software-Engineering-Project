// equipment.route.js
import express from "express";
import EquipmentController from "../controllers/equipment.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const equipmentRouter = express.Router();

// Define equipment routes and apply the token verification middleware
equipmentRouter.post(
  "/create",
  tokenManager.verifyAndRefreshToken,
  EquipmentController.createEquipment
);
equipmentRouter.get(
  "/getbyid/:id",
  tokenManager.verifyAndRefreshToken,
  EquipmentController.getEquipmentById
);
equipmentRouter.get(
  "/getallequipment/",
  tokenManager.verifyAndRefreshToken,
  EquipmentController.getAllEquipment
);
equipmentRouter.get(
  "/page/:page",
  tokenManager.verifyAndRefreshToken,
  EquipmentController.getEquipmentByPage
);
equipmentRouter.put(
  "/updateequipment/:id",
  tokenManager.verifyAndRefreshToken,
  EquipmentController.updateEquipment
);
equipmentRouter.delete(
  "/deletebyid/:id",
  tokenManager.verifyAndRefreshToken,
  EquipmentController.deleteEquipment
);

export default equipmentRouter;
