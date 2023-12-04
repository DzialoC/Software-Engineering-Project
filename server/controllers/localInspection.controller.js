import LocalInspectionService from "../services/localInspection.service.js";
import util from "../utils/util.js";

const LocalInspectionController = {
  async createLocalInspection(req, res) {
    try {
      const userId = util.getUserIdByAccessToken(req);
      const inspectionData = req.body;
      inspectionData.userID = userId;
      await LocalInspectionService.createLocalInspection(inspectionData);
      res.status(201).json("Submittion Sucess!");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getLocalInspectionById(req, res) {
    try {
      const id = req.params.id;
      const inspectionLog = await LocalInspectionService.getLocalInspectionById(
        id
      );
      res.status(200).json(inspectionLog);
    } catch (error) {
      if (error.message === "Inspection Log not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async getLocalInspectionByPage(req, res) {
    try {
      const pageNumber = parseInt(req.params.page);
      const inspectionLogs =
        await LocalInspectionService.getLocalInspectionByPage(pageNumber);
      res.status(200).json(inspectionLogs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getRecentSpecifiedLogs(req, res) {
    try {
      const amount = 35;
      if (req.params.amount) {
        amount = parseInt(req.params.amount);
      }

      const recentInspections =
        await LocalInspectionService.getRecentSpecifiedLogs(amount);
      res.status(200).json(recentInspections);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateSpecifiedLog(req, res) {
    try {
      const id = req.params.id;
      const inspectionData = req.body;
      const updatedLog = await LocalInspectionService.updateSpecifiedLog(
        id,
        inspectionData
      );
      res.status(200).json(updatedLog);
    } catch (error) {
      if (error.message === "Inspection Log not found for update") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async deleteSpecifiedLog(req, res) {
    try {
      const id = req.params.id;
      await LocalInspectionService.deleteSpecifiedLog(id);
      res.status(200).json({ message: "Inspection Log deleted successfully" });
    } catch (error) {
      if (error.message === "Inspection Log not found for deletion") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },
};

export default LocalInspectionController;
