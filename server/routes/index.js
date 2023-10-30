import express from "express";
import {
  GetAllUsers,
  Register,
  Login,
  Logout,
} from "../controllers/users.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const router = express.Router();

router.get("/users", tokenManager.verifyAndRefreshToken, GetAllUsers); // Protected route to get all users
router.post("/users", Register);
router.post("/login", Login);
router.delete("/logout", Logout);

export default router;
