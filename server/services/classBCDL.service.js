import ClassBCDL from "../models/classBCDL.model.js";

const ClassBCDLService = {
  async createClassBCDL(formInput) {
    console.log("made it: ", battery);
    const classBCDLInspection = await ClassBCDL.create({
      vehicleID: vehicleID,
      userID: parsedUserID,
      comment: comment,
      airHydraulicBrakeCheck: airHydraulicBrakeCheck,
      parkingTrailerBrakeCheck: parkingTrailerBrakeCheck,
      serviceBrakeCheck: serviceBrakeCheck,
      lightingIndicators: lightingIndicators,
      emergencyEquipment: emergencyEquipment,
      windshieldTrafficMonitoringDevices: windshieldTrafficMonitoringDevices,
      wipersWashers: wipersWashers,
      heaterDefroster: heaterDefroster,
      horns: horns,
      allExternalLights: allExternalLights,
      lensesFront: lensesFront,
      fluidLevels: fluidLevels,
      fluidAirLeaks: fluidAirLeaks,
      steeringSystems: steeringSystems,
      tires: tires,
      rims: rims,
      lugNuts: lugNuts,
      springsAirBagsShocks: springsAirBagsShocks,
      brakeLinesHosesLeaks: brakeLinesHosesLeaks,
      brakeContaminates: brakeContaminates,
      lensesReflectorsSide: lensesReflectorsSide,
      trafficMonitoringDevicesSide: trafficMonitoringDevicesSide,
      battery: battery,
      fuelTanks: fuelTanks,
      frames: frames,
      lensesReflectorsRear: lensesReflectorsRear,
    });
    if (classBCDLInspection) {
      console.log("it made it?");
    }
    if (!classBCDLInspection) {
      throw new Error("Class B CDL could not be created");
    }
    return classBCDLInspection;
  },

  async getAllClassBCDL() {
    const allForms = await ClassBCDL.findAll();
    if (!allForms) {
      throw new Error("No forms found");
    }
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
      offset: offset,
    });
    return classBCDLForms;
  },

  async getRecentSpecifiedClassBForms(amount) {
    const recentClassBCDLForms = await ClassBCDL.findAll({
      order: [["createdAt", "DESC"]],
      limit: amount,
    });
    return recentClassBCDLForms;
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
