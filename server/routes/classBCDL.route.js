// classBCDL.route.js
import express from "express";
import ClassBCDLController from "../controllers/classBCDL.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import AdminVerification from "../middleware/AdminVerification.js";

const classBCDLRouter = express.Router();

// Define classBCDL routes and apply the token verification middleware
classBCDLRouter
  .route("/")
  .get(isAuthenticated, AdminVerification, ClassBCDLController.getAllClassBCDL)
  .post(isAuthenticated, ClassBCDLController.createClassBCDL);

classBCDLRouter
  .route("/csv")
  .get(
    isAuthenticated,
    AdminVerification,
    ClassBCDLController.getCSVFromSpecifiedDate
  );

classBCDLRouter
  .route("/pdf")
  .get(
    isAuthenticated,
    AdminVerification,
    ClassBCDLController.getPDFFromSpecifiedDate
  );

classBCDLRouter.get(
  "/id/:id",
  isAuthenticated,
  AdminVerification,
  ClassBCDLController.getClassBCDLById
);
classBCDLRouter.get(
  "/page/:page",
  isAuthenticated,
  AdminVerification,
  ClassBCDLController.getClassCDLByPage
);
classBCDLRouter.get(
  "/amount/:amount",
  isAuthenticated,
  AdminVerification,
  ClassBCDLController.getRecentAmountClassBForms
);
classBCDLRouter.put(
  "/updatebyid/:id",
  isAuthenticated,
  AdminVerification,
  ClassBCDLController.updateSpecified
);
classBCDLRouter.delete(
  "/delete/:id",
  isAuthenticated,
  AdminVerification,
  ClassBCDLController.deleteClassBForm
);

export default classBCDLRouter;
