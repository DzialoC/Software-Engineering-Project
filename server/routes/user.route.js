// user.route.js
import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
} from "../controllers/users.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const router = express.Router();

// get
router.get("/getusers", tokenManager.verifyAndRefreshToken, getUsers);

// post
router.post("/users", Register);
router.post("/login", Login);

// Delete
router.delete("/logout", Logout);

export default router;
