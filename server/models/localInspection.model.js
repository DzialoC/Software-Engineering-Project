import { Sequelize } from "sequelize";
import db from "../config/vehicledb.js";
import User from "./user.model.js";

const { DataTypes } = Sequelize;

const VehicleInspection = db.define('VehicleInspection', {
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
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
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
    await db.sync();
})();

export default VehicleInspection;
