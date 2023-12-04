import express from "express";
import userRoutes from "./user.route.js";
import damageReportRoutes from "./damageReport.route.js";
import classBCDLRoutes from "./classBCDL.route.js";
import equipmentRoutes from "./equipment.route.js";
import localInspectionRoutes from "./localInspection.route.js";
import maintenanceRoutes from "./maintenance.route.js";
import vehicleRoutes from "./vehicle.route.js"; // Import the vehicle routes

const router = express.Router();

// Use the routes for different parts of the application
// router.use()
router.use("/", userRoutes);
router.use("/damage-reports", damageReportRoutes);
router.use("/class-bcdl", classBCDLRoutes);
router.use("/equipment", equipmentRoutes);
router.use("/local-inspections", localInspectionRoutes);
router.use("/maintenance", maintenanceRoutes);
router.use("/vehicles", vehicleRoutes); // Mount the vehicle routes on the '/vehicles' path

export default router;
