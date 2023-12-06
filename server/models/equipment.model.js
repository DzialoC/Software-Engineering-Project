import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Equipment = db.define("Equipment", {
  equipmentID: {
    type: DataTypes.STRING(32),
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  equipmentDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  equipmentCondition: {
    type: DataTypes.STRING(16),
    allowNull: false,
  },
  underMaintenance: {
    type: DataTypes.BOOLEAN,
  },
});

(async () => {
  await db.sync({});
})();

export default Equipment;
