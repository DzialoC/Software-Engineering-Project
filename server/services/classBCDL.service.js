import ClassBCDL from "../models/classBCDL.model.js";
import VechicleService from "./vehicle.service.js";
import UserService from "./user.service.js";
import Papa from "papaparse";
import PDFDocument from "pdfkit";

const ClassBCDLService = {
  async createClassBCDL(formInput) {
    try {
      const isReal = await VechicleService.vehicleVerification(
        formInput.vehicleTag
      );
      if (isReal) {
        await ClassBCDL.create(formInput);
      } else {
        throw new Error(
          "Incorrect Vehicle Tag, Verify tag. If tag is correct add new vehicle"
        );
      }
    } catch (error) {
      throw new error("Class B CDL log could not be created.");
    }
  },

  async getAllClassBCDL() {
    try {
      const allForms = await ClassBCDL.findAll();
      const finalForms = allForms.map((form) => form.dataValues);
      const formsWithAppendedName =
        await UserService.getUserNameFromIdAppendForms(finalForms);

      return formsWithAppendedName;
    } catch (error) {
      throw error;
    }
  },

  async getClassBCDLById(reqId) {
    const classBCDLForm = await ClassBCDL.findByPk(reqId);
    if (!classBCDLForm) {
      throw new Error("Class B CDL form not found");
    }
    return classBCDLForm;
  },

  async getClassCDLByPage(pageNumber) {
    const limit = 20;
    const offset = (pageNumber - 1) * limit;
    const classBCDLForms = await ClassBCDL.findAll({
      order: [["createdAt", "DESC"]],
      limit: limit,
    });
    return classBCDLForms;
  },

  async getRecentSpecifiedClassBForms(amount) {
    const recentClassBCDLForms = await ClassBCDL.findAll({
      order: [["createdAt", "DESC"]],
      limit: amount,
      raw: true,
    });

    const strippedArray = recentClassBCDLForms.map((log) => log.dataValues);
    return strippedArray;
  },

  async getCSVFromSpecifiedDate() {
    const vehicles = await ClassBCDL.findAll();

    const reports = vehicles.map((vehicle) => vehicle.dataValues);
    console.log(reports);
    const csv = Papa.unparse(reports, {
      header: true,
    });
    return csv;
  },

  async getPDFFromSpecifiedDate() {
    try {
      // Fetch classbcdls from the database within the specified date range
      const classbcdls = await ClassBCDL.findAll();

      // Create a new PDF document
      const doc = new PDFDocument();
      let buffers = [];
      doc.on("data", buffers.push.bind(buffers));

      // Add content to the PDF
      doc.fontSize(16).text(`Class B CDL Report:`, {
        underline: true,
      });
      doc.moveDown();

      classbcdls.forEach((classbcdl) => {
        doc.fontSize(12).text(`Vehicle Tag: ${classbcdl.vehicleTag}`);
        doc.text(`User ID: ${classbcdl.userID}`);
        doc.text(`Comment: ${classbcdl.comment}`);
        doc.text(
          `Air Hydraulic Brake Check: ${classbcdl.airHydraulicBrakeCheck}`
        );
        doc.text(
          `Parking Trailer Brake Check: ${classbcdl.parkingTrailerBrakeCheck}`
        );
        doc.text(`Service Brake Check: ${classbcdl.serviceBrakeCheck}`);
        doc.text(`Lighting Indicators: ${classbcdl.lightingIndicators}`);
        doc.text(`Emergency Equipment: ${classbcdl.emergencyEquipment}`);
        doc.text(
          `Windshield Traffic Monitoring Devices: ${classbcdl.windshieldTrafficMonitoringDevices}`
        );
        doc.text(`Wipers Washers: ${classbcdl.wipersWashers}`);
        doc.text(`Heater Defroster: ${classbcdl.heaterDefroster}`);
        doc.text(`Horns: ${classbcdl.horns}`);
        doc.text(`All External Lights: ${classbcdl.allExternalLights}`);
        doc.text(`Lenses Front: ${classbcdl.lensesFront}`);
        doc.text(`Fluid Levels: ${classbcdl.fluidLevels}`);
        doc.text(`Fluid Air Leaks: ${classbcdl.fluidAirLeaks}`);
        doc.text(`Steering Systems: ${classbcdl.steeringSystems}`);
        doc.text(`Tires: ${classbcdl.tires}`);
        doc.text(`Rims: ${classbcdl.rims}`);
        doc.text(`Lug Nuts: ${classbcdl.lugNuts}`);
        doc.text(`Springs Air Bags Shocks: ${classbcdl.springsAirBagsShocks}`);
        doc.text(`Brake Lines Hoses Leaks: ${classbcdl.brakeLinesHosesLeaks}`);
        doc.text(`Brake Contaminates: ${classbcdl.brakeContaminates}`);
        doc.text(`Lenses Reflectors Side: ${classbcdl.lensesReflectorsSide}`);
        doc.text(
          `Traffic Monitoring Devices Side: ${classbcdl.trafficMonitoringDevicesSide}`
        );
        doc.text(`Battery: ${classbcdl.battery}`);
        doc.text(`Fuel Tanks: ${classbcdl.fuelTanks}`);
        doc.text(`Frames: ${classbcdl.frames}`);
        doc.text(`Lenses Reflectors Rear: ${classbcdl.lensesReflectorsRear}`);
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

  async updateSpecified(id, formData) {
    const [updated] = await ClassBCDL.update(formData, { where: { id: id } });
    if (!updated) {
      throw new Error("Class B CDL form not found for update");
    }
    return await this.getClassBCDLById(id); // Fetch the updated form
  },

  async deleteClassBForm(id) {
    const log = await this.getClassBCDLById(id);
    if (!log) {
      throw new Error("Class B CDL form not found for deletion");
    }
    await log.destroy();
    return { message: "Class B form deleted successfully" };
  },
};

export default ClassBCDLService;
