import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";

const Vehicle = db.define("Vehicle", {
  vehicleID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  vehicleName: {
    type: DataTypes.STRING,
  },

  vehicleCondition: {
    type: DataTypes.STRING,
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
});

(async () => {
  await db.sync({});
})();

export default Vehicle;
