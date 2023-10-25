import { DataTypes } from 'sequelize';
import db from '../config/vehicledb.js';
import User from './UserModel.js';
import Vehicle from './Vehicle.js';

const Maintenance = db.define('Maintenance', {
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

  vehicleID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Vehicle,
      key: 'vehicleID'
    }
  },

  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },

});

(async () => {
  await db.sync();
})();

export default Maintenance;
