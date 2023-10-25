import Maintenance from '../models/maintenance.model.js';

const MaintenanceService = {

    async createMaintenanceLog(maintenanceData) {
        try {
            const maintenanceLog = await Maintenance.create(maintenanceData);
            return maintenanceLog;
        } catch (error) {
            throw error;
        }
    },

    async getMaintenanceLogById(id) {
        try {
            const log = await Maintenance.findByPk(id);
            return log;
        } catch(error) {
            console.error('Error getMaintenanceLogById:', error);
            throw error;
        }
    },

    async getMaintenanceByPage(pageNumber) {
        const limit = 25;
        const offset = (pageNumber - 1) * limit;
        try {
            const maintenanceLogs = await DamageReport.findAll({
                order: [['createdAt' , 'DESC']],
                limit: limit,
                offset: offset
            });
            return maintenanceLogs;
        } catch (error) {
            throw error;
        }
    },

    async getRecentSpecifiedLogs(amount) {
            try {
                const recentLogs = await Maintenance.findAll({
                    order: [['createdAt', 'DESC']],
                    limit: amount
                });
                return recentLogs;
            } catch (error) {
                throw error;
            }
    },

    async updateMaintenanceLog(id, updateData) {
        try {
            await Maintenance.update(updateData, { where: { id: id }});
            return await this.getMaintenanceLogById(id);
        } catch(error) {
            console.error('Error updating recent Maintenance logs:', error);
            throw error;
        }
    },

    async deleteMaintenanceLog(id) {
        try {
            const log = await this.getMaintenanceLogById(id);
            if(log) {
                await log.destroy();
                return true;
            }
            return false;
        } catch (error) {
            throw error;
        }
    }
}

export default MaintenanceService;