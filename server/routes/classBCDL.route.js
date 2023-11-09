// classBCDL.route.js
import express from "express";
import ClassBCDLController from "../controllers/classBCDL.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const classBCDLRouter = express.Router();

// Define classBCDL routes and apply the token verification middleware
classBCDLRouter.post(
  "/create",
  isAuthenticated,
  ClassBCDLController.createClassBCDL
);
classBCDLRouter.get(
  "/getbyid/:id",
  isAuthenticated,
  ClassBCDLController.getClassBCDLById
);
classBCDLRouter.get(
  "/page/:page",
  isAuthenticated,
  ClassBCDLController.getClassCDLByPage
);
classBCDLRouter.get(
  "/amount/:amount",
  isAuthenticated,
  ClassBCDLController.getRecentAmountClassBForms
);
classBCDLRouter.put(
  "/updatebyid/:id",
  isAuthenticated,
  ClassBCDLController.updateSpecified
);
classBCDLRouter.delete(
  "/deletebyid/:id",
  isAuthenticated,
  ClassBCDLController.deleteClassBForm
);

export default classBCDLRouter;
