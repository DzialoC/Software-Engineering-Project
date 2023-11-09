import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";
import Vehicle from "./vehicle.model.js";
import Equipment from "./equipment.model.js";

const DamageReport = db.define("DamageReport", {
  reportID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },

  vehicleID: {
    type: DataTypes.INTEGER,
    references: {
      model: Vehicle,
      key: "vehicleID",
    },
  },

  equipmentID: {
    type: DataTypes.INTEGER,
    references: {
      model: Equipment,
      key: "equipmentID",
    },
  },

  reportDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  negligent: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  pictures: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

(async () => {
  await db.sync({});
})();

export default DamageReport;
