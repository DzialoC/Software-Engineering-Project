import Vehicle from "../models/vehicle.model.js";

const VechicleService = {
  async createVehicle({
    vehicleTag,
    vehicleCondition,
    vehicleMake,
    vehicleModel,
    vehicleYear,
    lastUser,
  }) {
    try {
      await Vehicle.create({
        vehicleTag: vehicleTag,
        vehicleCondition: vehicleCondition,
        vehicleMake: vehicleMake,
        vehicleModel: vehicleModel,
        vehicleYear: vehicleYear,
        lastUser: lastUser,
      });
    } catch (error) {
      throw new Error("Vehicle ID already exists", error);
    }
  },
  // returns boolean if vehicle exists used currently for inputforms verifying
  // correct tag input
  async vehicleVerification(inputVehicleTag) {
    try {
      const vehicle = Vehicle.findOne({
        where: {
          vehicleTag: inputVehicleTag,
        },
      });
      if (vehicle) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  },

  // appends vehicleInformation onto inspection logs past through
  async getVehicleInfo(recentReports) {
    const reportWithVehicleInfo = await Promise.all(
      recentReports.map(async (report) => {
        const vehicleInfo = await this.getYearMakeModel(
          report.dataValues.vehicleTag
        );
        return {
          ...report.dataValues,
          vehicleInformation: vehicleInfo,
        };
      })
    );
    return reportWithVehicleInfo;
  },

  // using Id return all vehicle information
  async getVehicleById(id) {
    try {
      const vehicle = await Vehicle.findByPk(id);
      return vehicle;
    } catch (error) {
      throw error;
    }
  },

  async getYearMakeModel(inputTag) {
    const vehicle = await this.getVehicleByTag(inputTag);
    const yearMakeModel = `${vehicle.vehicleYear} ${vehicle.vehicleMake} ${vehicle.vehicleModel}`;
    return yearMakeModel;
  },

  async getVehicleByTag(tag) {
    try {
      const vehicle = await Vehicle.findOne({ where: { vehicleTag: tag } });
      return vehicle;
    } catch (error) {
      throw error;
    }
  },

  async getAllVehicles() {
    try {
      const vehicles = await Vehicle.findAll();
      return vehicles;
    } catch (error) {
      throw error;
    }
  },

  async updateVehicleById(id, updateData) {
    try {
      await Vehicle.update(updateData, { where: { vehicleID: id } });
    } catch (error) {
      throw error;
    }
  },

  async deleteVehicleById(id) {
    const vehicle = await this.getVehicleById(id);
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }
    await vehicle.destroy();
  },
};

export default VechicleService;
