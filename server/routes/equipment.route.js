// equipment.route.js
import express from "express";
import EquipmentController from "../controllers/equipment.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const equipmentRouter = express.Router();

// Define equipment routes and apply the token verification middleware
equipmentRouter
  .route("/")
  .get(isAuthenticated, EquipmentController.getAllEquipment)
  .post(isAuthenticated, EquipmentController.createEquipment);
equipmentRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  EquipmentController.getEquipmentById
);
equipmentRouter.get(
  "/page/:page",
  isAuthenticated,
  EquipmentController.getEquipmentByPage
);
equipmentRouter.put(
  "/update/:id",
  isAuthenticated,
  EquipmentController.updateEquipment
);
equipmentRouter.delete(
  "/delete/:id",
  isAuthenticated,
  EquipmentController.deleteEquipment
);

export default equipmentRouter;
