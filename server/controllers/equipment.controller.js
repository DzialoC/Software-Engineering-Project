import EquipmentService from "../services/equipment.service.js";
import util from "../utils/util.js";

const EquipmentController = {
  async createEquipment(req, res) {
    try {
      const equipmentData = req.body;
      const success = await EquipmentService.createEquipment(equipmentData);
      if (success) {
        res.status(201).json(success);
      }
    } catch (error) {
      res.sendStatus(500).json({ message: error.message });
    }
  },

  async getEquipmentById(req, res) {
    try {
      const id = req.params.id;
      const equipment = await EquipmentService.getEquipmentById(id);
      res.status(200).json(equipment);
    } catch (error) {
      if (error.message === "Equipment not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async getAllEquipment(req, res) {
    try {
      const allEquipment = await EquipmentService.getAllEquipment();
      res.status(200).json(allEquipment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getEquipmentByPage(req, res) {
    try {
      const pageNumber = parseInt(req.params.page);
      const equipment = await EquipmentService.getEquipmentByPage(pageNumber);
      res.status(200).json(equipment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getCSVFromSpecifiedDate(req, res) {
    try {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;
      const { formattedStartDate, formattedEndDate } = util.reformatDate(
        startDate,
        endDate
      );
      const generatedReport = await EquipmentService.getCSVFromSpecifiedDate(
        formattedStartDate,
        formattedEndDate
      );
      res.setHeader("Content-Type", "application/csv");
      res.setHeader(
        "Content-Disposition",
        "inline; filename=equipment_report.csv"
      );
      res.status(200).send(generatedReport);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getPDFFromSpecifiedDate(req, res) {
    try {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;
      const { formattedStartDate, formattedEndDate } = util.reformatDate(
        startDate,
        endDate
      );
      const generatedReport = await EquipmentService.getPDFFromSpecifiedDate(
        formattedStartDate,
        formattedEndDate
      );
      // Set the response headers to indicate that you're sending a PDF file
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "inline; filename=equipment_report.pdf"
      );
      res.status(200).send(generatedReport);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateEquipment(req, res) {
    try {
      const equipmentData = req.body;
      await EquipmentService.updateEquipment(equipmentData);
      res.status(200);
    } catch (error) {
      if (error.message === "Equipment not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async deleteEquipment(req, res) {
    try {
      const id = req.params.id;
      await EquipmentService.deleteEquipmentById(id);
      res.status(200).json({ message: "Equipment successfully deleted" });
    } catch (error) {
      if (error.message === "Equipment not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },
};

export default EquipmentController;
