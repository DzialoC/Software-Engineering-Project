import Equipment from "../models/equipment.model.js";
import Papa from "papaparse";
import PDFDocument from "pdfkit";

const EquipmentService = {
  async createEquipment(equipmentData) {
    try {
      await Equipment.create(equipmentData);
      return true;
    } catch (error) {
      throw new Error("Equipment ID already exists", error);
    }
  },

  async equipmentVerification(inputEquipmentID) {
    try {
      const equipment = Equipment.findOne({
        where: {
          equipmentID: inputEquipmentID,
        },
      });
      if (equipment) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  },

  async getEquipmentById(id) {
    const equipment = await Equipment.findByPk(id);
    if (!equipment) {
      throw new Error("Equipment not found");
    }
    return equipment;
  },

  async getAllEquipment() {
    const allEquipment = await Equipment.findAll();
    return allEquipment;
  },

  async getEquipmentByPage(pageNumber) {
    const limit = 25;
    const offset = (pageNumber - 1) * limit;
    const equipment = await Equipment.findAll({
      order: [["createdAt", "DESC"]],
      limit: limit,
      offset: offset,
    });
    return equipment;
  },

  async getCSVFromSpecifiedDate() {
    const equipments = await Equipment.findAll();
    const reports = equipments.map((equipment) => equipment.dataValues);
    const csv = Papa.unparse(reports, {
      header: true,
    });
    return csv;
  },

  async getPDFFromSpecifiedDate() {
    try {
      // Fetch equipments from the database within the specified date range
      const equipments = await Equipment.findAll();

      // Create a new PDF document
      const doc = new PDFDocument();
      let buffers = [];
      doc.on("data", buffers.push.bind(buffers));

      // Add content to the PDF
      doc.fontSize(16).text(`Equipment Report`, {
        underline: true,
      });
      doc.moveDown();

      equipments.forEach((equipment) => {
        doc.fontSize(12).text(`equipment ID: ${equipment.equipmentID}`);
        doc.text(`Tag: ${equipment.equipmentDescription}`);
        doc.text(`Condition: ${equipment.equipmentCondition}`);
        doc.text(`Make: ${equipment.underMaintenance}`);
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

  async updateEquipment(equipmentData) {
    const id = equipmentData.equipmentID;
    const updated = await Equipment.update(equipmentData, {
      where: { equipmentID: id },
    });
    console.log(updated);
    console.log(equipmentData);
    if (!updated) {
      throw new Error("Equipment not found");
    } else {
      return true;
    }
  },

  async deleteEquipmentById(id) {
    const equipment = await this.getEquipmentById(id);
    if (equipment) {
      await equipment.destroy(id);
    }
  },
};

export default EquipmentService;
