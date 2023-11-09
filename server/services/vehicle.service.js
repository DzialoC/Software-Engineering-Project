import Vehicle from "../models/vehicle.model.js";

const VechicleService = {
  async createVehicle(vehicleData) {
    try {
      const vehicle = await Vehicle.create(vehicleData);
      return vehicle;
    } catch (error) {
      throw error;
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

  async getAllVehicles() {
    try {
      const vehicles = await Vehicle.findAll();
      return vehicles;
    } catch (error) {
      throw error;
    }
  },

  // Update multiple instances that match the where options. The promise returns an array with one or two
  // * elements. The first element is always the number of affected rows, while the second element is the actual
  // * affected rows (only supported in postgres and mssql with `options.returning` true.)
  async updateVehicleById(id, updateData) {
    try {
      await Vehicle.update(updateData, { where: { id: id } });
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
