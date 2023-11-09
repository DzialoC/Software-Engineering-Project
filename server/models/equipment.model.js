import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";

const Equipment = db.define("Equipment", {
  equipmentID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  equipmentCondition: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
});

(async () => {
  await db.sync({});
})();

export default Equipment;
