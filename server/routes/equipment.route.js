// equipment.route.js
import express from "express";
import EquipmentController from "../controllers/equipment.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const equipmentRouter = express.Router();

// Define equipment routes and apply the token verification middleware
equipmentRouter.post(
  "/create",
  isAuthenticated,
  EquipmentController.createEquipment
);
equipmentRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  EquipmentController.getEquipmentById
);
equipmentRouter.get(
  "/getallequipment/",
  isAuthenticated,
  EquipmentController.getAllEquipment
);
equipmentRouter.get(
  "/page/:page",
  isAuthenticated,
  EquipmentController.getEquipmentByPage
);
equipmentRouter.put(
  "/updateequipment/:id",
  isAuthenticated,
  EquipmentController.updateEquipment
);
equipmentRouter.delete(
  "/deletebyid/:id",
  isAuthenticated,
  EquipmentController.deleteEquipment
);

export default equipmentRouter;
