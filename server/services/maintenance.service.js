import MaintenanceEquipment from "../models/maintenanceEquipment.model.js";
import MaintenanceVehicle from "../models/maintenanceVehicle.model.js";
import VechicleService from "./vehicle.service.js";
import EquipmentService from "./equipment.service.js";
import UserService from "./user.service.js";
import Papa from "papaparse";
import PDFDocument from "pdfkit";
import { Op } from "sequelize";

const MaintenanceService = {
  async createVehicleMaintenanceLog(maintenanceData) {
    try {
      const isReal = await VechicleService.vehicleVerification(
        maintenanceData.vehicleTag
      );
      if (isReal) {
        const maintenanceLog = await MaintenanceVehicle.create(maintenanceData);
        if (!maintenanceLog) {
          throw new Error("Maintenance Report could not be created");
        }
      } else {
        throw new Error("Vehicle does not exist please check tag input");
      }
    } catch (error) {
      throw error;
    }
  },

  async createEquipmentMaintenanceLog(maintenanceData) {
    try {
      const isReal = await EquipmentService.equipmentVerification(
        maintenanceData.equipmentID
      );
      if (isReal) {
        const maintenanceLog = await MaintenanceEquipment.create(
          maintenanceData
        );
        if (!maintenanceLog) {
          throw new Error("Maintenance Report could not be created");
        }
      } else {
        throw new Error("Equipment does not exist please check equipment ID");
      }
    } catch (error) {
      throw error;
    }
  },

  async getMaintenanceLogById(id) {
    try {
      const log = await Maintenance.findByPk(id);
      return log;
    } catch (error) {
      console.error("Error getMaintenanceLogById:", error);
      throw error;
    }
  },

  async getMaintenanceEquipmentByPage() {
    const limit = 25;
    try {
      const maintenanceLogs = await MaintenanceEquipment.findAll({
        order: [["createdAt", "DESC"]],
        limit: limit,
      });
      const strippedArray = maintenanceLogs.map((log) => log.dataValues);

      const logsWithAppendedName =
        await UserService.getUserNameFromIdAppendForms(strippedArray);

      return logsWithAppendedName;
    } catch (error) {
      throw error;
    }
  },

  async getMaintenanceVehicleByPage() {
    const limit = 25;
    try {
      const maintenanceLogs = await MaintenanceVehicle.findAll({
        order: [["createdAt", "DESC"]],
        limit: limit,
      });

      const logsWithAppendedVehicleInfo = await VechicleService.getVehicleInfo(
        maintenanceLogs
      );
      const logsWithAppendedName =
        await UserService.getUserNameFromIdAppendForms(
          logsWithAppendedVehicleInfo
        );
      return logsWithAppendedName;
    } catch (error) {
      throw error;
    }
  },

  async getRecentSpecifiedLogs(amount) {
    try {
      const recentLogs = await Maintenance.findAll({
        order: [["createdAt", "DESC"]],
        limit: amount,
      });
      return recentLogs;
    } catch (error) {
      throw error;
    }
  },

  async getNinetyDaysOutMaintenance() {
    const today = new Date();
    const thirtyDaysLater = new Date(today);
    thirtyDaysLater.setDate(thirtyDaysLater.getDate() + 90);
    try {
      const upcomingVehicleMaintenance = await MaintenanceVehicle.findAll({
        where: {
          nextMaintenanceDate: {
            [Op.between]: [today, thirtyDaysLater],
          },
        },
      });
      const upcomingEquipmentMaintenance = await MaintenanceEquipment.findAll({
        where: {
          nextMaintenanceDate: {
            [Op.between]: [today, thirtyDaysLater],
          },
        },
      });

      const combinedMaintenance = upcomingVehicleMaintenance.concat(
        upcomingEquipmentMaintenance
      );
      return combinedMaintenance;
    } catch (error) {
      console.error("Error in finding upcoming maintenance:", error);
      throw error;
    }
  },

  async getCSVFromSpecifiedDate() {
    const nestedReports = await this.getNinetyDaysOutMaintenance();
    const reports = nestedReports.map(
      (nestedReport) => nestedReport.dataValues
    );
    const csv = Papa.unparse(reports, {
      header: true,
    });
    return csv;
  },

  async getPDFFromSpecifiedDate() {
    try {
      const nestedReports = await this.getNinetyDaysOutMaintenance();

      const reports = nestedReports.map((report) => report.dataValues);

      // Create a new PDF document
      const doc = new PDFDocument();
      let buffers = [];
      doc.on("data", buffers.push.bind(buffers));

      // Add content to the PDF
      doc.fontSize(16).text("Maintenance reports", { underline: true });
      doc.moveDown();

      // Loop through reports and add vehicle information for each report
      reports.forEach((report) => {
        doc
          .fontSize(12)
          .text(`Maintenance Description: ${report.maintenanceDescription}`);
        doc.text(`Maintenance Date: ${report.maintenanceDate}`);
        doc.text(`Next Maintenance Date: ${report.nextMaintenanceDate}`);
        doc.text(`Next Maintenance Work: ${report.nextMaintenanceWork}`);
        doc.text(
          `Vehicle Tag: ${
            report.vehicleTag !== undefined ? report.vehicleTag : ""
          }`
        );
        doc.text(
          `Vehicle Information: ${
            report.vehicleInformation !== undefined
              ? report.vehicleInformation
              : ""
          }`
        );
        doc.text(
          `Equipment ID: ${
            report.equipmentID !== undefined ? report.equipmentID : ""
          }`
        );
        doc.text(`Cost: ${report.cost}`);
        doc.text(`Parts Replaced: ${report.partsReplaced}`);
        doc.text(`User Name: ${report.userName}`);
        doc.moveDown(); // Move to the next report
      });

      // Finalize the PDF and end the stream
      doc.end();

      return new Promise((resolve, reject) => {
        doc.on("end", () => resolve(Buffer.concat(buffers)));
        doc.on("error", reject);
      });
    } catch (error) {
      console.error("Error generating PDF report:", error);
      throw error;
    }
  },

  async updateMaintenanceLog(id, updateData) {
    try {
      await Maintenance.update(updateData, { where: { id: id } });
      return await this.getMaintenanceLogById(id);
    } catch (error) {
      console.error("Error updating recent Maintenance logs:", error);
      throw error;
    }
  },

  async deleteMaintenanceLog(id) {
    const log = await this.getMaintenanceLogById(id);
    if (!log) {
      throw new Error("Maintenance log not found");
    }
    await log.destroy();
  },
};

export default MaintenanceService;
