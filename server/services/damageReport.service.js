import DamageReportEquipment from "../models/damageReportEquipment.model.js";
import DamageReportVehicle from "../models/damageReportVehicle.model.js";
import VechicleService from "./vehicle.service.js";
import UserService from "./user.service.js";
import Papa from "papaparse";
import PDFDocument from "pdfkit";

const DamageReportService = {
  async createVehicleDamageReport(damageData) {
    try {
      const damageReport = await DamageReportVehicle.create(damageData);
      if (!damageReport) {
        throw new Error("Damage Report could not be created");
      }
      return true;
    } catch (error) {
      throw error;
    }
  },

  async createEquipmentDamageReport(damageData) {
    try {
      const damageReport = await DamageReportEquipment.create(damageData);
      if (!damageReport) {
        throw new Error("Damage Report could not be created");
      }
      return true;
    } catch (error) {
      throw error;
    }
  },

  async getVehicleReports() {
    const reports = await DamageReportVehicle.findAll();
    const updatedReport = await VechicleService.getVehicleInfo(reports);
    const finalReport = await UserService.getUserNameFromIdAppendForms(
      updatedReport
    );
    return finalReport;
  },

  async getEquipmentReports() {
    const reports = await DamageReportEquipment.findAll();
    const parsedReports = reports.map((report) => report.dataValues);
    const finalReport = await UserService.getUserNameFromIdAppendForms(
      parsedReports
    );
    return finalReport;
  },

  async getDamageReportById(id) {
    const report = await DamageReport.findByPk(id);
    if (!report) {
      throw new Error("Damage Report not found");
    }
    return report;
  },

  async getTwentyRecentDamageReport() {
    const reports = await DamageReport.findAll({
      order: [["createdAt", "DESC"]],
      limit: 20,
    });
    return reports;
  },

  async getDamageReportByPage(pageNumber) {
    const limit = 20;
    const offset = (pageNumber - 1) * limit;
    const reports = await DamageReport.findAll({
      order: [["createdAt", "DESC"]],
      limit: limit,
      offset: offset,
    });
    return reports;
  },

  async getRecentSpecifiedDamageReports(amount) {
    const recentLogs = await DamageReport.findAll({
      order: [["createdAt", "DESC"]],
      limit: amount,
    });
    return recentLogs;
  },

  async getVehicleCSV() {
    const vehicles = await DamageReportVehicle.findAll();
    const reports = vehicles.map((vehicle) => vehicle.dataValues);
    const csv = Papa.unparse(reports, {
      header: true,
    });
    return csv;
  },

  async getVehiclePDF() {
    try {
      // Fetch vehicles from the database within the specified date range
      const vehicles = await DamageReportVehicle.findAll();

      // Create a new PDF document
      const doc = new PDFDocument();
      let buffers = [];
      doc.on("data", buffers.push.bind(buffers));

      // Add content to the PDF
      doc.fontSize(16).text(`Vehicle Report:`, {
        underline: true,
      });
      doc.moveDown();

      vehicles.forEach((vehicle) => {
        doc.fontSize(12).text(`Report ID: ${vehicle.reportID}`);
        doc.text(`Description: ${vehicle.description}`);
        doc.text(`User ID: ${vehicle.userID || "N/A"}`);
        doc.text(`Vehicle Tag: ${vehicle.vehicleTag || "N/A"}`);
        doc.text(`Report Date: ${vehicle.reportDate}`);
        doc.text(`Negligent: ${vehicle.negligent ? "Yes" : "No"}`);
        doc.moveDown();
      });

      doc.end();

      // Return a Promise that resolves with the PDF buffer
      return new Promise((resolve, reject) => {
        doc.on("end", () => resolve(Buffer.concat(buffers)));
        doc.on("error", reject);
      });
    } catch (error) {
      console.error("Error generating PDF report:", error);
      throw error;
    }
  },

  async getEquipmentCSV() {
    const equipments = await DamageReportEquipment.findAll();
    const reports = equipments.map((equipment) => equipment.dataValues);
    const csv = Papa.unparse(reports, {
      header: true,
    });
    return csv;
  },

  async getEquipmentPDF() {
    try {
      // Fetch equipments from the database within the specified date range
      const equipments = await DamageReportEquipment.findAll();

      // Create a new PDF document
      const doc = new PDFDocument();
      let buffers = [];
      doc.on("data", buffers.push.bind(buffers));

      // Add content to the PDF
      doc.fontSize(16).text(`Equipment Report:`, {
        underline: true,
      });
      doc.moveDown();

      equipments.forEach((equipment) => {
        doc.fontSize(12).text(`Equipment ID: ${equipment.equipmentID}`);
        doc.text(`Description: ${equipment.description}`);
        doc.text(`User ID: ${equipment.userID || "N/A"}`); // Handle null value
        doc.text(`Report Date: ${equipment.reportDate}`);
        doc.text(`Negligent: ${equipment.negligent ? "Yes" : "No"}`);
        doc.moveDown();
      });

      // Finalize the PDF and end the stream
      doc.end();

      // Return a Promise that resolves with the PDF buffer
      return new Promise((resolve, reject) => {
        doc.on("end", () => resolve(Buffer.concat(buffers)));
        doc.on("error", reject);
      });
    } catch (error) {
      console.error("Error generating PDF report:", error);
      throw error;
    }
  },

  async updateDamageReportById(id, updateData) {
    const [updated] = await DamageReport.update(updateData, {
      where: { id: id },
    });
    if (!updated) {
      throw new Error("Damage Report not found for update");
    }
    return await this.getDamageReportById(id); // Fetch the updated report
  },

  async deleteDamageReport(id) {
    const report = await this.getDamageReportById(id);
    if (!report) {
      throw new Error("Damage Report not found for deletion");
    }
    await report.destroy();
    return { message: "Damage Report deleted successfully" };
  },
};

export default DamageReportService;
