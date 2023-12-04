import DamageReportService from "../services/damageReport.service.js";

const DamageReportController = {
  async createDamageReport(req, res) {
    try {
      const damageData = req.body;
      const vehicleDamaged = damageData.vehicleID;
      const equipmentDamaged = damageData.equipmentID;
      if (vehicleDamaged && equipmentDamaged) {
        throw error.message(
          "Cannot insert vehicle and equipment. Only one area can be filled."
        );
      }
      if (vehicleDamaged === true) {
        DamageReportService.createVehicleDamageReport(damageData);
      }

      if (equipmentDamaged === true) {
        DamageReportService.createEquipmentDamageReport(damageData);
      }
      res.status(201).json("Submittion Sucess!");
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
