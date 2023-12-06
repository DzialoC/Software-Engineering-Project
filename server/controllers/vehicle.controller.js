import VehicleService from "../services/vehicle.service.js";
import util from "../utils/util.js";

const VehicleController = {
  async createVehicle(req, res) {
    try {
      const vehicle = req.body;
      const confirm = await VehicleService.createVehicle(vehicle);
      res.status(201).json(confirm);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getVehicleById(req, res) {
    try {
      const id = req.params.id;
      const vehicle = await VehicleService.getVehicleById(id);
      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllVehicles(req, res) {
    try {
      const vehicles = await VehicleService.getAllVehicles();
      res.status(200).json(vehicles);
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
      const generatedReport = await VehicleService.getCSVFromSpecifiedDate(
        formattedStartDate,
        formattedEndDate
      );
      res.setHeader("Content-Type", "application/csv");
      res.setHeader(
        "Content-Disposition",
        "inline; filename=vehicle_report.csv"
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
      const generatedReport = await VehicleService.getPDFFromSpecifiedDate(
        formattedStartDate,
        formattedEndDate
      );
      // Set the response headers to indicate that you're sending a PDF file
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "inline; filename=vehicle_report.pdf"
      );
      res.status(200).send(generatedReport);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateVehicleById(req, res) {
    try {
      const id = req.params.id;
      console.log(id);
      const updateData = req.body;
      console.log(id);
      await VehicleService.updateVehicleById(id, updateData);
      res.status(200);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteVehicleById(req, res) {
    try {
      const id = req.params.id;
      const failure = await VehicleService.deleteVehicleById(id);
      if (failure) {
        return res.status(404).json({ message: "Vehicle ID not found." });
      }
      res.status(200).json({ message: "Vehicle deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default VehicleController;
