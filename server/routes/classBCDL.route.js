// classBCDL.route.js
import express from "express";
import {
  createClassBCDL,
  getClassBCDLById,
  getClassCDLByPage,
  getRecentSpecifiedClassBForms,
  updateSpecified,
  deleteClassBForm,
} from "../controllers/classBCDL.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const classBCDLRouter = express.Router();

// Define classBCDL routes and apply the token verification middleware
classBCDLRouter.post("/", tokenManager.verifyAndRefreshToken, createClassBCDL);
classBCDLRouter.get(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  getClassBCDLById
);
classBCDLRouter.get(
  "/page/:page",
  tokenManager.verifyAndRefreshToken,
  getClassCDLByPage
);
classBCDLRouter.get(
  "/recent",
  tokenManager.verifyAndRefreshToken,
  getRecentSpecifiedClassBForms
);
classBCDLRouter.put(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  updateSpecified
);
classBCDLRouter.delete(
  "/:id",
  tokenManager.verifyAndRefreshToken,
  deleteClassBForm
);

export default classBCDLRouter;
