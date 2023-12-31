import ClassBCDLService from "../services/classBCDL.service.js";
import util from "../utils/util.js";

const ClassBCDLController = {
  async createClassBCDL(req, res) {
    try {
      const userId = util.getUserIdByAccessToken(req);
      const formInput = req.body;
      formInput.userID = userId;
      const classBCDLInspection = await ClassBCDLService.createClassBCDL(
        formInput
      );
      res.status(201).json(classBCDLInspection);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllClassBCDL(req, res) {
    try {
      const forms = await ClassBCDLService.getAllClassBCDL();
      console.log(forms);
      return res.status(200).json(forms);
    } catch (error) {
      console.error("Error fetching CDL forms:", error);
      return res.sendStatus(500);
    }
  },

  async getClassBCDLById(req, res) {
    try {
      const reqId = req.params.id;
      const classBCDLForm = await ClassBCDLService.getClassBCDLById(reqId);
      res.status(200).json(classBCDLForm);
    } catch (error) {
      if (error.message === "Class B CDL form not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async getClassCDLByPage(req, res) {
    try {
      const pageNumber = parseInt(req.params.page);
      const classBCDLForms = await ClassBCDLService.getClassCDLByPage(
        pageNumber
      );
      res.status(200).json(classBCDLForms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getRecentAmountClassBForms(req, res) {
    try {
      const amount = 50;
      const recentClassBCDLForms =
        await ClassBCDLService.getRecentSpecifiedClassBForms(amount);

      res.status(200).json(recentClassBCDLForms);
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
      const generatedReport = await ClassBCDLService.getCSVFromSpecifiedDate(
        formattedStartDate,
        formattedEndDate
      );
      res.setHeader("Content-Type", "application/csv");
      res.setHeader(
        "Content-Disposition",
        "inline; filename=classbcdl_report.csv"
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
      const generatedReport = await ClassBCDLService.getPDFFromSpecifiedDate(
        formattedStartDate,
        formattedEndDate
      );
      // Set the response headers to indicate that you're sending a PDF file
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "inline; filename=classbcdl_report.pdf"
      );
      res.status(200).send(generatedReport);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateSpecified(req, res) {
    try {
      const id = req.params.id;
      const formData = req.body;
      const updatedClassBCDLForm = await ClassBCDLService.updateSpecified(
        id,
        formData
      );
      res.status(200).json(updatedClassBCDLForm);
    } catch (error) {
      if (error.message === "Class B CDL form not found for update") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async deleteClassBForm(req, res) {
    try {
      const id = req.params.id;
      await ClassBCDLService.deleteClassBForm(id);
      res
        .status(200)
        .json({ message: "Class B CDL form deleted successfully" });
    } catch (error) {
      if (error.message === "Class B CDL form not found for deletion") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },
};

export default ClassBCDLController;
