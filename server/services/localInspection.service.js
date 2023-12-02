import LocalInspection from "../models/localInspection.model.js";
import VechicleService from "./vehicle.service.js";
import UserService from "./user.service.js";

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
    const logsWithAppendedVehicleInfo =
      await this.getInspectionsWithVehicleInfo(recentInspections);
    const logsWithAppendedName = await UserService.getUserNameFromIdAppendForms(
      logsWithAppendedVehicleInfo
    );
    return logsWithAppendedName;
  },

  // appends vehicleInformation onto inspection logs past through
  async getInspectionsWithVehicleInfo(recentInspections) {
    const inspectionsWithVehicleInfo = await Promise.all(
      recentInspections.map(async (inspection) => {
        const vehicleInfo = await VechicleService.getYearMakeModel(
          inspection.dataValues.tag
        );
        return {
          ...inspection.dataValues,
          vehicleInformation: vehicleInfo,
        };
      })
    );
    return inspectionsWithVehicleInfo;
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
