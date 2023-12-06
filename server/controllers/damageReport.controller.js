import DamageReportService from "../services/damageReport.service.js";
import util from "../utils/util.js";

const DamageReportController = {
  async createVehicleDamageReport(req, res) {
    try {
      const damageData = req.body;
      await DamageReportService.createVehicleDamageReport(damageData);
      res.status(201).json("Submittion Sucess!");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createEquipmentDamageReport(req, res) {
    try {
      const damageData = req.body;
      const submission = await DamageReportService.createEquipmentDamageReport(
        damageData
      );
      if (submission) {
        res.status(201).json("Submittion Sucess!");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getVehicleDamageReports(req, res) {
    try {
      const reports = await DamageReportService.getVehicleReports();
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getEquipmentDamageReports(req, res) {
    try {
      const reports = await DamageReportService.getEquipmentReports();
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getDamageReportById(req, res) {
    try {
      const id = req.params.id;
      const report = await DamageReportService.getDamageReportById(id);
      res.status(200).json(report);
    } catch (error) {
      if (error.message === "Damage Report not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async getTwentyRecentDamageReport(req, res) {
    try {
      // const vehicleID = req.body.vehicleID
      // const equipmentID = req.body.equipmentID
      // if ( && req.body)
      const reports = await DamageReportService.getTwentyRecentDamageReport();
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getDamageReportByPage(req, res) {
    try {
      const pageNumber = parseInt(req.params.pageNumber);
      const reports = await DamageReportService.getDamageReportByPage(
        pageNumber
      );
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getRecentSpecifiedDamageReports(req, res) {
    try {
      const amount = parseInt(req.params.amount);
      const recentLogs =
        await DamageReportService.getRecentSpecifiedDamageReports(amount);
      res.status(200).json(recentLogs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getVehicleCSV(req, res) {
    try {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;
      const { formattedStartDate, formattedEndDate } = util.reformatDate(
        startDate,
        endDate
      );
      const generatedReport = await DamageReportService.getVehicleCSV(
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

  async getVehiclePDF(req, res) {
    try {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;
      const { formattedStartDate, formattedEndDate } = util.reformatDate(
        startDate,
        endDate
      );
      const generatedReport = await DamageReportService.getVehiclePDF(
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

  async getEquipmentCSV(req, res) {
    try {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;
      const { formattedStartDate, formattedEndDate } = util.reformatDate(
        startDate,
        endDate
      );
      const generatedReport = await DamageReportService.getEquipmentCSV(
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

  async getEquipmentPDF(req, res) {
    try {
      const startDate = req.query.startDate;
      const endDate = req.query.endDate;
      const { formattedStartDate, formattedEndDate } = util.reformatDate(
        startDate,
        endDate
      );
      const generatedReport = await DamageReportService.getEquipmentPDF(
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

  async updateDamageReportById(req, res) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedReport = await DamageReportService.updateDamageReportById(
        id,
        updateData
      );
      res.status(200).json(updatedReport);
    } catch (error) {
      if (error.message === "Damage Report not found for update") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async deleteDamageReport(req, res) {
    try {
      const id = req.params.id;
      await DamageReportService.deleteDamageReport(id);
      res.status(200).json({ message: "Damage Report deleted successfully" });
    } catch (error) {
      if (error.message === "Damage Report not found for deletion") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },
};

export default DamageReportController;
