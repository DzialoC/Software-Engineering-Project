import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import User from "./user.model.js";
import Vehicle from "./vehicle.model.js";

const Maintenance = db.define("Maintenance", {
  maintenanceID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
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
});

(async () => {
  await db.sync({});
})();

export default Maintenance;
