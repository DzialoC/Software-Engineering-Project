import Equipment from "../models/equipment.model.js";

const EquipmentService = {
  async createEquipment(equipmentData) {
    try {
      console.log(equipmentData);
      await Equipment.create(equipmentData);
      return true;
    } catch (error) {
      throw new Error("Equipment ID already exists", error);
    }
  },

  async equipmentVerification(inputEquipmentID) {
    try {
      const equipment = Equipment.findOne({
        where: {
          equipmentID: inputEquipmentID,
        },
      });
      if (equipment) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  },

  async getEquipmentById(id) {
    const equipment = await Equipment.findByPk(id);
    if (!equipment) {
      throw new Error("Equipment not found");
    }
    return equipment;
  },

  async getAllEquipment() {
    const allEquipment = await Equipment.findAll();
    return allEquipment;
  },

  async getEquipmentByPage(pageNumber) {
    const limit = 25;
    const offset = (pageNumber - 1) * limit;
    const equipment = await Equipment.findAll({
      order: [["createdAt", "DESC"]],
      limit: limit,
      offset: offset,
    });
    return equipment;
  },

  async updateEquipment(id, equipmentData) {
    await Equipment.update(equipmentData, {
      where: { equipmentID: id },
    });
    if (!updated) {
      throw new Error("Equipment not found");
    }
  },

  async deleteEquipmentById(id) {
    const equipment = await this.getEquipmentById(id);
    if (equipment) {
      await equipment.destroy(id);
    }
  },
};

export default EquipmentService;
