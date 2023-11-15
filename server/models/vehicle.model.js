import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";

const Vehicle = db.define(
  "Vehicle",
  {
    vehicleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },

    vehicleName: {
      type: DataTypes.STRING,
    },

    vehicleTag: {
      type: DataTypes.STRING(6),
    },

    vehicleCondition: {
      type: DataTypes.STRING(12),
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
