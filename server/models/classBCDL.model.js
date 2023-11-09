// see link page 12 https://www.nj.gov/mvc/pdf/license/CDL_Chapter_11.pdf

import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";
import Vehicle from "./vehicle.model.js";

const ClassBCDL = db.define("ClassBCDL", {
  vehicleID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Vehicle,
      key: "vehicleID",
    },
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // In-Vehicle/Engine Start
  airHydraulicBrakeCheck: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  parkingTrailerBrakeCheck: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  serviceBrakeCheck: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  lightingIndicators: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  emergencyEquipment: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  windshieldTrafficMonitoringDevices: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  wipersWashers: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  heaterDefroster: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  horns: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // Lights Operations Check
  allExternalLights: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // Front of Vehicle/Engine Area
  lensesFront: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  fluidLevels: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  fluidAirLeaks: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  steeringSystems: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // Steering Axle
  tires: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  rims: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  lugNuts: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  springsAirBagsShocks: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  brakeLinesHosesLeaks: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  brakeContaminates: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // Side of Vehicle
  lensesReflectorsSide: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  trafficMonitoringDevicesSide: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  battery: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  fuelTanks: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  frames: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // Rear of Vehicle
  lensesReflectorsRear: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

(async () => {
  await db.sync({});
})();

export default ClassBCDL;
