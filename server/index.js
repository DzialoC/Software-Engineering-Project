import mysql from "mysql2";
import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";


import vehicleInspectionRoutes from './routes/vehicleInspectionRoutes.js';

dotenv.config();
const app = express();

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.post('/api/vehicle-inspection', (req, res) => {
  console.log('Vehicle inspection endpoint hit');
  app.use('/api/vehicle-inspection', vehicleInspectionRoutes);
});


app.listen(5000, ()=> console.log('Server running at port 5000'));



const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();


app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});
