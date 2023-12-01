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

  // using Id return all vehicle information
  async getVehicleById(id) {
    try {
      const vehicle = await Vehicle.findByPk(id);
      return vehicle;
    } catch (error) {
      throw error;
    }
  },

  async getVehicleByTag(tag) {
    try {
      const vehicle = await Vehicle.findOne({ where: { vehicleTag: tag } });
      if (vehicle) {
        return vehicle;
      }
      return error;
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
