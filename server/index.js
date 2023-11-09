import mysql from "mysql2";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import tokenManager from "./middleware/TokenManager.js";
// authentification middleware
// unprot

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(req, res, (next) => {});

app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
