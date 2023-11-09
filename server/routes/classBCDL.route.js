// classBCDL.route.js
import express from "express";
import ClassBCDLController from "../controllers/classBCDL.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const classBCDLRouter = express.Router();

// Define classBCDL routes and apply the token verification middleware
classBCDLRouter.post(
  "/create",
  tokenManager.verifyAndRefreshToken,
  ClassBCDLController.createClassBCDL
);
classBCDLRouter.get(
  "/getbyid/:id",
  tokenManager.verifyAndRefreshToken,
  ClassBCDLController.getClassBCDLById
);
classBCDLRouter.get(
  "/page/:page",
  tokenManager.verifyAndRefreshToken,
  ClassBCDLController.getClassCDLByPage
);
classBCDLRouter.get(
  "/amount/:amount",
  tokenManager.verifyAndRefreshToken,
  ClassBCDLController.getRecentAmountClassBForms
);
classBCDLRouter.put(
  "/updatebyid/:id",
  tokenManager.verifyAndRefreshToken,
  ClassBCDLController.updateSpecified
);
classBCDLRouter.delete(
  "/deletebyid/:id",
  tokenManager.verifyAndRefreshToken,
  ClassBCDLController.deleteClassBForm
);

export default classBCDLRouter;
