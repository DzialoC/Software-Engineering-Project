import MaintenanceService from "../services/maintenance.service.js";

const MaintenanceController = {
  async createMaintenanceLog(req, res) {
    try {
      const maintenanceData = req.body;
      const maintenanceLog = await MaintenanceService.createMaintenanceLog(
        maintenanceData
      );
      res.status(201).json(maintenanceLog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getMaintenanceLogById(req, res) {
    try {
      const id = req.params.id;
      const log = await MaintenanceService.getMaintenanceLogById(id);
      if (!log) {
        return res.status(404).json({ message: "Maintenance log not found" });
      }
      res.status(200).json(log);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getMaintenanceByPage(req, res) {
    try {
      const pageNumber = parseInt(req.params.page);
      const maintenanceLogs = await MaintenanceService.getMaintenanceByPage(
        pageNumber
      );
      res.status(200).json(maintenanceLogs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getRecentSpecifiedLogs(req, res) {
    try {
      const amount = parseInt(req.params.amount);
      const recentLogs = await MaintenanceService.getRecentSpecifiedLogs(
        amount
      );
      res.status(200).json(recentLogs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateMaintenanceLog(req, res) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedLog = await MaintenanceService.updateMaintenanceLog(
        id,
        updateData
      );
      res.status(200).json(updatedLog);
    } catch (error) {
      if (error.message.includes("not found")) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async deleteMaintenanceLog(req, res) {
    try {
      const id = req.params.id;
      await MaintenanceService.deleteMaintenanceLog(id);
      res.status(200).json({ message: "Maintenance log deleted successfully" });
    } catch (error) {
      if (error.message.includes("not found")) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },
};

export default MaintenanceController;
