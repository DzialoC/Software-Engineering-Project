import Vehicle from "../models/vehicle.model.js";
import Papa from "papaparse";
import PDFDocument from "pdfkit";
import { Op } from "sequelize";

const VechicleService = {
  async createVehicle(vehicle) {
    try {
      await Vehicle.create(vehicle);
    } catch (error) {
      throw new Error("Vehicle ID already exists", error);
    }
  },

  async getCSVFromSpecifiedDate() {
    const vehicles = await Vehicle.findAll();
    const reports = vehicles.map((vehicle) => vehicle.dataValues);
    const csv = Papa.unparse(reports, {
      header: true,
    });
    return csv;
  },

  async getPDFFromSpecifiedDate() {
    try {
      // Fetch vehicles from the database within the specified date range
      const vehicles = await Vehicle.findAll();

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
        doc.fontSize(12).text(`Vehicle ID: ${vehicle.vehicleID}`);
        doc.text(`Tag: ${vehicle.vehicleTag}`);
        doc.text(`Condition: ${vehicle.vehicleCondition}`);
        doc.text(`Make: ${vehicle.vehicleMake}`);
        doc.text(`Model: ${vehicle.vehicleModel}`);
        doc.text(`Year: ${vehicle.vehicleYear}`);
        doc.text(`Under Maintenance: ${vehicle.underMaintenance}`);
        doc.text(`Last User ID: ${vehicle.lastUser}`);
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

  // returns boolean if vehicle exists used currently for inputforms verifying
  // correct tag input
  async vehicleVerification(inputVehicleTag) {
    try {
      const vehicle = Vehicle.findOne({
        where: {
          vehicleTag: inputVehicleTag,
        },
      });
      if (vehicle) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  },

  // appends vehicleInformation onto inspection logs past through
  async getVehicleInfo(recentReports) {
    const reportWithVehicleInfo = await Promise.all(
      recentReports.map(async (report) => {
        const vehicleInfo = await this.getYearMakeModel(
          report.dataValues.vehicleTag
        );
        return {
          ...report.dataValues,
          vehicleInformation: vehicleInfo,
        };
      })
    );
    return reportWithVehicleInfo;
  },

  // using Id return all vehicle information
  async getVehicleById(id) {
    try {
      const vehicle = await Vehicle.findByPk(id);
      return vehicle;
    } catch (error) {
      throw error;
    }
  },

  async getYearMakeModel(inputTag) {
    const vehicle = await this.getVehicleByTag(inputTag);
    const yearMakeModel = `${vehicle.vehicleYear} ${vehicle.vehicleMake} ${vehicle.vehicleModel}`;
    return yearMakeModel;
  },

  async getVehicleByTag(tag) {
    try {
      const vehicle = await Vehicle.findOne({ where: { vehicleTag: tag } });
      return vehicle;
    } catch (error) {
      throw error;
    }
  },

  async getAllVehicles() {
    try {
      const vehicles = await Vehicle.findAll();
      return vehicles;
    } catch (error) {
      throw error;
    }
  },

  async updateVehicleById(updateData) {
    try {
      const id = updateData.vehicleID;
      await Vehicle.update(updateData, { where: { vehicleID: id } });
    } catch (error) {
      throw error;
    }
  },

  async deleteVehicleById(id) {
    const vehicle = await this.getVehicleById(id);
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }
    await vehicle.destroy();
  },
};

export default VechicleService;
