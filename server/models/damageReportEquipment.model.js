import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";
import Equipment from "./equipment.model.js";

const DamageReportEquipment = db.define("DamageReportEquipment", {
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

  equipmentID: {
    type: DataTypes.STRING(32),
    allowNull: true,
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

export default DamageReportEquipment;
