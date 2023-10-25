import mysql from "mysql2";
import express from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";


import vehicleInspectionRoutes from './routes/Routes.vehicleInspection.js';

dotenv.config();
const app = express();

app.use(cors({ credentials:true, origin:'http://localhost:5000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.post('/api/vehicle-inspection', (req, res) => {
  console.log('Vehicle inspection endpoint hit');
  app.use('/api/vehicle-inspection', vehicleInspectionRoutes);
});

app.listen(5000, ()=> console.log('Server running at port 5000'));
