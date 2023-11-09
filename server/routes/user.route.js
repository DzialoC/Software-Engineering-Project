// user.route.js
import express from "express";
import {
  GetAllUsers,
  Register,
  Login,
  Logout,
} from "../controllers/users.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const userRouter = express.Router();

// User routes
userRouter.get("/", isAuthenticated, GetAllUsers); // Protected route to get all users
userRouter.post("/register", Register); // Public route for user registration
userRouter.post("/login", Login); // Public route for user login
userRouter.delete("/logout", Logout); // Public route for user logout

export default userRouter;
