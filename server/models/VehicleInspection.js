import { Sequelize } from "sequelize";
import vchecklist_db from "../config/vehicledb.js";

const { DataTypes } = Sequelize;

const VehicleInspection = vchecklist_db.define('VehicleInspection', {
    vehicleNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    yearMakeModel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    mileage: DataTypes.INTEGER,
    workTicket: DataTypes.STRING,
    personReleasingVehicle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bodyOfVehicle: DataTypes.BOOLEAN,
    tiresConditionAndAirPressure: DataTypes.BOOLEAN,
    horn: DataTypes.BOOLEAN,
    stateInspectionAndLicSticker: DataTypes.BOOLEAN,
    wipersReservoir: DataTypes.BOOLEAN,
    lowAndHighBeamHeadlights: DataTypes.BOOLEAN,
    brakeLights: DataTypes.BOOLEAN,
    turnSignalLights: DataTypes.BOOLEAN,
    emergencyFlasherLights: DataTypes.BOOLEAN,
    vehicleInsuranceCardValid: DataTypes.BOOLEAN,
    gasTankFull: DataTypes.BOOLEAN,
    emergencyInstructions: DataTypes.BOOLEAN,
    washVehicle: DataTypes.BOOLEAN,
    comments: DataTypes.TEXT,
    dpwSignature: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

(async () => {
    await vchecklist_db.sync();
})();

export default VehicleInspection;
