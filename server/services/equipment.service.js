import Equipment from '../models/equipment.model.js';

const EquipmentService = {

    async createEquipment(equipmentData) {
        try{
            const equipment = await Equipment.create(equipmentData);
            return equipment;
        } catch (error) {
            throw error;
        }
    },

    async getEquipmentById(id){
        try{
            const equipment = await Equipment.findByPk(id);
            return equipment;
        } catch (error) {
            throw error;
        }
    },

    // will utilize all equipment due to the fact that there shouldnt be a large - amount less than 100
    async getAllEquipment() {
        try{
            const allEquipment = await Equipment.findAll();
            return allEquipment;
        } catch (error) {
            throw error;
        }
    },

    async getEquipmentByPage(pageNumber) {
        const limit = 25;
        const offset = (pageNumber - 1) * limit;
        try {
            const equipment = await Equipment.findAll({
                order: [['createdAt' , 'DESC']],
                limit: limit,
                offset: offset
            });
            return equipment;
        } catch (error) {
            throw error;
        }
    },

    async updateEquipment(id, equipmentData) {
        try {
            await Equipment.update(equipmentData, { where: { id: id}});
            return await this.getEquipmentById(id);
        } catch(error) {
            throw error;
        }
    },

    async deleteEquipment(id) {
        try {
            const equipment = await this.getEquipmentById(id);
            if(equipment) {
                await equipment.destroy();
                return true;
            }
            return false;
        } catch(error) {
            return error;
        }
    }
}

export default EquipmentService;