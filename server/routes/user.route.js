// user.route.js
import express from "express";
import {
  GetAllUsers,
  Register,
  Login,
  Logout,
} from "../controllers/users.controller.js";
import tokenManager from "../middleware/TokenManager.js";

const userRouter = express.Router();

// User routes
userRouter.get("/", tokenManager.verifyAndRefreshToken, GetAllUsers); // Protected route to get all users
userRouter.post("/register", Register); // Public route for user registration
userRouter.post("/login", Login); // Public route for user login
userRouter.delete("/logout", Logout); // Public route for user logout

export default userRouter;
