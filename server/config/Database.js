import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize('auth_db', 'root', 'atlanticcity', {
    host: "localhost",
    dialect: "mysql"
});

export default db;