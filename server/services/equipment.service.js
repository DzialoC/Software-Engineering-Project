import Equipment from "../models/equipment.model.js";

const EquipmentService = {
  async createEquipment(equipmentData) {
    const equipment = await Equipment.create(equipmentData);
    return equipment;
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
    const [updated] = await Equipment.update(equipmentData, {
      where: { id: id },
    });
    if (!updated) {
      throw new Error("Equipment not found");
    }
    return await this.getEquipmentById(id);
  },

  async deleteEquipment(id) {
    const equipment = await this.getEquipmentById(id);
    if (!equipment) {
      throw new Error("Equipment not found");
    }
    await equipment.destroy();
  },
};

export default EquipmentService;
