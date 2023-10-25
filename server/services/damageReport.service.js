import DamageReport from '../models/damageReport.model.js';

const DamageReportService = {

    async createDamageReport(damageData) {
        try{
            const damageReport = DamageReport.create(damageData);
            return damageReport;
        } catch (error) {
            throw error;
        }
    },

    async getDamageReportById(id) {
        try {
            const report = await DamageReport.findByPk(id);
            return report;
        } catch (error) {
            throw error;
        }
    },

    async getTwentyRecentDamageReport() {
        try {
            const reports = await DamageReport.findAll({
                order: [['createdAt' , 'DESC']],
                limit: 20
            });
            return reports;
        } catch (error) {
            throw error;
        }
    },

    async getDamageReportByPage(pageNumber) {
        const limit = 20;
        const offset = (pageNumber - 1) * limit;
        try {
            const reports = await DamageReport.findAll({
                order: [['createdAt' , 'DESC']],
                limit: limit,
                offset: offset
            });
            return reports;
        } catch (error) {
            throw error;
        }
    },

    async getRecentSpecifiedDamageReports(amount) {
        try {
            const recentLogs = await findAll({
                order: [['createdAt' , 'DES']],
                limit: amount
            });
            return recentLogs;
        } catch (error) {
            throw error;
        }
    },

    async updateDamageReportById(id, updateData) {
        try {
            await DamageReport.update(updateData, { where: { id: id }});
            return await this.getDamageReportById(id);
        } catch(error) {
            throw error;
        }
    },

    async deleteDamageReport(id) {
        try {
            const report = await this.getDamageReportById(id);
            if(report) {
                await report.destroy();
                return true;
            }
            return false;
        } catch (error) {
            throw error;
        }
    }
}
export default DamageReportService;