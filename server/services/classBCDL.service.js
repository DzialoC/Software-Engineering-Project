import ClassBCDL from "../models/classBCDL.model.js";
import VechicleService from "./vehicle.service.js";

const ClassBCDLService = {
  async createClassBCDL(formInput) {
    try {
      const isReal = await VechicleService.vehicleVerification(
        formInput.vehicleTag
      );
      if (isReal) {
        await ClassBCDL.create(formInput);
      } else {
        throw new Error(
          "Incorrect Vehicle Tag, Verify tag. If tag is correct add new vehicle"
        );
      }
    } catch (error) {
      throw new error("Class B CDL log could not be created.");
    }
  },

  async getAllClassBCDL() {
    const allForms = await ClassBCDL.findAll();
    if (!allForms) {
      throw new Error("No forms found");
    }
    console.log(allForms);
    return allForms;
  },

  async getClassBCDLById(reqId) {
    const classBCDLForm = await ClassBCDL.findByPk(reqId);
    if (!classBCDLForm) {
      throw new Error("Class B CDL form not found");
    }
    return classBCDLForm;
  },

  async getClassCDLByPage(pageNumber) {
    const limit = 20;
    const offset = (pageNumber - 1) * limit;
    const classBCDLForms = await ClassBCDL.findAll({
      order: [["createdAt", "DESC"]],
      limit: limit,
    });
    return classBCDLForms;
  },

  async getRecentSpecifiedClassBForms(amount) {
    const recentClassBCDLForms = await ClassBCDL.findAll({
      order: [["createdAt", "DESC"]],
      limit: amount,
    });

    console.log(recentClassBCDLForms, "recent class");
    const strippedArray = recentClassBCDLForms.map((log) => log.dataValues);

    return strippedArray;
  },

  async updateSpecified(id, formData) {
    const [updated] = await ClassBCDL.update(formData, { where: { id: id } });
    if (!updated) {
      throw new Error("Class B CDL form not found for update");
    }
    return await this.getClassBCDLById(id); // Fetch the updated form
  },

  async deleteClassBForm(id) {
    const log = await this.getClassBCDLById(id);
    if (!log) {
      throw new Error("Class B CDL form not found for deletion");
    }
    await log.destroy();
    return { message: "Class B form deleted successfully" };
  },
};

export default ClassBCDLService;
