import MaintenanceEquipement from "../models/maintenanceEquipment.model.js";
import MaintenanceVehicle from "../models/maintenanceVehicle.model.js";
import VechicleService from "./vehicle.service.js";
import EquipmentService from "./equipment.service.js";
import UserService from "./user.service.js";

const MaintenanceService = {
  async createVehicleMaintenanceLog(maintenanceData) {
    try {
      const isReal = await VechicleService.vehicleVerification(
        maintenanceData.vehicleTag
      );
      if (isReal) {
        const maintenanceLog = await MaintenanceVehicle.create(maintenanceData);
        if (!maintenanceLog) {
          throw new Error("Maintenance Report could not be created");
        }
      } else {
        throw new Error("Vehicle does not exist please check tag input");
      }
    } catch (error) {
      throw error;
    }
  },

  async createEquipmentMaintenanceLog(maintenanceData) {
    try {
      const isReal = await EquipmentService.equipmentVerification(
        maintenanceData.equipmentID
      );
      if (isReal) {
        const maintenanceLog = await MaintenanceEquipement.create(
          maintenanceData
        );
        if (!maintenanceLog) {
          throw new Error("Maintenance Report could not be created");
        }
      } else {
        throw new Error("Equipment does not exist please check equipment ID");
      }
    } catch (error) {
      throw error;
    }
  },

  async getMaintenanceLogById(id) {
    try {
      const log = await Maintenance.findByPk(id);
      return log;
    } catch (error) {
      console.error("Error getMaintenanceLogById:", error);
      throw error;
    }
  },

  async getMaintenanceEquipmentByPage() {
    const limit = 25;
    console.log("hit?");
    try {
      const maintenanceLogs = await MaintenanceEquipement.findAll({
        order: [["createdAt", "DESC"]],
        limit: limit,
      });
      const strippedArray = maintenanceLogs.map((log) => log.dataValues);

      const logsWithAppendedName =
        await UserService.getUserNameFromIdAppendForms(strippedArray);

      return logsWithAppendedName;
    } catch (error) {
      throw error;
    }
  },

  async getMaintenanceVehicleByPage() {
    const limit = 25;
    try {
      const maintenanceLogs = await MaintenanceVehicle.findAll({
        order: [["createdAt", "DESC"]],
        limit: limit,
      });

      const logsWithAppendedVehicleInfo = await VechicleService.getVehicleInfo(
        maintenanceLogs
      );
      const logsWithAppendedName =
        await UserService.getUserNameFromIdAppendForms(
          logsWithAppendedVehicleInfo
        );
      return logsWithAppendedName;
    } catch (error) {
      throw error;
    }
  },

  async getRecentSpecifiedLogs(amount) {
    try {
      const recentLogs = await Maintenance.findAll({
        order: [["createdAt", "DESC"]],
        limit: amount,
      });
      return recentLogs;
    } catch (error) {
      throw error;
    }
  },

  async updateMaintenanceLog(id, updateData) {
    try {
      await Maintenance.update(updateData, { where: { id: id } });
      return await this.getMaintenanceLogById(id);
    } catch (error) {
      console.error("Error updating recent Maintenance logs:", error);
      throw error;
    }
  },

  async deleteMaintenanceLog(id) {
    const log = await this.getMaintenanceLogById(id);
    if (!log) {
      throw new Error("Maintenance log not found");
    }
    await log.destroy();
  },
};

export default MaintenanceService;
