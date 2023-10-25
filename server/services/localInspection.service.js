import LocalInspection from '../models/localInspection.model.js';

const LocalInspectionService = {

    async createLocalInspection(inspectionData) {
        try {
            const inspectionLog = await LocalInspection.create(inspectionData);
            return inspectionLog;
        } catch(error) {
            throw error;
        }
    },

    async getLocalInspectionById(id) {
        try {
            const inspectionLog = await LocalInspection.findByPk(id);
            return inspectionLog;
        } catch (error) {
            throw error;
        }
    },

    async getLocalInspectionByPage(pageNumber) {
        const limit = 20;
        const offset = (pageNumber - 1) * limit;
        try {
            const inspectionLogs = await DamageReport.findAll({
                order: [['createdAt' , 'DESC']],
                limit: limit,
                offset: offset
            });
            return inspectionLogs;
        } catch (error) {
            throw error;
        }
    },

    async getRecentSpecifiedLogs(amount) {
        try {
            const recentInspections = await LocalInspection.findAll({
                order: [['createdAt' , 'DESC']],
                Limit: amount
            });
            return recentInspections;
        } catch (error) {
            throw error;
        }
    },

    async updateSpecifiedLog(id, inspectionData) {
        try {
            await LocalInspection.update(inspectionData, { where: { id: id }});
            return await this.getLocalInspectionById(id);
        } catch (error) {
            throw error;
        }
    },

    async deleteSpecifiedLog(id) {
        try {
            const log = await this.getLocalInspectionById(id);
            if(log) {
                await log.destroy();
                return true;
            }
            return false;
        } catch(error) {
            throw error;
        }
    }
}

export default LocalInspectionService;