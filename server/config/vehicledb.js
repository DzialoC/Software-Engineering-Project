import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

const vchecklist_db = new Sequelize('vchecklist', 'root', 'atlanticcity', {
    host: "localhost",
    dialect: "mysql"
});

export default vchecklist_db;