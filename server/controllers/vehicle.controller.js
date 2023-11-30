import VehicleService from "../services/vehicle.service.js";

const VehicleController = {
  async createVehicle(req, res) {
    try {
      const vehicleData = req.body;
      const vehicle = await VehicleService.createVehicle(vehicleData);
      res.status(201).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getVehicleById(req, res) {
    try {
      const id = req.params.id;
      const vehicle = await VehicleService.getVehicleById(id);
      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.status(200).json(vehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllVehicles(req, res) {
    try {
      const vehicles = await VehicleService.getAllVehicles();
      res.status(200).json(vehicles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateVehicleById(req, res) {
    try {
      const id = req.params.id;
      console.log("id: ", id);
      const updateData = req.body;
      console.log("updateData: ", updateData);
      await VehicleService.updateVehicleById(id, updateData);
      const updatedVehicle = await VehicleService.getVehicleById(id);
      res.status(200).json(updatedVehicle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteVehicleById(req, res) {
    try {
      const id = req.params.id;
      const success = await VehicleService.deleteVehicleById(id);
      if (!success) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.status(200).json({ message: "Vehicle deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default VehicleController;
