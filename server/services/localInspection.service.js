import LocalInspection from "../models/localInspection.model.js";

const LocalInspectionService = {
  async createLocalInspection(inspectionData) {
    try {
      await LocalInspection.create(inspectionData);
    } catch (error) {
      throw new Error("Inspection Log could not be created");
    }
  },

  async getLocalInspectionById(id) {
    const inspectionLog = await LocalInspection.findByPk(id);
    if (!inspectionLog) {
      throw new Error("Inspection Log not found");
    }
    return inspectionLog;
  },

  async getLocalInspectionByPage(pageNumber) {
    const limit = 20;
    const offset = (pageNumber - 1) * limit;
    const inspectionLogs = await LocalInspection.findAll({
      order: [["createdAt", "DESC"]],
      limit: limit,
      offset: offset,
    });
    return inspectionLogs;
  },

  async getRecentSpecifiedLogs(amount) {
    const recentInspections = await LocalInspection.findAll({
      order: [["createdAt", "DESC"]],
      limit: amount,
    });
    return recentInspections;
  },

  async updateSpecifiedLog(id, inspectionData) {
    const [updated] = await LocalInspection.update(inspectionData, {
      where: { id: id },
    });
    if (!updated) {
      throw new Error("Inspection Log not found for update");
    }
    return await this.getLocalInspectionById(id); // Fetch the updated log
  },

  async deleteSpecifiedLog(id) {
    const log = await this.getLocalInspectionById(id);
    if (!log) {
      throw new Error("Inspection Log not found for deletion");
    }
    await log.destroy();
    return { message: "Inspection Log deleted successfully" };
  },
};

export default LocalInspectionService;
