import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";
import Vehicle from "./vehicle.model.js";

const DamageReportVehicle = db.define("DamageReportVehicle", {
  reportID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  userID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User,
      key: "id",
    },
  },

  vehicleTag: {
    type: DataTypes.STRING(6),
    allowNull: true,
    references: {
      model: Vehicle,
      key: "vehicleTag",
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

export default DamageReportVehicle;
