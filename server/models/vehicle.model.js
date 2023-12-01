import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";

const Vehicle = db.define(
  "Vehicle",
  {
    vehicleID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },

    vehicleName: {
      type: DataTypes.STRING(64),
    },

    vehicleTag: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },

    vehicleCondition: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },

    vehicleMake: {
      type: DataTypes.STRING(18),
      allowNull: false,
    },

    vehicleModel: {
      type: DataTypes.STRING(18),
      allowNull: false,
    },

    vehicleYear: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },

    lastUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    // Exclude timestamps
    timestamps: false,
  }
);

(async () => {
  await db.sync({});
})();

export default Vehicle;
