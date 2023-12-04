import EquipmentService from "../services/equipment.service.js";

const EquipmentController = {
  async createEquipment(req, res) {
    try {
      const equipmentData = req.body;
      console.log(equipmentData);
      const success = await EquipmentService.createEquipment(equipmentData);
      if (success) {
        res.status(201).json(success);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getEquipmentById(req, res) {
    try {
      const id = req.params.id;
      const equipment = await EquipmentService.getEquipmentById(id);
      res.status(200).json(equipment);
    } catch (error) {
      if (error.message === "Equipment not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async getAllEquipment(req, res) {
    try {
      const allEquipment = await EquipmentService.getAllEquipment();
      res.status(200).json(allEquipment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getEquipmentByPage(req, res) {
    try {
      const pageNumber = parseInt(req.params.page);
      const equipment = await EquipmentService.getEquipmentByPage(pageNumber);
      res.status(200).json(equipment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateEquipment(req, res) {
    try {
      const id = req.params.id;
      const equipmentData = req.body;
      await EquipmentService.updateEquipment(id, equipmentData);
      res.status(200);
    } catch (error) {
      if (error.message === "Equipment not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },

  async deleteEquipment(req, res) {
    try {
      const id = req.params.id;
      await EquipmentService.deleteEquipmentById(id);
      res.status(200).json({ message: "Equipment successfully deleted" });
    } catch (error) {
      if (error.message === "Equipment not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  },
};

export default EquipmentController;
