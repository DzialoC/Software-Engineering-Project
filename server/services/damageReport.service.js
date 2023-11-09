import DamageReport from "../models/damageReport.model.js";

const DamageReportService = {
  async createDamageReport(damageData) {
    const damageReport = await DamageReport.create(damageData);
    if (!damageReport) {
      throw new Error("Damage Report could not be created");
    }
    return damageReport;
  },

  async getDamageReportById(id) {
    const report = await DamageReport.findByPk(id);
    if (!report) {
      throw new Error("Damage Report not found");
    }
    return report;
  },

  async getTwentyRecentDamageReport() {
    const reports = await DamageReport.findAll({
      order: [["createdAt", "DESC"]],
      limit: 20,
    });
    return reports;
  },

  async getDamageReportByPage(pageNumber) {
    const limit = 20;
    const offset = (pageNumber - 1) * limit;
    const reports = await DamageReport.findAll({
      order: [["createdAt", "DESC"]],
      limit: limit,
      offset: offset,
    });
    return reports;
  },

  async getRecentSpecifiedDamageReports(amount) {
    const recentLogs = await DamageReport.findAll({
      order: [["createdAt", "DESC"]],
      limit: amount,
    });
    return recentLogs;
  },

  async updateDamageReportById(id, updateData) {
    const [updated] = await DamageReport.update(updateData, {
      where: { id: id },
    });
    if (!updated) {
      throw new Error("Damage Report not found for update");
    }
    return await this.getDamageReportById(id); // Fetch the updated report
  },

  async deleteDamageReport(id) {
    const report = await this.getDamageReportById(id);
    if (!report) {
      throw new Error("Damage Report not found for deletion");
    }
    await report.destroy();
    return { message: "Damage Report deleted successfully" };
  },
};

export default DamageReportService;
