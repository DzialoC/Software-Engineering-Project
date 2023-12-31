import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";
import Vehicle from "./vehicle.model.js";

const MaintenanceVehicle = db.define("MaintenanceVehicle", {
  maintenanceID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },

  maintenanceDescription: {
    type: DataTypes.STRING,
  },

  maintenanceDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  vehicleTag: {
    type: DataTypes.STRING(6),
    allowNull: false,
    references: {
      model: Vehicle,
      key: "vehicleTag",
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
  cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  partsReplaced: {
    type: DataTypes.STRING,
  },
  nextMaintenanceDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  nextMaintenanceWork: {
    type: DataTypes.STRING,
  },
});

(async () => {
  await db.sync({});
})();

export default MaintenanceVehicle;
