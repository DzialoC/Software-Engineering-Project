import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";
import Equipment from "./equipment.model.js";

const MaintenanceEquipement = db.define("MaintenanceEquipement", {
  maintenanceID: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

  equipmentID: {
    type: DataTypes.STRING(32),
    allowNull: true,
    references: {
      model: Equipment,
      key: "equipmentID",
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
});

(async () => {
  await db.sync({});
})();

export default MaintenanceEquipement;
